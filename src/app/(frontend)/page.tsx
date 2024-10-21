"use client";
import Hero from "@/components/frontend/home/hero";
import Slider from "@/components/frontend/home/slider";
// import { fakeSliderData } from "@/lib/fake-data";
import { useEffect, useState } from "react";
import { getAllServices } from "../../../actions/service/get-all-service";
import Loading from "./loading";
import { getSlider } from "../../../actions/slider/get-slider";
import { sliderType } from "@/types/types";

export default function Home() {
  interface TService {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    rating: number;
    reviews: number;
    banner: string;
    createdAt: string;
    created_by: {
      _id: string;
      first_name: string;
      last_name: string;
      avatar: null;
    };
    updatedAt: string;
  }

  const [services, setServices] = useState<TService[]>([]);
  const [sliders, setSliders] = useState<sliderType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // get service data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllServices();
        setServices(response?.data || []);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // get slider data
  useEffect(() => {
    const getSliderData = async () => {
      try {
        const response = await getSlider("hero");
        setSliders(response?.data[0] || null);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getSliderData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="container mx-auto flex flex-col items-center justify-center mt-5">
      <Slider slider={sliders} />
      {services?.map((data, i) => (
        <Hero
          key={i}
          heading={data.title}
          description={data.description}
          img={data.thumbnail}
          index={i + 1}
        />
      ))}
    </main>
  );
}

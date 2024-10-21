"use client";
import React, { useState } from "react";
import ButtonOverLogo from "../buttonOverLogo";
import { motion } from "framer-motion";
import Input from "./input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { sendEmail } from "../../../../actions/contact/send-email";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2, "Name must be at least 2 characters long"),
  email: z.string({ required_error: "Email is required" }).email("Invalid email address"),
  phone: z.string({ required_error: "Phone is required" }).min(6, "Phone must be at least 6 characters long"),
  location: z.string({ required_error: "Location is required" }).min(2, "Location must be at least 2 characters long"),
  details: z.string({ required_error: "Details are required" }).min(10, "Details must be at least 10 characters long"),
  iam: z.string({ required_error: "Please select who you are" }).min(2, "Please select who you are")});

type FormSchema = z.infer<typeof formSchema>;

function Form() {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit", // Validate on form submission
    reValidateMode: "onChange", // Revalidate when the input changes
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      if (response.error) {
        toast(response.error);
      } else {
        toast(response.message);
      }
      reset({
        name: "",
        email: "",
        phone: "",
        location: "",
        details: "",
        iam: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.01 }}
      className="min-w-[48%]"
    >
      <form
        className="flex flex-col font-openSans gap-3 lg:mt-0 mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <>
              <Input type="text" placeholder="NAME" {...field} />
              {errors.name && <p className="text-red">{errors.name.message}</p>}
            </>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <Input type="text" placeholder="EMAIL ADDRESS" {...field} />
              {errors.email && <p className="text-red">{errors.email.message}</p>}
            </>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <>
              <Input type="text" placeholder="PHONE NUMBER" {...field} />
              {errors.phone && <p className="text-red">{errors.phone.message}</p>}
            </>
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <>
              <Input type="text" placeholder="LOCATION" {...field} />
              {errors.location && <p className="text-red">{errors.location.message}</p>}
            </>
          )}
        />
        <Controller
          name="details"
          control={control}
          render={({ field }) => (
            <>
              <textarea
                className="bg-primary border-none text-[#a7a1a4] h-[4.25rem] text-center px-5 text-[16px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
                placeholder="DETAILS"
                {...field}
              />
              {errors.details && <p className="text-red">{errors.details.message}</p>}
            </>
          )}
        />
        <Controller
          name="iam"
          control={control}
          render={({ field }) => (
            <>
              <select
                id="dropdown"
                className="bg-primary font-openSans border-none text-[#a7a1a4] text-center leading-3 px-5 text-[16px] focus-visible:outline-none py-2"
                {...field}
              >
                <option value="">I AM A...</option>
                <option value="Home Owner">Home Owner</option>
                <option value="Designer">Designer</option>
              </select>
              {errors.iam && <p className="text-red">{errors.iam.message}</p>}
            </>
          )}
        />
        <ButtonOverLogo loading={loading}>
          <span className="flex items-center justify-center gap-2">
            {loading ? <FaSpinner className="animate-spin" size={22} /> : "SUBMIT"}
          </span>
        </ButtonOverLogo>
      </form>
    </motion.div>
  );
}

export default Form;

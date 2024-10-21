import Image from "next/image";
import { motion } from "framer-motion";
import { generateImage } from "@/lib/utils";

const Hero = ({
  heading,
  description,
  img,
  index,
}: {
  heading: string;
  description: string;
  img: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      viewport={{ once: true, amount: 0.01 }}
      className={`lg:flex ${
        index % 2 !== 0 ? "flex-row" : "flex-row-reverse"
      } justify-center items-start lg:items-center w-full`}
    >
      <div className="aspect-square flex justify-center lg:w-[50%] overflow-hidden ">
        {img && (
          <Image
            className="select-none mb-5 lg:mb-0 w-full h-full object-cover"
            src={generateImage(img)}
            alt="interior design"
            width="1000"
            height="1000"
          />
        )}
      </div>
      <div className="flex flex-col justify-center min-h-full text-center [text-align-last:center] font-semibold tracking-[3px] leading-7 lg:w-[50%] lg:px-10 text-lightText pt-5">
        <h1 className="header font-palatino tracking-[5px] xl:text-xl lg:text-lg uppercase">
          {heading}
        </h1>
        <div className="flex justify-center p-8">
          <Image width="80" height="10" src="/divider.png" alt="divder" />
        </div>
        <p className="[word-spacing:2px] pb-3 xl:text-lg lg:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;

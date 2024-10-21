"use client";
import { TFaq } from "@/app/(frontend)/get-started/page";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function AccordionComponent({ faqData }: { faqData: TFaq[] }) {
  return (
    <Accordion allowZeroExpanded>
      {faqData?.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                backgroundColor: "#efece8", // Custom color
                border: "1px solid #c5c3c1", // Custom border
              }}
              className="accordion accordion__button flex items-center justify-start gap-3 select-none"
            >
              <div className="w-[90%]">{item.title}</div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p
              className="prose max-w-none prose-headings:font-normal prose-headings:uppercase text-justify text-[16px] font-openSans leading-8 tracking-[2px] font-semibold opacity-80"
              dangerouslySetInnerHTML={{ __html: item.description || "" }}
            />
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;

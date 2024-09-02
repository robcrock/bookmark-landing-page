import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    triggerText: "What is Bookmark?",
    contentText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    value: "item-2",
    triggerText: "How can I request a new browser?",
    contentText:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    value: "item-3",
    triggerText: "Is there a mobile app?",
    contentText:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    value: "item-4",
    triggerText: "What about other Chromium browsers?",
    contentText:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export default function FAQ() {
  return (
    <section
      className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 py-20 md:h-[800px] md:px-0"
      id="faq"
    >
      <h2 className="mb-4 text-center text-2xl font-medium leading-tight text-very-dark-blue md:text-3xl md:leading-[52px]">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto mb-14 max-w-lg text-center text-base leading-[25px] text-grayish-blue md:text-lg md:leading-[28px]">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <Accordion
        type="single"
        collapsible
        className="border-t-fem-grayish-blue/14 mx-auto mb-[54px] w-full border-t md:w-[540px]"
      >
        {faqItems.map(({ value, triggerText, contentText }) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-b-fem-grayish-blue/14 w-full"
          >
            <AccordionTrigger className="text-start text-[15px] font-normal leading-[32px] text-very-dark-blue hover:text-soft-red md:text-[18px]">
              {triggerText}
            </AccordionTrigger>
            <AccordionContent>{contentText}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="h-12 w-[114px] bg-soft-blue text-white hover:border-2 hover:border-soft-blue hover:bg-white hover:text-soft-blue">
        More Info
      </Button>
    </section>
  );
}

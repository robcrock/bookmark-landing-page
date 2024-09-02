"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureContent } from "@/components/feature-content";

const commonTabsTriggerClasses =
  "text-very-dark-blue hover:text-soft-red data-[state=active]:text-very-dark-blue data-[state=active]:border-soft-red after:bg-soft-red relative w-full rounded-none border-b border-[#495DCF] border-opacity-20 bg-transparent px-8 pb-[13px] font-normal text-opacity-75 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-x-0 after:transition-transform focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:pb-[13px] data-[state=active]:shadow-none data-[state=active]:after:scale-x-100";

const featuresTabs = [
  {
    value: "simple-bookmarking",
    triggerText: "Simple Bookmarking",
    imageSrc: "/images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    value: "speedy-searching",
    triggerText: "Speedy Searching",
    imageSrc: "/images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    value: "easy-sharing",
    triggerText: "Easy Sharing",
    imageSrc: "/images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="container mx-auto flex min-h-screen flex-col items-center space-y-10 px-8 py-20 md:px-0"
    >
      <div className="mb-10 flex flex-col items-center md:mb-[72px]">
        <h2 className="mb-4 text-2xl font-medium leading-tight text-very-dark-blue md:text-3xl md:leading-[52px]">
          Features
        </h2>
        <p className="mx-auto max-w-lg text-center text-base leading-[25px] text-grayish-blue md:text-lg md:leading-[28px]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tabs
        defaultValue={featuresTabs[0].value}
        className="flex w-full flex-col space-y-[72px] md:space-y-0"
      >
        <TabsList className="mx-auto mb-16 flex w-full flex-col justify-center bg-transparent text-base leading-[17px] tracking-[0.53px] md:w-[729px] md:flex-row">
          {featuresTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={commonTabsTriggerClasses}
            >
              {tab.triggerText}
            </TabsTrigger>
          ))}
        </TabsList>
        {featuresTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <FeatureContent
              imageSrc={tab.imageSrc}
              title={tab.title}
              description={tab.description}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

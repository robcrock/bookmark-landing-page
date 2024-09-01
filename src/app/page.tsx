"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureContent } from "@/components/feature-content";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";

const commonTabsTriggerClasses =
  "text-very-dark-blue hover:text-soft-red data-[state=active]:border-soft-red after:bg-soft-red relative w-full rounded-none border-b border-[#495DCF] border-opacity-20 bg-transparent px-8 pb-[13px] font-normal text-opacity-75 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-x-0 after:transition-transform focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:pb-[13px] data-[state=active]:shadow-none data-[state=active]:after:scale-x-100";

const getCardClassName = (index: number) => {
  const baseClasses =
    "flex max-w-[280px] flex-col items-center rounded-[5px] bg-white pb-6 pt-[49px] shadow-[0_10px_20px_-5px_rgba(73,93,207,0.2)]";
  const translateClasses = [
    "md:translate-y-0",
    "md:translate-y-10",
    "md:translate-y-20",
  ];
  return `${baseClasses} ${translateClasses[index]}`;
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <main className="min-h-screen">
      {/* Header and Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col px-8 md:h-[768px] md:px-0">
        {/* Header */}
        <header className="flex w-full items-center justify-between py-10 md:py-12">
          <div className="flex-1">
            <Image
              src="/images/logo-bookmark-light.svg"
              alt="Bookmark logo"
              width={148}
              height={25}
            />
          </div>
          <nav className="hidden min-w-[548px] items-center justify-between text-[13px] tracking-[1.5px] md:flex">
            <Link
              href="#features"
              className="text-very-dark-blue hover:text-soft-red"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              className="text-very-dark-blue hover:text-soft-red"
            >
              PRICING
            </Link>
            <Link
              href="#contact"
              className="text-very-dark-blue hover:text-soft-red"
            >
              CONTACT
            </Link>
          </nav>
          <div className="flex flex-1 justify-end md:hidden">
            <Button
              className="bg-transparent p-0 shadow-none hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Image
                src="/images/icon-hamburger.svg"
                alt="Menu"
                width={24}
                height={18}
              />
            </Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Button className="h-10 w-[111px] rounded-[5px] border-2 border-soft-red bg-soft-red hover:bg-white hover:text-soft-red">
              LOGIN
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex h-full w-full flex-col justify-between bg-very-dark-blue/95 pb-12 pt-10">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <Image
                  src="/images/logo-bookmark-menu.svg"
                  alt="Bookmark logo"
                  width={148}
                  height={25}
                />
                <Button
                  className="bg-transparent p-0 hover:bg-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/images/icon-close.svg"
                    alt="Close menu"
                    width={16}
                    height={15}
                  />
                </Button>
              </div>
              <nav className="mt-10 flex flex-col items-center space-y-6 border-b border-b-white/20 text-center text-xl text-white">
                <Link
                  href="#features"
                  className="w-full border-t border-white/20 py-4"
                >
                  FEATURES
                </Link>
                <Link
                  href="#pricing"
                  className="w-full border-t border-white/20 py-4"
                >
                  PRICING
                </Link>
                <Link
                  href="#contact"
                  className="w-full border-t border-white/20 py-4"
                >
                  CONTACT
                </Link>
              </nav>
              <Button className="mt-6 h-12 w-full rounded-[5px] border-2 border-white bg-transparent text-white">
                LOGIN
              </Button>
            </div>
            <div className="flex justify-center space-x-10">
              <Image
                src="/images/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <Image
                src="/images/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </div>
          </div>
        )}

        {/* Hero */}
        <div className="flex flex-1 flex-col-reverse items-center justify-center md:flex-row">
          <div className="mt-14 w-full text-center md:mt-0 md:w-1/2 md:text-left">
            <h1 className="mb-4 text-3xl font-medium leading-tight text-very-dark-blue md:mb-6 md:text-5xl md:leading-[52px]">
              A Simple Bookmark Manager
            </h1>
            <p className="mb-8 text-[15px] leading-[25px] text-grayish-blue md:text-base md:text-lg md:leading-[28px]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex space-x-4">
              <Button className="mb-3 h-12 w-full border-2 border-soft-blue bg-soft-blue py-3 text-sm shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:bg-white hover:text-soft-blue md:mb-0 md:h-10 md:w-[166px] md:py-5">
                Get it on Chrome
              </Button>
              <Button className="h-12 w-full bg-fem-soft-grayish py-3 text-sm text-very-dark-blue shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:border-very-dark-blue md:h-10 md:w-[166px] md:py-5">
                Get it on Firefox
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 md:flex-1">
            <div className="relative h-[250px] w-full md:h-[400px]">
              <Image
                src="/images/illustration-hero.svg"
                alt="Hero illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority
              />
            </div>
            <div className="absolute bottom-2 left-20 -z-10 h-[200px] w-[150%] rounded-l-full bg-soft-blue md:-bottom-10 md:left-[180px] md:h-4/5"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto flex min-h-screen flex-col items-center space-y-10 px-8 py-20 md:px-0"
      >
        <div className="mb-10 flex flex-col items-center md:mb-[72px]">
          <h2 className="mb-4 text-2xl font-medium leading-tight text-very-dark-blue md:text-3xl md:leading-[52px]">
            Features
          </h2>
          <p className="mx-auto max-w-lg text-center text-base leading-[25px] text-grayish-blue md:text-lg md:leading-[28px]">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
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

      {/* Download Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 py-20 md:h-[800px] md:px-0">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-medium leading-tight text-very-dark-blue md:text-3xl md:leading-[52px]">
            Download the extension
          </h2>
          <p className="mx-auto max-w-lg text-center text-base leading-[25px] text-grayish-blue md:text-lg md:leading-[28px]">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex max-w-[911px] flex-col justify-center space-y-10 md:flex-row md:space-x-[34px] md:space-y-0">
          {[
            { browser: "chrome", minVersion: 62 },
            { browser: "firefox", minVersion: 55 },
            { browser: "opera", minVersion: 46 },
          ].map(({ browser, minVersion }, index) => (
            <Card key={browser} className={getCardClassName(index)}>
              <CardHeader className="flex flex-col items-center space-y-0 p-0">
                <Image
                  src={`/images/logo-${browser}.svg`}
                  alt={`${browser} logo`}
                  width={102}
                  height={100}
                  className="mb-8"
                />
                <CardTitle className="mb-[6px] mt-0 text-xl font-medium text-very-dark-blue">
                  Add to {browser[0].toUpperCase() + browser.slice(1)}
                </CardTitle>
                <CardDescription className="text-[15px] leading-[28px] text-grayish-blue">
                  Minimum version {minVersion}
                </CardDescription>
              </CardHeader>
              <CardContent className="mb-[24px] mt-[32px] p-0">
                <Image
                  src="/images/bg-dots.svg"
                  alt="Dots"
                  width={280}
                  height={4}
                />
              </CardContent>
              <CardFooter className="p-0">
                <Button className="h-12 w-full rounded-[5px] border-soft-blue bg-soft-blue hover:text-soft-blue">
                  Add & Install Extension
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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
              <AccordionTrigger className="text-start text-[15px] font-normal leading-[32px] text-very-dark-blue md:text-[18px]">
                {triggerText}
              </AccordionTrigger>
              <AccordionContent>{contentText}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="h-12 w-[114px] bg-soft-blue">More Info</Button>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex min-h-[400px] w-full flex-col items-center justify-center bg-soft-blue px-8 py-16 md:h-[360px] md:px-0"
      >
        <div className="mx-auto text-center">
          <p className="mb-4 text-[13px] font-medium uppercase leading-[40px] tracking-[4px] text-white md:mb-6">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="mx-auto mb-6 max-w-md text-2xl font-bold leading-tight text-white md:mb-8 md:text-[32px] md:leading-10">
            Stay up-to-date with what we're doing
          </h2>
          <form className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full bg-[#ffffff] md:w-auto"
            />
            <Button
              type="submit"
              className="h-12 w-full border-2 border-soft-red bg-soft-red hover:bg-white hover:text-soft-red md:w-[126px]"
            >
              Contact Us
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex min-h-min flex-col items-center bg-very-dark-blue py-10 text-white md:h-[88px] md:flex-row">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0">
            <Image
              src="/images/logo-bookmark-dark.svg"
              alt="Bookmark logo"
              width={148}
              height={25}
              className="mb-8 md:mb-0 md:mr-16"
            />
            <nav className="flex flex-col space-y-6 text-center md:flex-row md:space-x-11 md:space-y-0">
              {["features", "pricing", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-[13px] font-normal uppercase leading-[17px] tracking-[1.5px] hover:text-soft-red"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex space-x-8 md:mt-0">
            <a href="#" aria-label="Facebook">
              <Image
                src="/images/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Image
                src="/images/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={20}
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

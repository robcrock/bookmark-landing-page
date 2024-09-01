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

const commonTabsTriggerClasses =
  "text-very-dark-blue hover:text-soft-red data-[state=active]:border-soft-red after:bg-soft-red relative w-full rounded-none border-b border-[#495DCF] border-opacity-20 bg-transparent px-8 pb-[13px] font-normal text-opacity-75 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-x-0 after:transition-transform focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:pb-[13px] data-[state=active]:shadow-none data-[state=active]:after:scale-x-100";

export default function Home() {
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

  return (
    <main className="min-h-screen">
      {/* Header and Hero Section */}
      <section className="container mx-auto flex h-[768px] flex-col">
        {/* Header */}
        <header className="flex w-full items-center justify-between py-12">
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
          <div className="flex flex-1 justify-end">
            <Button className="h-10 w-[111px] rounded-[5px] border-2 border-soft-red bg-soft-red hover:bg-white hover:text-soft-red">
              LOGIN
            </Button>
          </div>
        </header>

        {/* Hero */}
        <div className="flex flex-1 items-center justify-center md:flex-row">
          <div className="w-[540px] md:w-1/2">
            <h1 className="mb-6 text-5xl font-medium leading-[52px] text-very-dark-blue md:text-5xl">
              A Simple Bookmark Manager
            </h1>
            <p className="mb-8 text-lg leading-[28px] text-grayish-blue">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="space-x-4">
              <Button className="h-10 w-[166px] border-2 border-soft-blue bg-soft-blue py-5 shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:bg-white hover:text-soft-blue">
                Get it on Chrome
              </Button>
              <Button className="h-10 w-[166px] bg-fem-soft-grayish py-5 text-very-dark-blue shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:border-very-dark-blue">
                Get it on Firefox
              </Button>
            </div>
          </div>
          <div className="relative flex-1 md:w-1/2">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/illustration-hero.svg"
                alt="Hero illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "center right" }}
                priority
              />
            </div>
            <div className="absolute -bottom-10 left-[180px] -z-10 h-4/5 w-[150%] rounded-l-full bg-soft-blue"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto flex h-[800px] flex-col items-center"
      >
        <div className="mb-[72px] flex flex-col items-center">
          <h2 className="mb-4 text-3xl font-medium leading-[52px] text-very-dark-blue">
            Features
          </h2>
          <p className="mx-auto max-w-lg text-center text-lg leading-[28px] text-grayish-blue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Tabs defaultValue="simple-bookmarking" className="w-full">
          <TabsList className="mx-auto mb-16 flex w-[729px] justify-center bg-transparent text-base leading-[17px] tracking-[0.53px]">
            <TabsTrigger
              value="simple-bookmarking"
              className={commonTabsTriggerClasses}
            >
              Simple Bookmarking
            </TabsTrigger>
            <TabsTrigger
              value="speedy-searching"
              className={commonTabsTriggerClasses}
            >
              Speedy Searching
            </TabsTrigger>
            <TabsTrigger
              value="easy-sharing"
              className={commonTabsTriggerClasses}
            >
              Easy Sharing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="simple-bookmarking">
            <FeatureContent
              imageSrc="/images/illustration-features-tab-1.svg"
              title="Bookmark in one click"
              description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
            />
          </TabsContent>
          <TabsContent value="speedy-searching">
            <FeatureContent
              imageSrc="/images/illustration-features-tab-2.svg"
              title="Intelligent search"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          </TabsContent>
          <TabsContent value="easy-sharing">
            <FeatureContent
              imageSrc="/images/illustration-features-tab-3.svg"
              title="Share your bookmarks"
              description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Download Section */}
      <section className="container mx-auto flex h-[800px] flex-col items-center justify-center">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="mb-4 text-3xl font-medium leading-[52px] text-very-dark-blue">
            Download the extension
          </h2>
          <p className="mx-auto max-w-lg text-center text-lg leading-[28px] text-grayish-blue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex max-w-[911px] flex-col justify-center space-y-8 md:flex-row md:space-x-[34px] md:space-y-0">
          {[
            { browser: "chrome", minVersion: 62 },
            { browser: "firefox", minVersion: 55 },
            { browser: "opera", minVersion: 46 },
          ].map(({ browser, minVersion }, index) => (
            <Card
              key={browser}
              className={`flex max-w-[280px] flex-col items-center rounded-[5px] bg-white pb-6 pt-[49px] shadow-[0_10px_20px_-5px_rgba(73,93,207,0.2)]`}
              style={{ transform: `translateY(${index * 40}px)` }}
            >
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
        className="container mx-auto flex h-[800px] flex-col items-center justify-center"
        id="faq"
      >
        <h2 className="mb-4 text-3xl font-medium leading-[52px] text-very-dark-blue">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-lg leading-[28px] text-grayish-blue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <Accordion
          type="single"
          collapsible
          className="border-t-fem-grayish-blue/14 mx-auto mb-[54px] w-[540px] border-t"
        >
          {faqItems.map(({ value, triggerText, contentText }) => (
            <AccordionItem
              key={value}
              value={value}
              className="border-b-fem-grayish-blue/14 w-full"
            >
              <AccordionTrigger className="text-[18px] font-normal leading-[32px] text-very-dark-blue">
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
        className="flex h-[360px] w-full flex-col items-center justify-center bg-soft-blue"
      >
        <div className="mx-auto text-center">
          <p className="mb-6 text-[13px] font-medium uppercase leading-[40px] tracking-[4px] text-white">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="mx-auto mb-8 max-w-md text-[32px] font-bold leading-10 text-white">
            Stay up-to-date with what we're doing
          </h2>
          <form className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 bg-fem-soft-grayish md:w-full"
            />
            <Button
              type="submit"
              className="h-12 w-[126px] border-2 border-soft-red bg-soft-red hover:bg-white hover:text-soft-red md:w-auto"
            >
              Contact Us
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex h-[88px] items-center bg-very-dark-blue text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0">
            <Image
              src="/images/logo-bookmark-dark.svg"
              alt="Bookmark logo"
              width={148}
              height={25}
              className="mr-16"
            />
            <nav className="flex flex-col space-y-4 md:flex-row md:space-x-11 md:space-y-0">
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

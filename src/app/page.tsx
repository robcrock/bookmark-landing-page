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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header and Hero Section */}
      <section className="container mx-auto flex h-[768px] flex-col">
        {/* Header */}
        <header className="flex w-full items-center justify-between py-12">
          <div className="flex-1">
            <Image
              src="/images/logo-bookmark.svg"
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
            <Button className="bg-soft-red hover:text-soft-red border-soft-red h-10 w-[111px] rounded-[5px] border-2 hover:bg-white">
              LOGIN
            </Button>
          </div>
        </header>

        {/* Hero */}
        <div className="flex flex-1 items-center justify-center md:flex-row">
          <div className="w-[540px] md:w-1/2">
            <h1 className="text-very-dark-blue mb-6 text-5xl font-medium leading-[52px] md:text-5xl">
              A Simple Bookmark Manager
            </h1>
            <p className="text-grayish-blue mb-8 text-lg leading-[28px]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="space-x-4">
              <Button className="bg-soft-blue hover:text-soft-blue border-soft-blue h-10 w-[166px] border-2 py-5 shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:bg-white">
                Get it on Chrome
              </Button>
              <Button className="text-very-dark-blue bg-fem-soft-grayish hover:border-very-dark-blue h-10 w-[166px] py-5 shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)]">
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
            <div className="bg-soft-blue absolute -bottom-10 left-[180px] -z-10 h-4/5 w-[150%] rounded-l-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto flex h-[800px] flex-col justify-center"
      >
        <h2 className="text-very-dark-blue mb-4 text-3xl font-bold">
          Features
        </h2>
        <p className="text-grayish-blue mx-auto mb-8 max-w-lg">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <div className="mb-16 flex justify-center space-x-8">
          <button className="text-very-dark-blue border-soft-red border-b-4 pb-4">
            Simple Bookmarking
          </button>
          <button className="text-grayish-blue hover:text-very-dark-blue">
            Speedy Searching
          </button>
          <button className="text-grayish-blue hover:text-very-dark-blue">
            Easy Sharing
          </button>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative mb-8 md:mb-0 md:w-1/2">
            <Image
              src="/images/illustration-features-tab-1.svg"
              alt="Feature illustration"
              width={536}
              height={346}
            />
            <div className="bg-soft-blue absolute -bottom-10 -left-10 -z-10 h-4/5 w-3/4 rounded-r-full"></div>
          </div>
          <div className="space-y-8 text-left md:w-1/2 md:pl-16">
            <h3 className="text-very-dark-blue text-2xl font-bold">
              Bookmark in one click
            </h3>
            <p className="text-grayish-blue">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <Button className="bg-soft-blue hover:text-soft-blue border-soft-blue border-2 hover:bg-white">
              More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto flex h-[800px] flex-col justify-center">
        <h2 className="text-very-dark-blue mb-4 text-3xl font-bold">
          Download the extension
        </h2>
        <p className="text-grayish-blue mx-auto mb-8 max-w-lg">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
        <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {["chrome", "firefox", "opera"].map((browser, index) => (
            <div
              key={browser}
              className={`flex flex-col items-center space-y-4 rounded-lg bg-white p-8 shadow-lg ${
                index === 1
                  ? "md:translate-y-4"
                  : index === 2
                    ? "md:translate-y-8"
                    : ""
              }`}
            >
              <Image
                src={`/images/logo-${browser}.svg`}
                alt={`${browser} logo`}
                width={102}
                height={100}
              />
              <h3 className="text-very-dark-blue text-xl font-bold">
                Add to {browser[0].toUpperCase() + browser.slice(1)}
              </h3>
              <p className="text-grayish-blue">Minimum version {index + 55}</p>
              <Image
                src="/images/bg-dots.svg"
                alt="Dots"
                width={280}
                height={4}
              />
              <Button className="bg-soft-blue hover:text-soft-blue border-soft-blue w-full border-2 hover:bg-white">
                Add & Install Extension
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="container mx-auto flex h-[800px] flex-col justify-center"
      >
        <h2 className="text-very-dark-blue mb-4 text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-grayish-blue mx-auto mb-8 max-w-lg">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <Accordion type="single" collapsible className="mx-auto max-w-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Bookmark?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I request a new browser?
            </AccordionTrigger>
            <AccordionContent>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
            <AccordionContent>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What about other Chromium browsers?
            </AccordionTrigger>
            <AccordionContent>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="bg-soft-blue hover:text-soft-blue border-soft-blue mt-8 border-2 hover:bg-white">
          More Info
        </Button>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-soft-blue flex h-[360px] items-center"
      >
        <div className="container mx-auto text-center">
          <p className="mb-8 text-sm uppercase tracking-widest text-white">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="mx-auto mb-8 max-w-md text-3xl font-bold text-white">
            Stay up-to-date with what we&apos;re doing
          </h2>
          <form className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="md:w-80"
            />
            <Button
              type="submit"
              className="bg-soft-red hover:text-soft-red border-soft-red w-full border-2 hover:bg-white md:w-auto"
            >
              Contact Us
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-very-dark-blue flex h-[88px] items-center text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <Image
              src="/images/logo-bookmark.svg"
              alt="Bookmark logo"
              width={148}
              height={25}
            />
            <nav className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <Link href="#features" className="hover:text-soft-red">
                FEATURES
              </Link>
              <Link href="#pricing" className="hover:text-soft-red">
                PRICING
              </Link>
              <Link href="#contact" className="hover:text-soft-red">
                CONTACT
              </Link>
            </nav>
          </div>
          <div className="mt-8 flex space-x-8 md:mt-0">
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

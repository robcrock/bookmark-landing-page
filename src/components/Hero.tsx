import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-1 flex-col-reverse items-center justify-center md:flex-row">
      <div className="mt-14 w-full text-center md:mt-0 md:w-1/2 md:text-left">
        <h1 className="mb-4 text-3xl font-medium leading-tight text-very-dark-blue md:mb-6 md:text-5xl md:leading-[52px]">
          A Simple Bookmark Manager
        </h1>
        <p className="mb-8 text-[15px] leading-[25px] text-grayish-blue md:text-base md:text-lg md:leading-[28px]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex space-x-4">
          <Button className="mb-3 h-12 w-full border-2 border-soft-blue bg-soft-blue py-3 text-sm text-white shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:bg-white hover:text-soft-blue md:mb-0 md:h-10 md:w-[166px] md:py-5">
            Get it on Chrome
          </Button>
          <Button className="h-12 w-full border-2 border-fem-soft-grayish bg-fem-soft-grayish py-3 text-sm text-very-dark-blue shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:border-2 hover:border-fem-very-dark-blue hover:bg-white hover:text-fem-very-dark-blue md:h-10 md:w-[166px] md:py-5">
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
        <div className="absolute bottom-2 left-20 -z-10 h-[200px] w-full rounded-l-full bg-soft-blue md:-bottom-10 md:left-[180px] md:h-4/5"></div>
      </div>
    </div>
  );
}

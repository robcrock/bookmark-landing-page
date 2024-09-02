import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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

export default function Download() {
  return (
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
              <Button className="h-12 w-full rounded-[5px] border-2 border-soft-blue bg-soft-blue text-white hover:bg-white hover:text-soft-blue">
                Add & Install Extension
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

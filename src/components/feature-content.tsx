import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureContentProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function FeatureContent({
  imageSrc,
  title,
  description,
}: FeatureContentProps) {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="relative w-full md:w-1/2 md:flex-1">
        <div className="relative h-[230px] w-full md:h-[346px]">
          <Image
            src={imageSrc}
            alt="Feature illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>

      <div className="mt-[70px] flex w-full flex-col items-center text-center md:mt-0 md:w-1/2 md:items-start md:pl-[70px] md:text-left">
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl font-medium leading-tight text-very-dark-blue md:text-3xl md:leading-[52px]">
            {title}
          </h3>
          <p className="text-[15px] leading-[25px] text-grayish-blue md:text-lg md:leading-[28px]">
            {description}
          </p>
        </div>
        <Button className="h-10 w-[111px] bg-soft-blue text-white shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] transition-all duration-300 hover:border-2 hover:border-soft-blue hover:bg-white hover:text-soft-blue active:bg-very-dark-blue active:text-white md:block">
          More Info
        </Button>
      </div>
    </div>
  );
}

export function FeatureBackground() {
  return (
    <div className="absolute bottom-[50%] left-[-120%] -z-10 h-[200px] w-[200%] rounded-r-full bg-soft-blue md:bottom-[-20%] md:left-[-50%] md:h-4/5 md:w-[85%]"></div>
  );
}

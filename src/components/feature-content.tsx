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
      <div className="relative flex-1 md:w-1/2">
        <div className="relative h-[346px] w-full">
          <Image
            src={imageSrc}
            alt="Feature illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain", objectPosition: "center left" }}
          />
        </div>
        <div className="bg-soft-blue absolute -bottom-10 right-[180px] -z-10 h-4/5 w-[150%] rounded-r-full"></div>
      </div>

      <div className="flex w-1/2 flex-col pl-[70px] text-left">
        <div className="mb-8 space-y-4">
          <h3 className="text-very-dark-blue text-3xl font-medium leading-[52px]">
            {title}
          </h3>
          <p className="text-grayish-blue text-lg leading-[28px]">
            {description}
          </p>
        </div>
        <Button className="bg-soft-blue hover:text-soft-blue border-soft-blue h-10 w-[111px] border-2 py-5 shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] hover:bg-white">
          More Info
        </Button>
      </div>
    </div>
  );
}

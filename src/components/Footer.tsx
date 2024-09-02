import Image from "next/image";
import Link from "next/link";
import IconFacebook from "@/components/icon/icon-facebook";
import IconTwitter from "@/components/icon/icon-twitter";

export default function Footer() {
  return (
    <footer className="flex min-h-min flex-col items-center bg-very-dark-blue py-10 text-white md:py-6">
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
          <a href="#" aria-label="Facebook" className="group">
            <IconFacebook className="fill-white transition-colors duration-300 group-hover:fill-soft-red" />
          </a>
          <a href="#" aria-label="Twitter" className="group">
            <IconTwitter className="fill-white transition-colors duration-300 group-hover:fill-soft-red" />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import IconClose from "@/components/icon/icon-close";
import IconFacebook from "@/components/icon/icon-facebook";
import IconTwitter from "@/components/icon/icon-twitter";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between py-10 md:py-12">
      {/* Header content */}
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
        <Button className="h-10 w-[111px] rounded-[5px] border-2 border-soft-red bg-soft-red text-white hover:bg-white hover:text-soft-red">
          LOGIN
        </Button>
      </div>

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
                className="group bg-transparent p-0 transition-transform duration-300 hover:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconClose className="text-white transition-colors duration-300 group-hover:text-soft-red" />
              </Button>
            </div>
            <nav className="mt-10 flex flex-col items-center space-y-6 border-b border-b-white/20 text-center text-xl text-white">
              <Link
                href="#features"
                className="w-full border-t border-white/20 py-4 hover:text-soft-red"
              >
                FEATURES
              </Link>
              <Link
                href="#pricing"
                className="w-full border-t border-white/20 py-4 hover:text-soft-red"
              >
                PRICING
              </Link>
              <Link
                href="#contact"
                className="w-full border-t border-white/20 py-4 hover:text-soft-red"
              >
                CONTACT
              </Link>
            </nav>
            <Button className="mt-6 h-12 w-full rounded-[5px] border-2 border-white bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-fem-very-dark-blue">
              LOGIN
            </Button>
          </div>
          <div className="flex justify-center space-x-10">
            <a href="#" aria-label="Facebook" className="group">
              <IconFacebook className="fill-white transition-colors duration-300 group-hover:fill-soft-red" />
            </a>
            <a href="#" aria-label="Twitter" className="group">
              <IconTwitter className="fill-white transition-colors duration-300 group-hover:fill-soft-red" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

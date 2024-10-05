import * as React from "react";
import { AppContainer } from "@/components/global/app-container";
import { TypographyH3 } from "@/components/ui/typographies";
import { Spacer } from "@/components/global/spacer";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  LinkedinIcon,
  MapPinnedIcon,
  PhoneCallIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground font-medium">
      <Spacer small />
      <AppContainer
        className={cn(
          "grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10 max-w-7xl"
        )}
      >
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/logos/ss-transparent.png"}
              priority
              unoptimized
              height={100}
              width={100}
              className="size-20 aspect-square flex-none"
              alt="skillsync logo"
            />
          </Link>
          <ul className=" text-base">
          <li>
            <PhoneCallIcon className="h-4 w-4 mr-2 inline-block" /> +(237)6 12 34 56 78
          </li>
          <li>
            <MapPinnedIcon className="h-4 w-4 mr-2 inline-block" />
            Maison Damas (Entre kameni)
          </li>
        </ul>
        </div>
        <ul className="text-lg space-y-3">
          <li>
            <Link href={"/projets"} className="block">
              Project
            </Link>
          </li>
          <li>
            <Link href={"/how-it-works"} className="block">
              How it works
            </Link>
          </li>
          <li>
            <Link href={"/who-we-help"} className="block">
              Who we help
            </Link>
          </li>
          <li>
            <Link href={"/get-involved"} className=" block">
              Get involved
            </Link>
          </li>
        </ul>
        <ul className="text-lg space-y-3">
          <li>
            <Link href={"/about"} className=" block">
              About us
            </Link>
          </li>
          <li>
            <Link href={"/faqs"} className=" block">
              FAQs
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className=" block">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="text-lg space-y-3">
          <li>
            <Link href={"/privacy"} className=" block">
              Privacy
            </Link>
          </li>
          <li>
            <Link href={"/terms"} className=" block">
              Terms
            </Link>
          </li>
          <li>
            <Link href={"/sitemap"} className=" block">
              Sitemap
            </Link>
          </li>
        </ul>
        <div className="space-y-5">
          <Button
            variant={"secondary"}
            className="capitalize -tracking-tighter font-normal"
          >
            help center
          </Button>
          <TypographyH3>Nous suivre</TypographyH3>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <Link href={"#"}>
              <TwitterIcon className="h-8 w-8" />
            </Link>
            <Link href={"#"}>
              <FacebookIcon className="h-8 w-8" />
            </Link>
            <Link href={"#"}>
              <LinkedinIcon className="h-8 w-8" />
            </Link>
            <Link href={"#"}>
              <YoutubeIcon className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </AppContainer>
      <Spacer tooSmall />
      <Separator className="my-6 md:my-0" />
      <Spacer tooSmall />
      <small className="text-center w-full block">
        &copy; {currentYear} Skillsync. - Tous les droits réservés.
      </small>
      <Spacer small />
    </footer>
  );
};

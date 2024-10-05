import clsx from "clsx";
import * as React from "react";
import { AppContainer } from "./app-container";
import Link from "next/link";
import Image from "next/image";
import { TogglePhoneMenu } from "@/components/global/toggle-phonemenu";
import { Button } from "../ui/button";

export type HeaderProps = {
  transparentBg?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ transparentBg = false }) => {
  const navLinks = [
    { label: "Jobs", href: "/jobs" },
    { label: "Freelancers", href: "/freelancers" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header
      className={clsx(
        "py-3 lg:py-5 shadow-sm",
        "transition-all duration-300",
        transparentBg ? "bg-primary text-primary-foreground" : "bg-transparent"
      )}
    >
      <AppContainer className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/logos/ss-transparent.png"}
            priority
            unoptimized
            height={100}
            width={100}
            className="size-10 aspect-square flex-none"
            alt="Skillsync logo"
          />
        </Link>
        <nav className="hidden gap-3 md:flex md:items-center">
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((navLink) => (
              <Link
                key={navLink.label}
                href={`${navLink.href}`}
                className={clsx("",`${transparentBg ? "px-5 py-3 font-medium" : "nav-link"}`, )}
              >
                {navLink.label}
              </Link>
            ))}
          <Button variant={"secondary"} asChild>
            <Link href={"/sign-in"} className="nav-link">
              Log In
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/sign-up"}>Sign Up</Link>
          </Button>
        </nav>
        <TogglePhoneMenu />
      </AppContainer>
    </header>
  );
};

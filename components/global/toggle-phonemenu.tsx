"use client";

import * as React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const TogglePhoneMenu: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <Button
        onClick={toggleShow}
        size={"icon"}
        variant={"secondary"}
        className={clsx(
          "md:hidden",
          "hover:bg-muted hover:text-muted-foreground"
        )}
      >
        <MenuIcon className="size-6" />
      </Button>
      {show && (
        <div className="fixed top-0 left-0 right-0 shadow-lg z-10 bg-card text-secondary-foreground md:hidden">
          <div className="flex justify-between items-center gap-3 px-5 py-3">
            <Link href={"/"}>
              <Image
                src={"/logos/ss-transparent.png"}
                priority
                unoptimized
                height={100}
                width={100}
                className="size-10 aspect-square flex-none"
                alt="Mappeos logo"
              />
            </Link>
            <Button
              onClick={toggleShow}
              size={"icon"}
              className={clsx(
                "lg:hidden bg-transparent text-muted-foreground",
                "hover:bg-transparent hover:text-primary"
              )}
            >
              <XIcon className="size-6" />
            </Button>
          </div>
          <nav className=" flex flex-col gap-3  p-6">
            <Link href={"/jobs"} className="nav-link">
              Jobs
            </Link>
            <Link href={"/freelancers"} className="nav-link">
              Freelancers
            </Link>
            <Link href={"/contact"} className="nav-link">
              Contact
            </Link>
            <Button variant={"secondary"} asChild>
              <Link href={"/sign-in"} className="nav-link">
                Log In
              </Link>
            </Button>
            <Button asChild>
              <Link href={"/sign-up"}>Sign Up</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

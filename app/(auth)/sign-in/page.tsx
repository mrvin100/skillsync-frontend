"use client"
import { SignInForm } from "@/components/forms/users/client/signin-form";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typographies";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
export default function SignIn() {
    const router = useRouter();
  return (
    <div className="w-full grid items-center lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center px-6">
        <div className="mx-auto grid w-full max-w-sm gap-6">
          <div className="grid gap-2 text-center">
            <TypographyH3 className="text-3xl font-bold">Login</TypographyH3>
            <TypographyP className="text-balance text-muted-foreground">
              Enter your email below to login to your account, or{" "}
              <Button variant={"link"} onClick={() => router.back()} className="p-0">
                Back.
              </Button>
            </TypographyP>
          </div>

          <SignInForm />
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-full">
        <Image
          src="/images/sign-up.svg"
          alt="Image"
          width="1000"
          height="1000"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
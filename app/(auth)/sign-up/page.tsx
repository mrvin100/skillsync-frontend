"use client";

import { SignUpForm } from "@/components/forms/users/client/signup-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
export default function SignUp() {
  const router = useRouter();
  return (
    <div className="w-full grid items-center lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-full max-w-sm gap-6 px-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-balance text-muted-foreground">
              Fill fields below to create your account, or{" "}
              <Button
                variant={"link"}
                onClick={() => router.back()}
                className="p-0"
              >
                Back.
              </Button>
            </p>
          </div>
          <SignUpForm />
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Sign in
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

"use client";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { TypographyH3 } from "../ui/typographies";
import { Spacer } from "../global/spacer";

const FormSchema = z.object({
  home_search: z.string().min(2, {
    message: "search form must be at least 2 characters.",
  }),
});
type HomeSearchFormProps = {
  className?: string;
};
export const HomeSearchForm: React.FC<HomeSearchFormProps> = ({
  className,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      home_search: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("search form datas : ", data);
  }
  return (
    <div className={clsx("", className)}>
      <Spacer small />
      <TypographyH3>Find the perfect freelance service for your</TypographyH3>
      <Spacer tooSmall />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
          <FormField
            control={form.control}
            name="home_search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Search for service" {...field} className="focus:outline-0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>
      <Spacer small />
    </div>
  );
};

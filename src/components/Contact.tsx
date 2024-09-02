"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IconError from "@/components/icon/icon-error";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("Whoops, make sure it's an email"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section
      id="contact"
      className="flex min-h-[400px] w-full flex-col items-center justify-center bg-soft-blue px-8 py-16 md:h-[360px] md:px-0"
    >
      <div className="mx-auto text-center">
        <p className="mb-4 text-[13px] font-medium uppercase leading-[40px] tracking-[4px] text-white md:mb-6">
          35,000+ ALREADY JOINED
        </p>
        <h2 className="mx-auto mb-6 max-w-md text-2xl font-bold leading-tight text-white md:mb-8 md:text-[32px] md:leading-10">
          Stay up-to-date with what we're doing
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(
              "flex flex-col items-center justify-center md:flex-row md:space-x-4 md:space-y-0",
              form.formState.errors.email ? "space-y-8" : "space-y-4",
            )}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative w-full md:w-[300px]">
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter your email address"
                        className={`relative z-10 h-12 w-full bg-[#ffffff] pr-10 focus-visible:ring-0 ${
                          form.formState.errors.email
                            ? "border-2 border-soft-red"
                            : ""
                        }`}
                        {...field}
                      />
                      {form.formState.errors.email && (
                        <div className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform">
                          <IconError className="h-6 w-6 text-soft-red" />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="absolute -bottom-6 w-full rounded-b-[5px] bg-fem-soft-red px-2 pb-[6px] pt-4 text-start text-[10px] italic text-white" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="h-12 w-full border-2 border-soft-red bg-soft-red text-white hover:bg-white hover:text-soft-red md:w-[126px]"
            >
              Contact Us
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

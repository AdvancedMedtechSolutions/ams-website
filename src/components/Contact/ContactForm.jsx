/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";


const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().min(10, {
    message: "Contact number must be at least 10 digits.",
  }),

  companyName: z.string().min(1, {
    message: "company name must be at least 2 characters.",
  }),

  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile:"",
      companyName:"",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("Form Submitted:", data);
    const formData = {
      name: data.name,
      email: data.email,
     number: data.number,
     message: data.message,
     companyName:data.companyName
    };
    
    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-[7%] mobile:pt-[15%] tablet:pt-[10%]" id="formoem">
      
      <div className="w-full h-full p-[4vw] pb-[25%] mobile:p-0 rounded-[3vw] border border-gray-200 bg-white/50 backdrop-blur-sm mobile:bg-transparent mobile:hover:bg-transparent mobile:hover:shadow-none mobile:border-none tablet:p-[5.5vw] fadeUp">

        <div className="w-full flex flex-col gap-[2vw] mobile:w-full mobile:bg-white/50 mobile:rounded-[6vw] mobile:px-[7vw] mobile:py-[12vw] mobile:border mobile:gap-[5vw] mobile:justify-center tablet:w-full">
          <h3 data-para-anim className="aeonik text-[2.8vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw] font-light">Send a Message</h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2.5vw] mobile:space-y-[7vw] tablet:space-y-[3vw] mobile:w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mobile*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Company Name*" {...field} className={"pb-[1vw] mobile:pb-[2vw]"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-[2vw] w-full flex justify-end">
                              <Button type="submit" className=" bg-purple-500 rounded-full w-[8vw] h-[3vw] relative mobile:w-[25vw] mobile:h-[10vw] tablet:w-[17vw] tablet:h-[7vw]">
                              {!isLoading ? (
                                    <span
                                      className="text-[1.1vw] aeonik mobile:text-[4vw] tablet:text-[2.5vw]"
                                    >
                                     Submit
                                    </span>
                                  ) : (
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[100]">
                                      <Image
                                        src="/button-loading.png"
                                        alt="button-loading"
                                        className="animate-spin invert "
                                        width={20}
                                        height={20}
                                      />
                                      </div>
                                  )}
                              </Button>
                            </div>
            </form>
          </Form>
        </div>
      </div>

    </section>
  );
}

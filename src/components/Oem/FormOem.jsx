/* eslint-disable no-unused-vars */
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
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function FormOem() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    console.log("Form Submitted:", data);


    try {
      const res = await fetch("/api/formoem", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      form.reset();
      setIsLoading(false);
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);

      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-[12%] mobile:pb-[10%] relative" id="formoem">
      <div className="w-full h-full py-[8vw] border-gray-200 bg-white/50">
        {alertVisible && (
          <div className="fixed top-[80%] left-[85%] w-[25vw] mobile:top-[5%] mobile:left-[50%] translate-x-[-50%] tablet:left-[50%] tablet:top-[5%] mobile:w-[80vw] rounded-[1vw] h-[5vw] bg-green-500 text-white mobile:h-[10vw] mobile:rounded-[3vw] flex justify-center items-center text-lg z-50 fade-in">
            Form Submitted Successfully!
          </div>
        )}
        <div className="w-[75%] mx-auto font-light pr-[2vw] tablet:w-full mobile:w-[95%] mobile:pr-0">
          <div className="w-full flex gap-[12vw] mobile:flex-col mobile:w-full mobile:items-center tablet:w-full tablet:px-[5vw] tablet:gap-[5vw] tablet:justify-between">
            <div className="w-[40%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-[5vw] ">
              <h3 data-para-anim className="text-[2.8vw] aeonik mobile:text-[10vw] mobile:text-center tablet:text-[5vw] ">Get in Touch</h3>
              <p data-para-anim className="text-[1.3vw] mobile:text-[4.5vw] mobile:text-center tablet:text-[2.2vw] ">
                Want to Learn More About Our OEM Services? Get in touch with us:
              </p>
              <div className="flex flex-col mt-[2vw]">

                <div className="flex mobile:w-full mobile:justify-center fadeUp">
                  <p className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] pr-2">Email:</p>
                  <Link href="mailto:oemsolutions@amsltd.com" className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] hover:underline">
                    <span className="block">oemsolutions@amsltd.com</span>
                  </Link>
                </div>

              </div>
            </div>

            <div className="w-[40%] px-[3vw] rounded-[2.5vw] shadow-sm py-[2vw] mobile:w-[90%] bg-white mobile:rounded-[9vw] mobile:py-[15vw] mobile:border mobile:items-center tablet:w-[50%] fadeUp">
              <h3 className="aeonik text-[2.5vw] mobile:text-[9vw] mobile:text-center tablet:text-[4.5vw] mb-[2vw]">Send a Message</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-[1.5vw] mobile:space-y-[5vw] tablet:space-y-[3vw] mobile:px-[7vw]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
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
                          <Input placeholder="Email" {...field} />
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
                          <Input placeholder="Message" {...field} className={"pb-[4vw]"} />
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
        </div>
      </div>
    </section>
  );
}

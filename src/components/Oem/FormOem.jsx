/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import styles from "../Button/style.module.css"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
  

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-[12%] mobile:pb-[10%]" id="formoem">
      <div className="w-full h-full py-[8vw] border-gray-200 bg-white/50">
        <div className="w-[75%] mx-auto font-light pr-[2vw] tablet:w-full mobile:w-[95%] mobile:pr-0">
          <div className="w-full flex gap-[12vw] mobile:flex-col mobile:w-full mobile:items-center tablet:w-full tablet:px-[5vw] tablet:gap-[5vw] tablet:justify-between">
            <div className="w-[40%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-[5vw] ">
              <h3 data-para-anim className="text-[2.8vw] aeonik mobile:text-[10vw] mobile:text-center tablet:text-[5vw] ">Get in Touch</h3>
              <p data-para-anim className="text-[1.3vw] mobile:text-[4.5vw] mobile:text-center tablet:text-[2.2vw] ">
                Want to Learn More About Our OEM Services? Get in touch with us:
              </p>
              <div className="flex flex-col mt-[2vw]">

                <div className="flex mobile:w-full mobile:justify-center ">
                  <p data-para-anim className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] ">Email:</p>
                  <Link href="mailto:OEMservices@AMS.com" className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] fadeUp">
                    <span className="block">OEMservices@AMS.com</span>
                  </Link>
                </div>
                <div className="flex mobile:w-full mobile:justify-center">
                  <p className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw]">Phone:</p>
                  <Link href="tel:+91 25145 66145" className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] fadeUp">
                    <span className="block">+91 25145 66145</span>
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
                  <Button type="submit" className="w-full fadeUp text-right pt-[1vw] pb-[1.5vw]">
                    <div className={`${styles.btn} !border-gray-200`}>
                      <div aria-hidden="true" className={styles.btnCircle}>
                        <div className={styles.btnCircleText}>
                          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.btnIcon}>
                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`} />
                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`} />
                          </svg>
                        </div>
                      </div>
                      <span className={styles.btnText}>
                        Submit
                      </span>
                    </div>
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";


const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),

});

export default function CareerForm({ onClose }) {
  const [fileName, setFileName] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [content, setContent] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  const [isLoading, setIsLoading] = useState(false);
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("background-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      filename: null,
    },
  });
  
  const fileRef = form.register("file");
  
  const onSubmit = async (data) => {
    setIsLoading(true);
    
    if (!fileName) {
      setFileError("File is required.");
      return;
    }
    const base64Content = content.split(",")[1];
    const formData = {
      name: data.name,
      email: data.email,
      filename: fileName,
      content: base64Content,
    };
    
    try {
      const res = await fetch("/api/careerform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      form.reset();
      setFileName(null);
      setFileError(null);

      // Show alert for 2 seconds
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        onClose(); // Call onClose after submission
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddFileAction = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      const fileContent = r.target.result.toString();
      setContent(fileContent);
      setFileName(files[0].name);
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <section
      className="fixed top-0 left-0 w-screen h-screen z-[998] flex justify-center items-center background-overlay"
      id="formcareer"
    >
      <div className="w-[50vw] h-[45vw] p-[4vw] pb-[25%] mobile:p-0 rounded-[3vw] border-gray-200 bg-white mobile:border-none tablet:p-[5.5vw] fadeUp relative overflow-hidden mobile:h-[70vh] mobile:w-[90vw] tablet:h-[50vh] tablet:w-[80vw] fade-in">
        {alertVisible && (
          <div className="fixed top-[5%] left-[50%] translate-x-[-50%] w-[80vw] rounded-[1vw] h-[5vw] bg-green-500 text-white flex justify-center items-center text-lg z-50">
            Form Submitted Successfully!
          </div>
        )}
        <div className="w-full flex flex-col gap-[2vw] mobile:w-full mobile:px-[7vw] mobile:py-[12vw] mobile:gap-[5vw] mobile:justify-center tablet:w-full z-[5] relative">
          <h3
            data-para-anim
            className="aeonik text-[2.8vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw] font-light"
          >
            Submit Your Resume
          </h3>
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
              <div className="w-full flex flex-col gap-[0.5vw] mobile:gap-[4vw]">
                <FormField
                  name="docs"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <p className="text-[1.2vw] ml-[0.65vw] aeonik font-light mobile:text-[4vw] mobile:ml-[2.4vw] tablet:text-[2.2vw] tablet:ml-[1.7vw]">
                          Upload Document
                        </p>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="w-full h-[4vw] border-b border-black/40 rounded-lg py-[1vw] mobile:h-[5vw] mobile:mt-[0vw] tablet:h-[5vw] mobile:pb-[5vw] tablet:mt-[4vw]">
                  <FormLabel
                    htmlFor="filename"
                    className="w-full h-full  flex items-center justify-start rounded-lg cursor-pointer ml-[0.65vw] mobile:ml-[2.4vw] tablet:ml-[1.7vw]"
                  >
                    <div>
                      <div className=" w-[2vw] h-[2vw] relative flex flex-col items-center justify-center mobile:w-[5vw] mobile:h-[5vw] tablet:w-[3vw] tablet:h-[3vw]">
                        {!fileName ? (
                          <Image
                            src={"/assets/career/resume-upload-icon.svg"}
                            alt="upload-icon"
                            fill
                            className="object-contain"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="text-lg text-black/50 font-medium mobile:text-xl tablet:text-2xl">
                        {fileName || ""}
                      </p>
                    </div>
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="filename"
                    render={({ field }) => (
                      <FormItem className="h-full flex justify-center career flex-col">
                        <FormControl>
                          <Input
                            id="filename"
                            name="filename"
                            {...fileRef}
                            type="file"
                            accept=".pdf,.docx"
                            className="hidden"
                            onChange={onAddFileAction}
                          />
                        </FormControl>
                        {fileError && (
                          <p className="text-red-600 text-[1.1vw] tablet:text-[2vw] mobile:text-[3vw] mt-[1vw] mobile:mt-[4vw]">
                            {fileError}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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
        <div className="absolute bottom-[-20%] left-0 h-full w-full mobile:bottom-0 mobile:h-[70vw] mobile:w-[140vw] mobile:left-[-25%]">
          <Image
            src={"/assets/career/career-form-bg.png"}
            alt="career-form-bg-image"
            fill
            className="object-contain bottom-0"
          />
        </div>
      </div>
    </section>
  );
}

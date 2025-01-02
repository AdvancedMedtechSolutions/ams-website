import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CountrySelector from "../ui/country-selector";
import { COUNTRIES } from "@/lib/countries";

// Define validation schema using Zod
const formSchema = z.object({
  Country: z.string().nonempty({ message: "Country is required." }),
  Salutation: z.string().nonempty({ message: "Salutation is required." }),
  FirstName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  LastName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  HospitalName: z
    .string()
    .min(2, { message: "Hospital name must be at least 2 characters." }),
  Speciality: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  TypeOfInterest: z
    .string()
    .nonempty({ message: "Type of Interest is required." }),
});

export default function ContactOemform({ onClose, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("IN");
  const [isLoading, setIsLoading] = useState(false);
  const formref = useRef(null);
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
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Country: "IN",
      Salutation: "",
      FirstName: "",
      LastName: "",
      email: "",
      HospitalName: "",
      ProductInterest: "",
      Speciality: "",
      message: "",
      TypeOfInterest: "",
    },
  });

  // Form submission handler
  const onSubmitForm = async (data) => {
    setIsLoading(true);
    try {
      console.log("Form Submitted:", data);
      const res = await fetch("/api/contactOther", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed to send message");
      }

      form.reset();
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        onClose(); // Call onClose after submission
      }, 2000);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 overflow-hidden bg-black/60 z-[999] fade-in background-overlay">
      <div
        className="w-[50vw] h-[95%] bg-white relative py-[4vw] px-[2vw] rounded-[2.5vw] overflow-hidden mobile:w-[90vw] mobile:h-[75%] mobile:rounded-[5vw] tablet:w-[90vw] tablet:h-[70%] mobile:px-[4vw] mobile:py-[10vw]"
        ref={formref}
      >
        <div
          data-lenis-prevent
          className="w-full h-[70%] overflow-scroll overflow-x-hidden px-[3vw] pb-[7vw] z-[10] relative"
        >
          {alertVisible && (
            <div className="fixed top-[80%] left-[85%] w-[25vw] mobile:top-[5%] mobile:left-[50%] translate-x-[-50%] tablet:left-[50%] tablet:top-[5%] mobile:w-[80vw] rounded-[1vw] h-[5vw] bg-green-500 text-white mobile:h-[10vw] mobile:rounded-[3vw] flex justify-center items-center text-lg z-50 fade-in">
              Form Submitted Successfully!
            </div>
          )}
          <h2 className="text-[3vw] font-light mb-[2vw] mobile:text-[7vw] mobile:mb-[8vw] tablet:text-[5vw]">
            {title || "Other Enquiries"}
          </h2>
          <Form {...form}>
            <form
              className="space-y-8"
              onSubmit={form.handleSubmit(onSubmitForm)}
            >
              {/* Country Field */}
              <FormField
                control={form.control}
                name="Country"
                render={({ field }) => (
                  <FormItem>
                      <CountrySelector
                      id={"country-selector"}
                      open={isOpen}
                      onToggle={() => setIsOpen(!isOpen)}
                      onChange={(value) => {
                        const selectedCountry = COUNTRIES.find(
                          (option) => option.value === value
                        );
                        const countryTitle = selectedCountry?.title || ""; // Extract the title
                        setCountry(value); // Maintain the selected value state if needed
                        field.onChange(countryTitle); // Send the title instead of value
                      }}
                      selectedValue={COUNTRIES.find(
                        (option) => option.value === country
                      )}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Salutation and FullName */}
              <div className="flex gap-[1vw] mobile:gap-[3vw]">
                <FormField
                  control={form.control}
                  name="Salutation"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger
                          aria-label="Select Title"
                          className="w-[8vw] mobile:text-[4vw] h-[3vw] tablet:w-[15vw] tablet:h-[5vw] mobile:w-[20vw] mobile:h-[10vw]"
                        >
                          <SelectValue placeholder="Title*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Mr.">Mr.</SelectItem>
                            <SelectItem value="Ms.">Ms.</SelectItem>
                            <SelectItem value="Mrs.">Mrs.</SelectItem>
                            <SelectItem value="Sister">Sister</SelectItem>
                            <SelectItem value="Dr.">Dr.</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="FirstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="First Name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="LastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Last Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
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

              {/* Hospital Name */}
              <FormField
                control={form.control}
                name="HospitalName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Hospital Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Speciality"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Speciality" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Type of Interest */}
              <FormField
                control={form.control}
                name="TypeOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger
                        aria-label="Select Type of Interest"
                        className="w-full"
                      >
                        <SelectValue placeholder="Type of Interest*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Connect to business representative">
                            Connect to business representative
                          </SelectItem>
                          <SelectItem value="Customer service">
                            Customer service
                          </SelectItem>
                          <SelectItem value="Price Request">
                            Price Request
                          </SelectItem>
                          <SelectItem value="Product Brochure/Information">
                            Product Brochure/Information
                          </SelectItem>
                          <SelectItem value="Product Demo">
                            Product Demo
                          </SelectItem>
                          <SelectItem value="Product Trial">
                            Product Trial
                          </SelectItem>
                          <SelectItem value="Purchase Request">
                            Training
                          </SelectItem>
                          <SelectItem value="other">other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
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
              <p className="text-[1.1vw] mt-[2vw] font-light tablet:text-[2vw] mobile:text-[4vw]">
                The personal data collected on this form, will be used to
                validate your request & also manage our relationship with you.
                Where you have provided your consent we will use your email
                address and/or phone number, to provide you with information
                about our medical products, services, and scientific
                information, and information about local and/or international
                medical events. Your personal data maybe be transferred to
                countries outside of your country of residence, which may
                provide for different data protection rules than those in your
                country. For more information about AMS privacy practices and
                how it collects, processes, discloses, and retains your personal
                data, please read our Privacy Policy.
              </p>

              {/* Submit Button */}
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
        <div className="absolute bottom-0 left-0 w-[50vw] h-[20vw] z-[0] mobile:h-[50vw] tablet:w-full tablet:h-[35vw] mobile:w-full">
          <Image
            src={"/assets/contact/other-bg.png"}
            alt="plant-bg"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute right-[5%] top-[5%] z-[999]">
        <button onClick={onClose} className="flex items-center gap-3 group ">
          <span className="w-[2.7vw] h-[2.7vw] bg-white group-hover:bg-black duration-300 flex justify-center items-center p-2 border border-head rounded-full tablet:w-[5vw] tablet:h-[5vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
            <Image
              className="group-hover:invert duration-300 group-hover:rotate-180 transition-all"
              src="/assets/icons/close-icon.svg"
              alt="Close Menu"
              width={13}
              height={13}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

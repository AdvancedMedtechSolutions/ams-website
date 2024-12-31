/* eslint-disable import/no-anonymous-default-export */
import HealthCare from "@/components/Emailtemplate/TemplateHealthcare";
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const {Country, Salutation,FirstName, LastName, email,HospitalName, message , ProductInterest, Speciality,TypeOfInterest  } = req.body;

    const { data, error } = await resend.emails.send({
      from: "AMS <webforms@amsltd.com>",
      to: ["hcp@amsltd.com"],
      subject: "Healthcare Form Submission - New Enquiry",
      react: HealthCare({
        Country:Country,
        Salutation:Salutation,
        FirstName: FirstName,
        LastName: LastName,
        Email:email,
        HospitalName:HospitalName,
        Message:message ,
        ProductInterest:ProductInterest,
        Speciality:Speciality ,
        TypeOfInterest:TypeOfInterest
       
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("API route error:", error);
    res.status(400).json({ error: error.message });
  }
};

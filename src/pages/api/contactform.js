/* eslint-disable import/no-anonymous-default-export */
import { Resend } from "resend";

import ContactUsDetails from "@/components/Emailtemplate/TemplateContact";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, message , companyName , number} = req.body;

    const { data, error } = await resend.emails.send({
      from: "AMS <webforms@amsltd.com>",
      to: ["info@amsltd.com"],
      subject: "Contact Form Submission - New Enquiry",
      react: ContactUsDetails({
        userName: name,
        userEmail: email,
        userNumber:number,
        userCompany:companyName,
        userMessage:message,
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

import { IMessage } from "@/components/ContactForm";
import { mailOptions, transporter } from "@/config/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: IMessage = req.body;
    if (!data.email || !data.name) {
      return res.status(400).json({ message: "No name or email" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `${data.name} te quiere contactar. Contesta a: ${data.email}`,
        text: data.comment,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "No se puede mandar el email" });
};

export default handler;

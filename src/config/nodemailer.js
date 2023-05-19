import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: "mail.actitudplan.com",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

export const mailOptions = {
  from: user,
  to: user,
};

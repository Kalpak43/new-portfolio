import { NextRequest, NextResponse } from "next/server";

type contactData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: contactData = await req.json();

    let nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mail = await transporter.sendMail({
      from: body.email,
      to: process.env.EMAIL,
      replyTo: process.env.EMAIL,
      subject: `Portfolio: New message from ${body.name}`,
      text: body.message,
    });

    return NextResponse.json({ message: "Success" });
  } catch {
    return NextResponse.json({ message: "Error" });
  }
}

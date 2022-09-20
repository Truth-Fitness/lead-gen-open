import { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const data = JSON.parse(body);
  console.log(data.gReCaptchaToken);
  const reCaptureRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET}&response=${data.gReCaptchaToken}`,
    }
  );
  const reCaptchaJson = await reCaptureRes.json();
  console.log(reCaptchaJson);
  if (!reCaptchaJson.success && reCaptchaJson?.score < 0.5) {
    res.status(400).json({ message: "reCAPTCHA failed" });
    return;
  }

  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_API_SECRET,
  });
  console.log("got here");
  const request = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "robot@bot.truthfitness.co.uk",
          Name: "New Contact",
        },
        To: [
          {
            Email: "cameron@truthfitness.co.uk",
            Name: "Cameron",
          },
        ],
        Subject: `New form submission - ${data.name}`,
        TextPart: `Hi Cameron, ${data.name} has requested a call with you. Name: ${data.name}, Phone: ${data.phone}`,
        HTMLPart: `<p>Hi Cameron, <br/>${data.name} has requested a call with you.</p><p>Name: ${data.name}</p><p>Phone: <a href="tel:${data.phone}">${data.phone}</a></p>`,
      },
    ],
  });
  console.log("this worked", request.body);

  res.status(200).json({ success: true });
}

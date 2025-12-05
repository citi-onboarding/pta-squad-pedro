import { Request, Response } from "express";
import nodemailer from "nodemailer";

class EmailController {
  send = async (request: Request, response: Response) => {
    const { to, subject, text } = request.body;

    if (!to || !subject || !text) {
      return response.status(400).send({ error: "Missing fields" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
      });

      return response.status(200).send({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      return response.status(500).send({ error: "Erro ao enviar o email" });
    }
  };
}

export default new EmailController();
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
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        text,
      });

      return response.status(200).send({ message: "Email enviado com sucesso!" });
    } catch (error: any) {
      console.error("ERRO SMTP:", error);
      return response.status(500).send({ error: "Erro ao enviar o email", details: error.message });
    }
  };
}

export default new EmailController();
import nodemailer from "nodemailer";

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD,
    }
})

// Function to send mail
const sendMail = async ({ to, subject, text }) => {
    const options = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
    }
    await transporter.sendMail(options)
}

export { sendMail }
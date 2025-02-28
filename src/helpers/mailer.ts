
import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";



export const sendEmail = async ({ email, emailType, userID }: any) => {
  try {
    // created a hashed token
    const hashedToken = await bcryptjs.hash(userID.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userID, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userID, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
        from: 'avishekmukherje007@gmail.com',
        to: email,
        subject: emailType === "VERIFY" ? "Verify your email" : "Reset Your password",
        html: `<p>Click here to <a href="${process.env.NEXT_PUBLIC_DOMAIN}">Verify your email</a> 
        or copy and paste the link below in your browser.</p>
        <p>${process.env.NEXT_PUBLIC_DOMAIN}</p>`
      
        
    }
    console.log(process.env.NEXT_PUBLIC_DOMAIN);
    

    const mailResponse = await transport.sendMail(mailOptions)

  } catch (error: any) {
    throw new Error(error.message);
  }
};

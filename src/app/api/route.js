import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';


export const POST=async(res)=>{
    const respost= await res.json()
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.forwardemail.net',
        port: 465,
        secure: true,
        auth: {
          user: 'prathameshm@chittlesoft.com',
          pass: '****',
        },
      });
      const emailHtml = (<p>none</p>);
      const options = {
        from: 'you@example.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        html: emailHtml,
      };
      await transporter.sendMail(options);

   

    return NextResponse.json({
        "data":{m:1}
    })
}
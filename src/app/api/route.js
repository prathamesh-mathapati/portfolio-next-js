import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';


export const POST=async(res)=>{
    const respost= await res.json()
    try {
      const transporter = nodemailer.createTransport({
        service:"gmail",
        port: 465,
        secure: false,
        auth: {
          user: 'prathamesh20@navgurukul.org',
          pass: 'qhcnrnmvcjxbzelm',
        },
      });
      const emailHtml =`<b>Hello ${respost.to_name} ,</b><p>This is a test email sent by <b>${respost.from_name}</b>. This is Email id <b>${respost.from_email}</b> and Phone no <b>${respost.number}</b>. </p> <p>This is Message ${respost.message}</p>`;
   
      const info = await transporter.sendMail({
        from:'prathamesh20@navgurukul.org' , // sender address
        to: 'prathamesh20@navgurukul.org', // list of receivers
        subject: "From Portfolio", // Subject line
        text: 'cxsdcds', // plain text body
        html: emailHtml // html body
      });

      return NextResponse.json({
        "data":{"mesg":"done"}
    })
      
    } catch (error) {
      console.log(error);

      return NextResponse.json({
        "data":{"error":error}
    })
    }
    

   

   
 
}
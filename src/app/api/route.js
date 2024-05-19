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
      const emailHtml = `${<div>
        <p>{respost.from_name}</p>
         </div>}`;
   
      const info = await transporter.sendMail({
        from:'prathamesh20@navgurukul.org' , // sender address
        to: 'prathamesh20@navgurukul.org', // list of receivers
        subject: "From Portfolio", // Subject line
        text: 'cxsdcds', // plain text body
        html: `${<p>{respost.message}</p>}` // html body
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
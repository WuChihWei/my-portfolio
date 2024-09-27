import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('API route called');
  
  try {
    const { name, email, message } = await request.json();
    console.log('Received data:', { name, email, message });

    console.log('Creating transporter');

    // 創建一個 transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    console.log('Transporter created, attempting to send email');

    // 發送郵件
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 或者您想要接收郵件的任何地址
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    console.log('Email sent successfully:', info.response);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json({ 
      message: 'Error sending email', 
      error: error.toString(),
      stack: error.stack 
    }, { status: 500 });
  }
}
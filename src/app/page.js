"use client"
import ManeSection from "@/componest/ManeSection";
import NavaBar from "@/componest/NavaBar";

export default function Home() {
  console.log(window.location.href);
  return (

    <main className="main-page">
        <NavaBar/>
        <ManeSection/>
    </main>
  
  );
}

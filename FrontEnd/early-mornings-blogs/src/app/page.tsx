"use client";
import { useState } from "react";
import Image from "next/image";
import Posts from "./posts/posts";
import Navbar from "./shared-components/navbar";

import { Nothing_You_Could_Do } from "next/font/google";
const myfont = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
});



export default function Home() {

  const [panel,setPanel] = useState("home")
  return (
    <main>
      <Navbar setPanel={setPanel} />
      <h1 className={myfont.className+" text-4xl flex flex-col items-center mt-5"}>Early Mornings</h1>
      <div className="flex min-h-screen flex-col items-center p-24">
        
        {panel == "posts" &&<Posts />}
      </div>
    </main>
  );
}

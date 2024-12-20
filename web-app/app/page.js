'use client'
import { Input, Upload } from "antd";
import { FileMarkdownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import {GoogleGenerativeAI} from "@google/generative-ai"
export default function Home() {
  const [pathVault, setPathVault] = useState(undefined);
  const handlePathVaultChange = (e) => {
    setPathVault(e.target.value);
  }
  const handleButtonClick = async () => {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Transform this paragraph text into md extension '1. This is title 1 \n Hello can you help me translate this into md \n This is code js console.log(1)'";

      const result = await model.generateContent(prompt);
      console.log(result.response.text()); 
  }
  return (
  <div className="w-full h-[100vh] flex flex-col justify-center items-center">
    <Image 
      src="/background.jpg"
      fill={true}
    />
    <form className="flex flex-col rounded space-y-6 sm:w-1/2">
      <Upload maxCount={1} className="w-full">
        <Button icon={<UploadOutlined/>}>Click to upload image (Max: 10)</Button>
      </Upload>
      <Button type="primary" onClick={handleButtonClick}>Save to your obsidian vault</Button>
    </form>
  </div>
  );
}

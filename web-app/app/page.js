'use client'
import { Input, Upload } from "antd";
import { FileMarkdownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
export default function Home() {
  const [pathVault, setPathVault] = useState(undefined);
  const handlePathVaultChange = (e) => {
    setPathVault(e.target.value);
  }
  const handleButtonClick = () => {
    
  }
  return (
  <div className="w-full h-[100vh] flex flex-col justify-center items-center" 
     style={{ backgroundImage: "url('http://localhost:3000/background.jpg')", backgroundSize: "cover" }}>
    <form className="flex flex-col rounded space-y-6 sm:w-1/2">
      <Upload maxCount={1}>
        <Button icon={<UploadOutlined/>}>Click to upload image (Max: 1)</Button>
      </Upload>
      <Input 
        size="large" 
        placeholder="Enter your path" 
        prefix={<FileMarkdownOutlined />} 
        onChange={handlePathVaultChange}
      />
      <Button type="primary" onClick={handleButtonClick}>Save to your obsidian vault</Button>
    </form>
  </div>
  );
}

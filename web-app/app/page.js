import { Input, Upload } from "antd";
import { FileMarkdownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import fs from 'fs';
import path from 'path';
export default function Home() {
  const handleButtonClick = (obsidianVaultPath) => {
    const content = fs.readFileSync(sourcePath, 'utf8');

    const fileName = path.basename(sourcePath);

    const destPath = path.join(obsidianVaultPath, fileName);

    fs.writeFileSync(destPath, content);

  }
  return (
<div className="w-full h-[100vh] flex flex-col justify-center items-center">
    <form className="flex flex-col p-20 bg-gray-300 rounded space-y-3">
      <Upload maxCount={1}>
        <Button icon={<UploadOutlined/>}>Click to upload image (Max: 1)</Button>
      </Upload>
      <Input size="large" placeholder="" prefix={<FileMarkdownOutlined />} className=""/>
      <Button type="primary" >Save to your obsidian vault</Button>
    </form>
</div>
  );
}

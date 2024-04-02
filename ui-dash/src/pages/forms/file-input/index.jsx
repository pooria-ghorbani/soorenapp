import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Fileinput from "@/components/ui/Fileinput";
import DropZone from "./DropZone";

const FileinputPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFiles2, setSelectedFiles2] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleFileChange2 = (e) => {
    setSelectedFile2(e.target.files[0]);
  };
  const handleFileChangeMultiple = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files).map((file) => file);
    setSelectedFiles(filesArray);
  };
  const handleFileChangeMultiple2 = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files).map((file) => file);
    setSelectedFiles2(filesArray);
  };

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="ورودی فایل شاده">
        <Fileinput
          name="basic"
          selectedFile={selectedFile}
          onChange={handleFileChange}
        />
      </Card>
      <Card title="چند تا فایل">
        <Fileinput
          name="basic"
          multiple
          selectedFiles={selectedFiles}
          onChange={handleFileChangeMultiple}
        />
      </Card>
      <Card title="ورودی فایل شاده همراه با مرور">
        <Fileinput
          name="basic"
          selectedFile={selectedFile2}
          onChange={handleFileChange2}
          preview
        />
      </Card>
      <Card title="چند تا فایل همراه با مرور">
        <Fileinput
          name="basic"
          selectedFiles={selectedFiles2}
          onChange={handleFileChangeMultiple2}
          multiple
          preview
        />
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="آپلود فایل">
          <DropZone />
        </Card>
      </div>
      <Card title="کنترل کردن سایز">
        <div className="space-y-3">
          <Fileinput placeholder="بزرگ" className="h-[48px]" name="large" />
          <Fileinput placeholder="پیشفرض" name="default" />
          <Fileinput placeholder="کوچک" className="h-[32px]" name="small" />
        </div>
      </Card>
      <Card title="فرمت کردن نام فایل">
        <Fileinput
          name="basic"
          badge
          selectedFile={selectedFile}
          onChange={handleFileChange}
        />
      </Card>
    </div>
  );
};

export default FileinputPage;

import React from "react";
import Image2 from "@/assets/images/all-img/widget-bg-2.png";
const ImageBlock2 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(${Image2})`,
        transform: "scaleX(-1)",
      }}
    >
      <div style={{ transform: "scaleX(-1)" }}>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal">عصر بخیر،</span>
          <span className="block">آقای فرهاد مجیدی</span>
        </h4>
        <p className="text-sm text-white font-normal">به دشکد خوش آمدید</p>
      </div>
    </div>
  );
};

export default ImageBlock2;

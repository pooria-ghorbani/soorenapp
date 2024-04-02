import React from "react";

import image1 from "@/assets/images/all-img/widget-bg-1.png";
const ImageBlock1 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
      style={{
        height: "100%",
        backgroundImage: `url(${image1})`,
        transform: "scaleX(-1)",
      }}
    >
      <div style={{ transform: "scaleX(-1)" }}>
        <div className="max-w-[169px]">
          <div className="text-xl font-medium text-slate-900 mb-2">
            داشبورد خود را ارتقا دهید
          </div>
          <p className="text-sm text-slate-800">پلن پرو برای نتیجه بهتر</p>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white text-slate-900 rounded-full text-xs font-medium flex flex-col items-center justify-center">
          الان
        </div>
      </div>
    </div>
  );
};

export default ImageBlock1;

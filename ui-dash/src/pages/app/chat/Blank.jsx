import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useWidth from "@/hooks/useWidth";
import { toggleMobileChatSidebar } from "./store";

// import images
import blankSvgImage from "@/assets/images/svg/blank.svg";

const Blank = () => {
  const { width, breakpoints } = useWidth();
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col items-center justify-center xl:space-y-2 space-y-6">
      <img src={blankSvgImage} alt="" />
      <h4 className="text-2xl text-slate-600 dark:text-slate-300 font-medium">
        هیچ پیامی نیست ...
      </h4>

      <p className="text-sm text-slate-500 lg:pt-0 pt-4">
        {width > breakpoints.lg ? (
          <span>نگران نباش فقط تنفس عمیق بکش و سلام بکن</span>
        ) : (
          <span
            className="btn btn-dark cursor-pointer"
            onClick={() => dispatch(toggleMobileChatSidebar(true))}
          >
            شروع گفتگو
          </span>
        )}
      </p>
    </div>
  );
};

export default Blank;

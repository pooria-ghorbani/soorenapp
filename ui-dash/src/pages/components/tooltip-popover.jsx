import React from "react";
import Tooltip from "@/components/ui/Tooltip";
import Card from "@/components/ui/Card";

const TooltipPage = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="موقعیت های تولتیپ">
        <p className="dark:text-slate-300 text-slate-600 text-base mb-4">
          این آپشن برای جهت های زیر فراهم است:
          <code className="font-iransans p-1 rounded bg-[#E0EAFF] dark:bg-slate-700 text-slate-900 dark:text-slate-300 text-sm">
            top, top-start, top-end, bottom, bottom-start, bottom-end, left,
            left-start, left-end, right, right-start, right-end
          </code>
        </p>
        <div className="space-xy-5 flex flex-wrap">
          <Tooltip
            title="تولتیپ در بالا"
            content="تولتیپ در بالا!"
            placement="top"
            className="btn btn-outline-dark "
            theme="primary"
            arrow
          />
          <Tooltip
            title="تولتیپ در راست"
            content="تولتیپ در راست!"
            placement="right"
            className="btn btn-outline-dark"
            arrow
          />
          <Tooltip
            title="تولتیپ در چپ"
            content="تولتیپ در چپ!"
            placement="left"
            className="btn btn-outline-dark"
            arrow
          />
          <Tooltip
            title="تولتیپ در پایین"
            content="تولتیپ در پایین!"
            placement="bottom"
            className="btn btn-outline-dark"
            arrow
          />
        </div>
      </Card>
      <Card title="نما های تولتیپ">
        <div className="space-xy-5 flex flex-wrap">
          <Tooltip
            title="اصلی"
            content="نمای اصلی"
            placement="top"
            className="btn btn-outline-primary "
            arrow
            theme="primary"
          />
          <Tooltip
            title="ثانویه"
            content="نمای ثانویه"
            placement="top"
            className="btn btn-outline-secondary "
            arrow
            theme="secondary"
          />
          <Tooltip
            title="موفق"
            content="نمای موفق"
            placement="top"
            className="btn btn-outline-success"
            arrow
            theme="success"
          />
          <Tooltip
            title="درباره"
            content="نمای درباره"
            placement="top"
            className="btn btn-outline-info "
            arrow
            theme="info"
          />
          <Tooltip
            title="هشدار"
            content="نمای هشدار"
            placement="top"
            className="btn btn-outline-warning "
            arrow
            theme="warning"
          />
          <Tooltip
            title="خطر"
            content="نمای خطر"
            placement="top"
            className="btn btn-outline-danger "
            arrow
            theme="danger"
          />
          <Tooltip
            title="تیره"
            content="نمای تیره"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            theme="dark"
          />
          <Tooltip
            title="روشن"
            content="نمای روشن"
            placement="top"
            className="btn btn-outline-light "
            arrow
            theme="light"
          />
        </div>
      </Card>
      <Card title="انیمیشن">
        <p className="dark:text-slate-300 text-slate-600 text-base mb-4">
          انیمیشن های در دسترس:
          <code className="font-iransans p-1 rounded bg-[#E0EAFF] dark:bg-slate-700 text-slate-900 dark:text-slate-300 text-sm">
            scale, scale-subtl, scale-extreme, perspective-extrem,
            perspective-subtle, perspective, shift-away-extreme
            shift-away-subtle, shift-away.css,
            shift-toward-extreme,shift-toward-subtle, shift-toward.
          </code>
        </p>
        <div className="space-xy-5 flex flex-wrap">
          <Tooltip
            title="Shift-away"
            content="Shift-away"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            animation="shift-away"
          />
          <Tooltip
            title="Shift-toward"
            content="Shift-toward"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            animation="shift-toward"
          />
          <Tooltip
            title="Scale"
            content="Scale"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            animation="scale"
          />
          <Tooltip
            title="Fade"
            content="Fade"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            animation="fade"
          />
          <Tooltip
            title="Perspective"
            content="Perspective"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            animation="Perspective"
          />
        </div>
      </Card>
      <Card title="ایونت">
        <div className="space-xy-5 flex flex-wrap">
          <Tooltip
            title="وارد شدن موس"
            content="وارد شدن موس"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            trigger="mouseenter"
          />
          <Tooltip
            title="کلیک"
            content="کلیک"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            trigger="click"
          />
        </div>
      </Card>

      <div className="xl:col-span-2">
        <Card title="موقعیت پاپ اور">
          <div className="space-xy-5 flex flex-wrap">
            <Tooltip
              title="پاپ اور بالا"
              placement="top"
              className="btn btn-outline-dark"
              arrow
              allowHTML
              interactive
              theme="custom-light"
              maxWidth="320px"
              content={
                <div className="dark:text-slate-300 text-slate-600 text-sm">
                  <h1 className="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
                    پاپ اور بالا
                  </h1>
                  متن تستی
                </div>
              }
            ></Tooltip>
            <Tooltip
              title="پاپ اور پایین"
              placement="bottom"
              className="btn btn-outline-dark"
              arrow
              allowHTML
              interactive
              theme="custom-light"
              maxWidth="320px"
              content={
                <div className="dark:text-slate-300 text-slate-600 text-sm">
                  <h1 className="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
                    پاپ اور پایین
                  </h1>
                  متن تستی
                </div>
              }
            />
            <Tooltip
              title="پاپ اور چپ"
              placement="left"
              className="btn btn-outline-dark"
              arrow
              allowHTML
              interactive
              theme="custom-light"
              maxWidth="320px"
              content={
                <div className="dark:text-slate-300 text-slate-600 text-sm">
                  <h1 className="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
                    پاپ اور چپ
                  </h1>
                  متن تستی
                </div>
              }
            />
            <Tooltip
              title="پاپ اور راست"
              placement="right"
              className="btn btn-outline-dark"
              arrow
              allowHTML
              interactive
              theme="custom-light"
              maxWidth="320px"
              content={
                <div className="dark:text-slate-300 text-slate-600 text-sm">
                  <h1 className="text-base bg-slate-900 dark:bg-slate-600 dark:bg-opacity-70 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
                    پاپ اور راست
                  </h1>
                  متن تستی
                </div>
              }
            />
          </div>
        </Card>
      </div>
      <Card title="تاثیر بر یکدیگر">
        <div className="space-xy-5 flex flex-wrap">
          <Tooltip
            title="تاثیر بر یکدیگر"
            content="تولتیپ تاثیر"
            placement="top"
            className="btn btn-outline-dark "
            arrow
            interactive
          />
        </div>
      </Card>
    </div>
  );
};

export default TooltipPage;

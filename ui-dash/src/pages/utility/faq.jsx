import React, { Fragment } from "react";
import Accordion from "@/components/ui/Accordion";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab } from "@headlessui/react";

const faqmenus = [
  {
    title: "شروع",
  },
  {
    title: "قوانین و مقررات",
  },
  {
    title: "قانون",
  },
];
const items = [
  {
    title: "دشکد چگونه کار می‌کند؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "کجا میتونم راجب دش کد اطلاعات بیشتری پیدا کنم؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "چرا دشکد مهمه؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "دش کد رو کجا میتونم پیدا کنم",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "چرا دشکد مهمه؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
];
const items2 = [
  {
    title: "دشکد چگونه کار می‌کند؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "کجا میتونم راجب دش کد اطلاعات بیشتری پیدا کنم؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
];
const items3 = [
  {
    title: "دشکد چگونه کار می‌کند؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "کجا میتونم راجب دش کد اطلاعات بیشتری پیدا کنم؟",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
  {
    title: "دش کد رو کجا میتونم پیدا کنم",
    content:
      "روزنامه‌نگاران این بخش بحرانی و معرفی‌کننده را «پل» می‌نامند و هنگامی که به درستی اجرا شود، آن است که خواننده را از عنوانی که تلاش برای جلب توجه است، به بدنه‌ی پست وبلاگتان هدایت می‌کند.",
  },
];

const FaqPage = () => {
  return (
    <div>
      <Tab.Group>
        <div className="grid gap-5 grid-cols-12">
          <div className="xl:col-span-3 lg:col-span-4 col-span-12 card-auto-height">
            <Card>
              <Tab.List className="flex flex-col space-y-1 text-start items-start">
                {faqmenus.map((item, i) => (
                  <Tab key={i} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`focus:ring-0 focus:outline-none space-x-2 text-sm flex items-center w-full transition duration-150 px-3 py-4 rounded-[6px] rtl:space-x-reverse
                            ${
                              selected
                                ? "bg-slate-100 dark:bg-slate-900 dark:text-white"
                                : "bg-white dark:bg-slate-800 dark:text-slate-300"
                            }
                         `}
                        type="button"
                      >
                        <span
                          className={`
                              "text-lg",
                              ${
                                selected
                                  ? " opacity-100"
                                  : "opacity-50 dark:opacity-100"
                              }
                        `}
                        ></span>
                        <Icon
                          icon="heroicons:chevron-double-right-solid"
                          className="rotate-180"
                        />
                        <span> {item.title}</span>
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </Card>
          </div>
          <div className="xl:col-span-9 lg:col-span-8 col-span-12">
            <Tab.Panels>
              <Tab.Panel>
                <Accordion items={items} />
              </Tab.Panel>
              <Tab.Panel>
                <Accordion items={items2} />
              </Tab.Panel>
              <Tab.Panel>
                <Accordion items={items3} />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};

export default FaqPage;

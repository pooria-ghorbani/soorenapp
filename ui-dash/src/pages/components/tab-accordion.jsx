import React, { Fragment } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import Accordion from "@/components/ui/Accordion";
const buttons = [
  {
    title: "خانه",
    icon: "heroicons-outline:home",
  },
  {
    title: "پروفایل",
    icon: "heroicons-outline:user",
  },
  {
    title: "پیام ها",
    icon: "heroicons-outline:chat-alt-2",
  },
  {
    title: "تنظیمات",
    icon: "heroicons-outline:cog",
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
];
const TabAccrodain = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
      <Card title="تب پیشفرض">
        <Tab.Group>
          <Tab.List className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
            {buttons.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` text-sm font-medium mb-7 capitalize bg-white
             dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2
              transition duration-150 before:transition-all before:duration-150 relative 
              before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 
              before:-translate-x-1/2 
              
              ${
                selected
                  ? "text-primary-500 before:w-full"
                  : "text-slate-500 before:w-0 dark:text-slate-300"
              }
              `}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 2
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 3
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>

      <Card title="تب همراه با آیکن">
        <Tab.Group>
          <Tab.List className="lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse">
            {buttons.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` inline-flex items-start text-sm font-medium mb-7 capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute
                     before:left-1/2 before:bottom-[-6px] before:h-[1.5px]
                      before:bg-primary-500 before:-translate-x-1/2
              
              ${
                selected
                  ? "text-primary-500 before:w-full"
                  : "text-slate-500 before:w-0 dark:text-slate-300"
              }
              `}
                  >
                    <span className="text-base relative top-[1px] ltr:mr-1 rtl:ml-1">
                      <Icon icon={item.icon} />
                    </span>
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 2
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 3
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
      <Card title="تب عمودی">
        <Tab.Group>
          <div className="grid grid-cols-12 md:gap-2">
            <div className="lg:col-span-3 md:col-span-5 col-span-12">
              <Tab.List>
                {buttons.map((item, i) => (
                  <Tab key={i} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={` text-sm font-medium md:block inline-block mb-4 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150
                ${
                  selected
                    ? "text-white bg-primary-500 "
                    : "text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300"
                }
              `}
                      >
                        {item.title}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <div className="lg:col-span-9 md:col-span-7 col-span-12">
              <Tab.Panels>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    متن تستی 1
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    متن تستی 2
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    متن تستی 3
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    متن تستی 1
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </Card>
      <Card title="تب مرتب شده افقی (justify)">
        <Tab.Group>
          <Tab.List className="lg:space-x-6 md:space-x-3 space-x-0 rtl:space-x-reverse">
            {buttons.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={` text-sm font-medium mb-7 last:mb-0 capitalize ring-0 foucs:ring-0 focus:outline-none px-6 rounded-md py-2 transition duration-150
              
              ${
                selected
                  ? "text-white bg-primary-500 "
                  : "text-slate-500 bg-white dark:bg-slate-700 dark:text-slate-300"
              }
              `}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 2
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 3
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                متن تستی 1
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="اکوردیون">
          <Accordion items={items} />
        </Card>
      </div>
    </div>
  );
};

export default TabAccrodain;

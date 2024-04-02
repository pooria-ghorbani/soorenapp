import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
const lists = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
const typography = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <Card title="عناوین پیش‌فرض HTML">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            تمام عناوین HTML در دسترس هستند. همچنین کلاس‌های .h1 تا .h7 نیز در
            دسترس است، برای زمانی که می‌خواهید قالب‌بندی قلم عنوان را تطبیق
            دهید.
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300 flex justify-between py-3 px-6 items-center -mx-6 mt-6 mb-6 font-semibold">
            <span>پیشنمایش</span>
            <span>اندازه فونت</span>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h1>عنوان 1</h1>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              60px
            </span>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h2>عنوان 2</h2>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              48px
            </span>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h3>عنوان 3</h3>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              36px
            </span>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h4>عنوان 4</h4>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              30px
            </span>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h5>عنوان 5</h5>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              24px
            </span>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h6>عنوان 6</h6>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              20px
            </span>
          </div>
        </Card>
        <Card title="عنوان نازک /بلد">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            تمام عناوین HTML با قلم باریک و ضخیم در دسترس هستند. برای عناوین
            باریک از کلاس .font-weight-normal استفاده کنید و برای عناوین ضخیم...
            (ادامه جمله کامل را ارائه کنید تا بتوانم بهتر به شما کمک کنم)
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300 flex justify-between py-3 px-6 items-center -mx-6 mt-6 mb-6 font-semibold">
            <span>عنوان نازک</span>
            <span>عنوان بلد</span>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h1 className="font-light">عنوان</h1>
            <h1>عنوان</h1>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h2 className="font-light">عنوان 2</h2>
            <h2>عنوان 2</h2>
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h3 className="font-light">عنوان 3</h3>
            <h3>عنوان 3</h3>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h4 className="font-light">عنوان 4</h4>
            <h4>عنوان 4</h4>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h5 className="font-light">عنوان 5</h5>
            <h5>عنوان 5</h5>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h6 className="font-light">عنوان 6</h6>
            <h6>عنوان 6</h6>
          </div>
        </Card>
        <div className="lg:col-span-2 col-span-1">
          <Card title="متن ها">
            <div className="-mx-6">
              <table className="w-full border-collapse border-none text-left">
                <thead>
                  <tr>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="px-6 py-5 block text-slate-600 dark:text-slate-300">
                        نوع
                      </span>
                    </th>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="px-6 py-5 block text-slate-600 dark:text-slate-300">
                        کلاس
                      </span>
                    </th>
                    <th className="text-xs font-semibold bg-slate-100 dark:bg-slate-700">
                      <span className="px-6 py-5 block text-slate-600 dark:text-slate-300">
                        متن
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="text-slate-900 dark:text-slate-300 text-left px-6 py-4 text-lg font-medium">
                      عنوان
                    </td>
                    <td className="text-slate-900 dark:text-slate-300 text-lg font-medium text-left t px-6 py-4">
                      text-lg
                    </td>
                    <td className="text-slate-900 dark:text-slate-300 text-lg font-medium text-left px-6 py-4">
                      <div>متن تستی</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        font-size: 18px / line-height: 28px / font-weight: 500
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="text-slate-700 dark:text-slate-300 text-left px-6 py-4 text-base font-normal">
                      زیر عنوان
                    </td>
                    <td className="text-slate-700 dark:text-slate-300 text-base font-normaltext-left t px-6 py-4">
                      text-base
                    </td>
                    <td className="text-slate-700 dark:text-slate-300 text-base font-normal text-left px-6 py-4">
                      <div>متن تستی</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        font-size: 16px / line-height: 24px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="text-slate-600 dark:text-slate-300 text-left px-6 py-4 text-sm font-normal">
                      متن بادی
                    </td>
                    <td className="text-slate-600 dark:text-slate-300 text-base font-sm font-normal text-left t px-6 py-4">
                      text-sm
                    </td>
                    <td className="text-slate-600 dark:text-slate-300 text-sm font-normal text-left px-6 py-4">
                      <div>متن تستی</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        font-size: 14px / line-height: 20px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-slate-600 dark:text-slate-300 text-left px-6 py-4 text-xs font-normal">
                      متن کوچک
                    </td>
                    <td className="text-slate-600 dark:text-slate-300 text-base font-xs font-normal text-left t px-6 py-4">
                      text-xs
                    </td>
                    <td className="text-slate-600 dark:text-slate-300 text-xs font-normal text-left px-6 py-4">
                      <div>متن تستی</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        font-size: 12px / line-height: 18px / font-weight: 400
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <Card title="سفارشی‌سازی عناوین به صورت پیش‌ فرض">
          <div className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            از کلاس‌های کمکی موجود استفاده کنید تا متن عنوان فرعی کوچک با وزن
            500 را بازسازی کنید.
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h1>عنوان نمایش</h1>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h2>عنوان نمایشی</h2>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h3>عنوان نمایشی</h3>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h4>عنوان نمایشی</h4>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h5>عنوان نمایشی</h5>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h6>عنوان نمایشی</h6>
          </div>
        </Card>
        <Card title="عناوین رنگی">
          <div className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            متن تستی
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h1 className="text-primary-500">عنوان نمایشی</h1>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h2 className="text-secondary-500">عنوان نمایشی</h2>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h3 className="text-success-500">عنوان نمایشی</h3>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h4 className="text-danger-500">عنوان نمایشی</h4>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h5 className="text-warning-500">عنوان نمایشی</h5>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h6 className="text-info-500">عنوان نمایشی</h6>
          </div>
        </Card>

        <Card title="عنوان نمایشی">
          <div className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            عناصر عنوان سنتی برای بهترین عملکرد در محتوای صفحه طراحی شده‌اند.
            هنگامی که نیاز به یک عنوان برجسته دارید، در نظر بگیرید از عنوان
            نمایشی استفاده کنید - یک عنوان بزرگتر و کمی بیشتر تمایل دارد به
            روشنگری نظر.
          </div>

          <div className="md:flex justify-between items-center mb-6">
            <h1 className="display-1">نمایش 1</h1>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h2 className="display-2">نمایش 2</h2>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h3 className="display-3">نمایش 3</h3>
          </div>
          <div className="md:flex justify-between items-center mb-6">
            <h4 className="display-4">نمایش 4</h4>
          </div>
        </Card>

        <div className="space-y-5">
          <Card title="متن های یک خطی">
            <div className="space-y-4">
              <p className="text-sm font-light text-slate-600 dark:text-slate-300">
                استایل‌های مرسوم برای عناصر HTML5 درون خطی.
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <del>این خط متن به عنوان متن حذف شده تلقی می‌شود.</del>
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <router-link to="#" className="underline">
                  این خط متن به عنوان یک اضافه‌کردنی به سند تلقی می‌شود.
                </router-link>
              </p>
              <p className="text-sm font-light text-slate-900 dark:text-slate-300">
                <del>این خط متن به عنوان متن حذف شده تلقی می‌شود.</del>
              </p>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2 col-span-1">
          <Card title="متن های رنگی">
            <div className="space-y-4">
              <p className="text-sm font-light text-slate-600 dark:text-slate-300">
                استایل‌بندی برای عناصر رایج درون خط HTML5.
              </p>
              <p className="text-sm font-light text-primary-500">
                استایل‌بندی برای عناصر رایج درون خط HTML5.
              </p>
              <p className="text-sm font-light text-success-500">
                استایل‌بندی برای عناصر رایج درون خط HTML5.
              </p>
              <p className="text-sm font-light text-warning-500">
                این متن به عنوان متن هشدار-500 تلقی می‌شود. شما می‌توانید با
                افزودن کلاس .text-warning-500 این تنظیم را اعمال کنید.
              </p>
              <p className="text-sm font-light text-danger-500">
                این متن به عنوان متن خطر-500 تلقی می‌شود. شما می‌توانید با
                افزودن کلاس .text-danger-500 این تنظیم را اعمال کنید.
              </p>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 col-span-1">
          <Card title="تایپوگرافی لیست ها">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست بدون ترتیب (Unordered List)
                </span>
                <ul className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-900 dark:text-slate-300"
                    >
                      متن تستی
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست عددی (List Decimal)
                </span>
                <ol className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700 lits-by-numbaring custom-list">
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> متن تستی</span>
                    <ol className="lits-by-numbaring">
                      <li>متن تستی</li>
                    </ol>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> متن تستی</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> متن تستی</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> متن تستی</span>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span> متن تستی</span>
                  </li>
                </ol>
              </div>

              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست خطی (Dash List)
                </span>
                <ul className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700 custom-list">
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium"> متن تستی</span>
                    <ul className="lits-by-slash">
                      <li>متن تستی</li>
                    </ul>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium"> متن تستی</span>
                    <ul className="lits-by-slash">
                      <li>متن تستی</li>
                    </ul>
                  </li>
                  <li className="text-sm text-slate-900 dark:text-slate-300">
                    <span className="font-medium"> متن تستی</span>
                    <ul className="lits-by-slash">
                      <li>متن تستی</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست با آیکون (Icon List) 1
                </span>
                <ul className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-900 dark:text-slate-300 flex space-x-2 items-center rtl:space-x-reverse"
                    >
                      <span>
                        <Icon icon="heroicons:chevron-double-right" />
                      </span>
                      <span>متن تستی</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست با آیکون (Icon List) 2
                </span>
                <ul className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-900 dark:text-slate-300 flex space-x-2 items-center rtl:space-x-reverse"
                    >
                      <span>
                        <Icon icon="heroicons:chevron-right" />
                      </span>
                      <span>متن تستی</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block text-slate-900 dark:text-slate-300 font-medium leading-8 text-base mb-6">
                  لیست با آیکون (Icon List) 3
                </span>
                <ul className="space-y-3 p-6 rounded-md bg-slate-50 dark:bg-slate-700">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-900 dark:text-slate-300 flex space-x-2 items-center rtl:space-x-reverse"
                    >
                      <span className="h-[6px] w-[6px] bg-slate-900 dark:bg-slate-400 rounded-full inline-block"></span>
                      <span>متن تستی</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title="نقل قول ها">
            <div className="space-y-5">
              <blockquote className="text-slate-900 dark:text-slate-300">
                متن تستی
                <span className="text-sm text-slate-400 block mt-3">
                  دشکد ادمین
                </span>
              </blockquote>
              <blockquote className="border-primary-500 text-right text-slate-900 dark:text-slate-300">
                متن تستی
                <span className="text-sm text-slate-400 block mt-3">
                  دشکد ادمین
                </span>
              </blockquote>
              <blockquote className="border-success-500 text-center text-slate-900 dark:text-slate-300">
                متن تستی
                <span className="text-sm text-slate-400 block mt-3">
                  دشکد ادمین
                </span>
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default typography;

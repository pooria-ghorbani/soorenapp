export const menuItems = [
  {
    isHeadr: true,
    title: "منو",
  },

  {
    title: "داشبورد",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "آنالیز داشبورد",
        childlink: "dashboard",
      },
      {
        childtitle: "ایکامرس داشبورد",
        childlink: "ecommerce",
      },
      {
        childtitle: "پروژه داشبورد",
        childlink: "project",
      },
      {
        childtitle: " CRM داشبورد",
        childlink: "crm",
      },
      {
        childtitle: "بانک ها داشبورد",
        childlink: "banking",
      },
    ],
  },
  {
    title: "تغیررات",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHide: false,
    badge: "1.0.0",
  },
  {
    isHeadr: true,
    title: "اپلیکیشن",
  },

  {
    title: "چت",
    isHide: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "ایمیل",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "سیستم کانبان (Kanban)",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "تقویم",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "وظایف",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "پروژه ها",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "پروژه ها",
        childlink: "projects",
      },
      {
        childtitle: "اطلاعات پروژه ها",
        childlink: "project-details",
      },
    ],
  },
  {
    isHeadr: true,
    title: "صفحه ها",
  },
  {
    title: "احراز هویت",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "ورود 1",
        childlink: "/",
      },
      {
        childtitle: "ورود 2",
        childlink: "/login2",
      },
      {
        childtitle: "ورود 3",
        childlink: "/login3",
      },
      {
        childtitle: "ثبت نام 1",
        childlink: "/reg",
      },
      {
        childtitle: "ثبت نام 2",
        childlink: "/reg2",
      },
      {
        childtitle: "ثبت نام 3",
        childlink: "/reg3",
      },
      {
        childtitle: "فراموشی رمز عبور 1",
        childlink: "/forgot-password",
      },
      {
        childtitle: "فراموشی رمز عبور 2",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "فراموشی رمز عبور 3",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "قفل صحفه 1",
        childlink: "/lock-screen",
      },
      {
        childtitle: "قفل صحفه 2",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "قفل صحفه 3",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "عمومی",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "صورتحساب",
        childlink: "invoice",
      },
      {
        childtitle: "قیمت گذاری",
        childlink: "pricing",
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: "سوالات متداول",
        childlink: "faq",
      },
      {
        childtitle: "بلاگ",
        childlink: "blog",
      },
      {
        childtitle: "صفحه خالی",
        childlink: "blank-page",
      },
      {
        childtitle: "پروفایل",
        childlink: "profile",
      },
      {
        childtitle: "تنطیمات",
        childlink: "settings",
      },
      {
        childtitle: "404 صفحه",
        childlink: "/404",
      },

      {
        childtitle: "به زودی",
        childlink: "/coming-soon",
      },
      {
        childtitle: "صفحه در حال تعمیر",
        childlink: "/under-construction",
      },
    ],
  },
  {
    isHeadr: true,
    title: "عناصر",
  },
  {
    title: "ویجت",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "ساده",
        childlink: "basic",
      },
      {
        childtitle: "آمار",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "کامپوننت ها",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "تایپوگرافی",
        childlink: "typography",
      },
      {
        childtitle: "رنگ ها",
        childlink: "colors",
      },
      {
        childtitle: "پیغام",
        childlink: "alert",
      },
      {
        childtitle: "دکمه ها",
        childlink: "button",
      },
      {
        childtitle: "کارت",
        childlink: "card",
      },
      {
        childtitle: "کروشل (carousel)",
        childlink: "carousel",
      },
      {
        childtitle: "دراپ دون",
        childlink: "dropdown",
      },
      {
        childtitle: "عکس",
        childlink: "image",
      },
      {
        childtitle: "مدال",
        childlink: "modal",
      },
      {
        childtitle: "نوار پیشرفت",
        childlink: "progress-bar",
      },
      {
        childtitle: "پلیس هولدر",
        childlink: "placeholder",
      },
      {
        childtitle: "تب یا برگه",
        childlink: "tab-accordion",
      },
      {
        childtitle: "بج ها (badges)",
        childlink: "badges",
      },
      {
        childtitle: "صفحه بندی",
        childlink: "paginations",
      },
      {
        childtitle: "ویدیو",
        childlink: "video",
      },
      {
        childtitle: "تولتیپ و پاپ آور",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "فرم ها",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "ورودی",
        childlink: "input",
      },
      {
        childtitle: "گروه های ورودی",
        childlink: "input-group",
      },
      {
        childtitle: "ورودی صفحه",
        childlink: "input-layout",
      },
      {
        childtitle: "اعتبار سنجی فرم",
        childlink: "form-validation",
      },
      {
        childtitle: "ویزارد",
        childlink: "form-wizard",
      },
      {
        childtitle: "ماسک ورودی",
        childlink: "input-mask",
      },
      {
        childtitle: "ورودی فایل",
        childlink: "file-input",
      },
      {
        childtitle: "تکرار فرم",
        childlink: "form-repeater",
      },
      {
        childtitle: "تکست اریا",
        childlink: "textarea",
      },
      {
        childtitle: "چک باکس",
        childlink: "checkbox",
      },
      {
        childtitle: "دکمه های رادیویی",
        childlink: "radio-button",
      },
      {
        childtitle: "سوییچ",
        childlink: "switch",
      },
      {
        childtitle: "انتخاب و انتخاب Vue",
        childlink: "select",
      },
      {
        childtitle: "انتخابگر تاریخ و زمان",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "جدول",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "جدول ساده",
        childlink: "table-basic",
      },
      {
        childtitle: "جدول ری اکت",
        childlink: "react-table",
      },
    ],
  },
  {
    title: "نمودار",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex نمودار",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "نقشه",
    icon: "heroicons-outline:map",
    link: "map",
  },
  {
    title: "آیکون ها",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
  {
    title: "چند مرحله ای",
    icon: "heroicons:share",
    link: "#",
    child: [
      {
        childtitle: "مرحله 1.1",
        childlink: "icons",
      },
      {
        childtitle: "مرحله 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "مرحله 2.1",
            multiLink: "Level-2",
          },
          {
            multiTitle: "مرحله 2.2",
            multiLink: "Level-2.3",
          },
        ],
      },
    ],
  },
];

export const topMenu = [
  {
    title: "داشبورد",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "داشبورد آنالیتیک",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "داشبورد فروشگاهی",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "داشبورد پروژه",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "داشبورد CRM",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "داشبورد بانکداری",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "اپلیکیشن",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "تقویم",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "کانبان",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "لیست کارها",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "پروژه‌ها",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "صفحات",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "احراز هویت",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "ورود یک",
            m_childlink: "/",
          },
          {
            m_childtitle: "ورود دو",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "ورود سه",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "ثبت نام یک",
            m_childlink: "/register",
          },
          {
            m_childtitle: "ثبت نام دو",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "ثبت نام سه",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "فراموشی رمز عبور یک",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "فراموشی رمز عبور دو",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "فراموشی رمز عبور سه",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "قفل صفحه یک",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "قفل صفحه دو",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "قفل صفحه سه",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "اجزا",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "تایپوگرافی",
            m_childlink: "typography",
          },
          {
            m_childtitle: "رنگ‌ها",
            m_childlink: "colors",
          },
          {
            m_childtitle: "هشدار",
            m_childlink: "alert",
          },
          {
            m_childtitle: "دکمه",
            m_childlink: "button",
          },
          {
            m_childtitle: "کارت",
            m_childlink: "card",
          },
          {
            m_childtitle: "اسلایدر",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "منو کشویی",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "تصویر",
            m_childlink: "image",
          },
          {
            m_childtitle: "مدال",
            m_childlink: "modal",
          },
          {
            m_childtitle: "نوار پیشرفت",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "جایگزین",
            m_childlink: "placeholder",
          },
          {
            m_childtitle: "تب و آکاردئون",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "فرم‌ها",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "ورودی",
            m_childlink: "input",
          },
          {
            m_childtitle: "گروه ورودی",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "طرح بندی ورودی",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "اعتبارسنجی فرم",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "ویزارد",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "ماسک ورودی",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "ورودی فایل",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "تکرارکننده فرم",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "تکست‌آریا",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "چک‌باکس",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "دکمه رادیویی",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "سوئیچ",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "ابزارکاری",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "فاکتور",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "قیمت‌گذاری",
            m_childlink: "pricing",
          },
          {
            m_childtitle: "سوالات متداول",
            m_childlink: "faq",
          },
          {
            m_childtitle: "صفحه خالی",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "وبلاگ",
            m_childlink: "blog",
          },
          {
            m_childtitle: "صفحه 404",
            m_childlink: "/404",
          },
          {
            m_childtitle: "به زودی",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "صفحه در دست تعمیر",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "ابزارک‌ها",
    icon: "heroicons-outline:view-grid-add",
    link: "فرم‌های المان",
    child: [
      {
        childtitle: "پایه",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "آماری",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "اضافی",
    icon: "heroicons-outline:template",
    child: [
      {
        childtitle: "جدول پایه",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "جدول پیشرفته",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "نمودار Apex",
        childlink: "apex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "نمودار Chart.js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "نقشه",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

import User1 from "@/assets/images/all-img/user.png";
import User2 from "@/assets/images/all-img/user2.png";
import User3 from "@/assets/images/all-img/user3.png";
import User4 from "@/assets/images/all-img/user4.png";
export const notifications = [
  {
    title: "سفارش شما ثبت شد",
    desc: "سفارش شما با موفقیت ثبت شد",
    image: User1,
    link: "#",
  },
  {
    title: "تبریک به دارلین 🎉",
    desc: "برندهٔ نشان بهترین فروشندهٔ ماه شد",
    unread: true,
    image: User2,
    link: "#",
  },
  {
    title: "سفارش بازبینی شده 👋",
    desc: "برندهٔ نشان بهترین فروشندهٔ ماه شد",
    image: User3,
    link: "#",
  },
  {
    title: "بروکلین سیمونز",
    desc: "شما را به گروه پروژهٔ بالاترین رازآلود اضافه کرد...",
    image: User4,
    link: "#",
  },
];

export const message = [
  {
    title: "رضا رحمانی",
    desc: "سلام! حالتون چطوره؟.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: User1,
    link: "#",
  },
  {
    title: "سارا محمدی",
    desc: "سلام! حالتون چطوره؟.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "علی صادقی",
    desc: "سلام! حالتون چطوره؟.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "محمد احمدی",
    desc: "سلام! حالتون چطوره؟.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
  {
    title: "سانا طاهری",
    desc: "سلام! حالتون چطوره؟.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "محمدرضا روحانی",
    desc: "سلام! حالتون چطوره؟.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "زهرا محمدی",
    desc: "سلام! حالتون چطوره؟.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "صندوق ورودی",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "ستاره‌دار",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "ارسال شده",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },
  {
    name: "پیش نویس‌ها",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "هرزنامه",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "سطل زباله",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "شخصی",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "اجتماعی",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "تبلیغات",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "کسب و کار",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

import meetsImage1 from "@/assets/images/svg/sk.svg";
import meetsImage2 from "@/assets/images/svg/path.svg";
import meetsImage3 from "@/assets/images/svg/dc.svg";
import meetsImage4 from "@/assets/images/svg/sk.svg";

export const meets = [
  {
    img: meetsImage1,
    title: "جلسه با مشتری",
    date: "01 فروردین 1402",
    meet: "Zoom meeting",
  },
  {
    img: meetsImage2,
    title: "جلسه طراحی (تیم)",
    date: "01 فروردین 1402",
    meet: "Skype meeting",
  },
  {
    img: meetsImage3,
    title: "پژوهش پس زمینه",
    date: "01 فروردین 1402",
    meet: "Google meeting",
  },
  {
    img: meetsImage4,
    title: "جلسه با مشتری",
    date: "01 فروردین 1402",
    meet: "Zoom meeting",
  },
];
import file1Img from "@/assets/images/icon/file-1.svg";
import file2Img from "@/assets/images/icon/pdf-1.svg";
import file3Img from "@/assets/images/icon/zip-1.svg";
import file4Img from "@/assets/images/icon/pdf-2.svg";
import file5Img from "@/assets/images/icon/scr-1.svg";

export const files = [
  {
    img: file1Img,
    title: "Dashboard.fig",
    date: "06 خرداد 1402 / 155MB",
  },
  {
    img: file2Img,
    title: "Ecommerce.pdf",
    date: "06 خرداد 1402 / 155MB",
  },
  {
    img: file3Img,
    title: "Job portal_app.zip",
    date: "06 خرداد 1402 / 155MB",
  },
  {
    img: file4Img,
    title: "Ecommerce.pdf",
    date: "06 خرداد 1402 / 155MB",
  },
  {
    img: file5Img,
    title: "Screenshot.jpg",
    date: "06 خرداد 1402 / 155MB",
  },
];

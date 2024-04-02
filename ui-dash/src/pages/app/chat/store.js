import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import image1 from "@/assets/images/users/user-1.jpg";
import image2 from "@/assets/images/users/user-2.jpg";
import image3 from "@/assets/images/users/user-3.jpg";
import image4 from "@/assets/images/users/user-4.jpg";
import image5 from "@/assets/images/users/user-5.jpg";
import image6 from "@/assets/images/users/user-6.jpg";

export const appChatSlice = createSlice({
  name: "appchat",
  initialState: {
    openProfile: false,
    openinfo: true,
    activechat: false,
    searchContact: "",
    mobileChatSidebar: false,
    profileinfo: {},
    messFeed: [],
    user: {},
    contacts: [
      {
        id: 1,
        fullName: "مریم رحمانی",
        role: "توسعه‌دهنده فرانت‌اند",
        lastmessage: "سلام! من در دسترس هستم.",
        lastmessageTime: "2:30 بعد از ظهر",
        unredmessage: Math.floor(Math.random() * 10),
        avatar: image2,
        status: "آفلاین",
      },
      {
        id: 2,
        fullName: "نیکی حسینی",
        role: "طراح رابط کاربری",
        lastmessage: "سلام! من در دسترس هستم.",
        lastmessageTime: "2:30 بعد از ظهر",
        unredmessage: Math.floor(Math.random() * 10),
        avatar: image3,
        status: "فعال",
      },
      {
        id: 3,
        fullName: "علی حسینی",
        role: "توسعه‌دهنده بک‌اند",
        lastmessage: "سلام! من در دسترس هستم.",
        lastmessageTime: "2:30 بعد از ظهر",
        unredmessage: Math.floor(Math.random() * 10),
        avatar: image4,
        status: "آفلاین",
      },
      {
        id: 4,
        fullName: "امیر حسینی",
        role: "توسعه‌دهنده فول استک",
        lastmessage: "سلام! من در دسترس هستم.",
        lastmessageTime: "2:30 بعد از ظهر",
        unredmessage: Math.floor(Math.random() * 10),
        avatar: image5,
        status: "فعال",
      },
      {
        id: 5,
        fullName: "علی رحمانی",
        role: "توسعه‌دهنده فرانت‌اند",
        lastmessage: "سلام! من در دسترس هستم.",
        lastmessageTime: "2:30 بعد از ظهر",
        unredmessage: Math.floor(Math.random() * 10),
        avatar: image1,
        status: "آفلاین",
      },
    ],
    chats: [
      {
        id: 1,
        userId: 1,
        messages: [
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "آن‌ها",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "آن‌ها",
          },
          {
            content: "سلام، من خوبم، شما چطور؟",
            img: image1,
            time: "10:01",
            sender: "من",
          },
          {
            content: "متشکرم، خیلی عالی خواهد بود.",
            img: image1,
            time: "10:03",
            sender: "من",
          },
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "آن‌ها",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "آن‌ها",
          },
          {
            content: "سلام، من خوبم، شما چطور؟",
            img: image1,
            time: "10:01",
            sender: "من",
          },
          {
            content: "متشکرم، خیلی عالی خواهد بود.",
            img: image1,
            time: "10:03",
            sender: "من",
          },
        ],
      },
      {
        id: 2,
        userId: 2,
        messages: [
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "آن‌ها",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "آن‌ها",
          },
        ],
      },
      {
        id: 3,
        userId: 3,
        messages: [
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "آن‌ها",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "من",
          },
        ],
      },
      {
        id: 4,
        userId: 4,
        messages: [
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "من",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "آن‌ها",
          },
        ],
      },
      {
        id: 5,
        userId: 5,
        messages: [
          {
            img: image2,
            content: "سلام! حالتون چطوره؟",
            time: "10:00",
            sender: "آن‌ها",
          },
          {
            img: image2,
            content: "خوبم، برای شما اتاق جلسه رزرو می‌کنم.",
            time: "10:02",
            sender: "آن‌ها",
          },
        ],
      },
    ],
  },
  reducers: {
    openChat: (state, action) => {
      state.activechat = action.payload.activechat;
      state.mobileChatSidebar = !state.mobileChatSidebar;
      state.user = action.payload.contact;
      state.chats.map((item) => {
        if (item.userId === action.payload.contact.id) {
          state.messFeed = item.messages;
        }
      });
    },
    // toggole mobile chat sidebar
    toggleMobileChatSidebar: (state, action) => {
      state.mobileChatSidebar = action.payload;
    },
    infoToggle: (state, action) => {
      state.openinfo = action.payload;
    },
    sendMessage: (state, action) => {
      state.messFeed.push(action.payload);
    },
    toggleProfile: (state, action) => {
      state.openProfile = action.payload;
    },
    setContactSearch: (state, action) => {
      state.searchContact = action.payload;
    },
    toggleActiveChat: (state, action) => {
      state.activechat = action.payload;
    },
  },
});

export const {
  openChat,
  toggleMobileChatSidebar,
  infoToggle,
  sendMessage,
  toggleProfile,
  setContactSearch,
  toggleActiveChat,
} = appChatSlice.actions;
export default appChatSlice.reducer;

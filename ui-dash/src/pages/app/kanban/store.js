import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";
import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";

export const appKanbanSlice = createSlice({
  name: "appkanban",
  initialState: {
    columModal: false,
    taskModal: false,
    isLoading: null,
    openTaskId: null,

    // for edit
    editModal: false,
    editItem: {},
    columns: [
      {
        id: uuidv4(),
        name: "وظایف",
        color: "#4669FA",
        tasks: [
          {
            id: uuidv4(),
            assignee: [
              {
                image: avatar1,
                title: "سعید حسنی",
              },
              {
                image: avatar2,
                title: "نگار صادقی",
              },
              {
                image: avatar3,
                title: "علی محمدی",
              },
            ],
            name: "داشبورد مدیریت ارتباط با مشتری",
            des: "این یک توضیح مختصر درباره داشبورد مدیریت ارتباط با مشتری است.",
            startDate: "1402-10-03",
            endDate: "1402-10-06",
            progress: 90,
            category: [
              {
                value: "team",
                label: "تیم",
              },
              {
                value: "low",
                label: "کم",
              },
            ],
          },
          {
            id: uuidv4(),
            assignee: [
              {
                image: avatar1,
                title: "سعید حسنی",
              },
              {
                image: avatar2,
                title: "نگار صادقی",
              },
              {
                image: avatar3,
                title: "علی محمدی",
              },
            ],
            name: "نمونه کانبان دش کد",
            des: "این یک توضیح مختصر درباره نمونه کانبان دش کد است.",
            startDate: "1402-10-03",
            endDate: "1402-10-06",
            progress: 55,
            category: [
              {
                value: "team",
                label: "تیم",
              },
              {
                value: "low",
                label: "کم",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: "در حال انجام",
        color: "#FA916B",
        tasks: [
          {
            id: uuidv4(),
            assignee: [
              {
                image: avatar1,
                title: "محمدرضا کریمی",
              },
              {
                image: avatar2,
                title: "فاطمه زمانی",
              },
              {
                image: avatar3,
                title: "علی میرزایی",
              },
            ],
            name: "داشبورد کسب و کار",
            des: "این یک توضیح مختصر درباره داشبورد کسب و کار است.",
            startDate: "1402-10-03",
            endDate: "1402-10-06",
            progress: 75,
            category: [
              {
                value: "team",
                label: "تیم",
              },
              {
                value: "low",
                label: "کم",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        name: "انجام شده",
        color: "#50C793",
        tasks: [
          {
            id: uuidv4(),
            assignee: [
              {
                image: avatar1,
                title: "مریم اسماعیلی",
              },
              {
                image: avatar2,
                title: "سارا رضایی",
              },
              {
                image: avatar3,
                title: "پویا شاهسوند",
              },
            ],
            name: "داشبورد مدیریت",
            des: "این یک توضیح مختصر درباره داشبورد مدیریت است.",
            startDate: "1402-10-03",
            endDate: "1402-10-06",
            progress: 40,
            category: [
              {
                value: "team",
                label: "تیم",
              },
              {
                value: "low",
                label: "کم",
              },
            ],
          },
        ],
      },
    ],
    isLoading: false,
  },
  reducers: {
    sort: (state, action) => {
      const { source, destination } = action.payload;
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = state.columns.find(
          (column) => column.id === source.droppableId
        );
        const destColumn = state.columns.find(
          (column) => column.id === destination.droppableId
        );

        const sourceItems = [...sourceColumn.tasks];
        const destItems = [...destColumn.tasks];

        const [removed] = sourceItems.splice(source.index, 1);

        destItems.splice(destination.index, 0, removed);

        sourceColumn.tasks = sourceItems;
        destColumn.tasks = destItems;
      } else {
        const items = state.columns;
        const [reorderedItem] = items.splice(action.payload.source.index, 1);
        items.splice(action.payload.destination.index, 0, reorderedItem);
      }
    },
    toggleColumnModal: (state, action) => {
      state.columModal = action.payload;
    },
    addColumnBoard: (state, action) => {
      state.columns.push({
        id: uuidv4(),
        name: action.payload.title,
        color: action.payload.color,
        tasks: [],
      });

      toast.success("با موفقیت اضافه شد", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
        className: "font-iransans",
      });
    },
    deleteColumnBoard: (state, action) => {
      const index = state.columns.findIndex(
        (column) => column.id === action.payload
      );
      state.columns.splice(index, 1);
    },
    toggleTaskModal: (state, action) => {
      const { columnId, open } = action.payload;
      state.taskModal = open;
      state.openTaskId = columnId;
    },
    addTask: (state, action) => {
      const column = state.columns.find(
        (column) => column.id === state.openTaskId
      );
      column.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const column = state.columns.find(
        (item) =>
          item.tasks.findIndex(
            (innerItem) => innerItem.id === action.payload
          ) !== -1
      );

      if (column) {
        const index = column.tasks.findIndex(
          (innerItem) => innerItem.id === action.payload
        );
        column.tasks.splice(index, 1);
        toast.warning("حذف با موفقیت انجام شد", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          rtl: true,
          className: "font-iransans",
        });
      }
    },
    // toggleEditModal
    toggleEditModal: (state, action) => {
      const { task, editModal } = action.payload;
      state.editModal = editModal;
      state.editItem = task;
    },
    updateTask: (state, action) => {
      // update task
      const column = state.columns.find(
        (item) =>
          item.tasks.findIndex(
            (innerItem) => innerItem.id === action.payload.id
          ) !== -1
      );

      if (column) {
        const index = column.tasks.findIndex(
          (innerItem) => innerItem.id === action.payload.id
        );
        column.tasks[index] = action.payload;

        toast.info("با موفقیت ویرایش شد", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          rtl: true,
          className: "font-iransans",
        });
      }
    },
  },
});

export const {
  sort,
  toggleColumnModal,
  addColumnBoard,
  deleteColumnBoard,
  addTask,
  toggleTaskModal,
  deleteTask,
  toggleEditModal,
  updateTask,
} = appKanbanSlice.actions;
export default appKanbanSlice.reducer;

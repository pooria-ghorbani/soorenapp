import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import { toast } from "react-toastify";

export const appTodoSlice = createSlice({
  name: "apptodo",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        image: [
          {
            image: avatar1,
            label: "صادق قاسم نژاد",
            value: "صادق",
          },
          {
            image: avatar2,
            label: "مهدی حلوایی",
            value: "مهدی",
          },
          {
            image: avatar3,
            label: "رضا سلمانی",
            value: "رضا",
          },
        ],
        title: "متن تسی و رندوم یک",
        isDone: false,
        isfav: false,
        isTrash: false,
        category: [
          {
            value: "team",
            label: "تیم",
          },
        ],
      },
      {
        id: uuidv4(),
        image: [
          {
            image: avatar2,
            label: "رضا سلمانی",
            value: "رضا",
          },
        ],
        title: "متن تسی و رندوم دو",
        isDone: false,
        isfav: true,
        isTrash: false,
        category: [
          {
            value: "low",
            label: "پایین",
          },
        ],
      },
      {
        id: uuidv4(),
        image: [
          {
            image: avatar1,
            label: "مهدی حلوایی",
            value: "مهدی",
          },
          {
            image: avatar2,
            label: "رضا سلمانی",
            value: "رضا",
          },
        ],
        title: "متن تسی و رندوم دو",
        isDone: true,
        isfav: true,
        isTrash: false,
        category: [
          {
            value: "medium",
            label: "متوسط",
          },
          {
            value: "low",
            label: "پایین",
          },
        ],
      },
      {
        id: uuidv4(),
        image: [
          {
            image: avatar3,
            label: "صادق قاسم نژاد",
            value: "صادق",
          },
          {
            image: avatar4,
            label: "مهدی حلوایی",
            value: "مهدی",
          },
          {
            image: avatar1,
            label: "رضا سلمانی",
            value: "رضا",
          },
        ],
        title: "متن تسی و رندوم سه",
        isDone: false,
        isfav: false,
        isTrash: false,
        category: [
          {
            value: "high",
            label: "بالا",
          },
          {
            value: "low",
            label: "پایین",
          },
        ],
      },
      {
        id: uuidv4(),
        image: [
          {
            image: avatar4,
            label: "رضا سلمانی",
            value: "رضا",
          },
        ],
        title: "متن تسی و رندوم سه",
        isDone: false,
        isfav: false,
        isTrash: false,
        category: [
          {
            value: "update",
            label: "آپدیت",
          },
        ],
      },
    ],
    filter: "all",
    addModal: false,
    editModal: false,
    todoSearch: "",
    isLoading: false,
    editItem: {},
    trashTodo: [],
    todoSearch: "",
    mobileTodoSidebar: false,
  },
  reducers: {
    // open add modal
    openAddModal: (state, action) => {
      state.addModal = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
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
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // store it into trash todo
      state.trashTodo.unshift(action.payload);

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
    },
    editTodo: (state, action) => {
      state.todos.findIndex((item) => {
        if (item.id === action.payload.id) {
          state.editItem = item;
          state.editModal = !state.editModal;
          // find index
          let index = state.todos.indexOf(item);
          state.todos.splice(index, 1, {
            // give a id into eidtModalId
            id: action.payload.id,
            title: action.payload.title,
            isDone: action.payload.isDone,
            isfav: action.payload.isfav,
            image: action.payload.image,
            category: action.payload.category,
          });
        }
      });
    },
    isCheck: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    isFaveCheck: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isfav: !todo.isfav } : todo
      );
    },
    // search todo
    setSearch: (state, action) => {
      state.todoSearch = action.payload;
    },
    // mobile todo sidebar
    toggleMobileTodoSidebar: (state, action) => {
      state.mobileTodoSidebar = action.payload;
    },
    closeEditModal: (state, action) => {
      state.editModal = action.payload;
    },
  },
});

export const {
  addTodo,
  setFilter,
  openAddModal,
  deleteTodo,
  editTodo,
  isCheck,
  isFaveCheck,
  setSearch,
  toggleMobileTodoSidebar,
  closeEditModal,
} = appTodoSlice.actions;
export default appTodoSlice.reducer;

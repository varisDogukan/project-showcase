import { create } from "zustand";

export type User = {
  name?: string;
  email: string;
  password: string;
};

type Store = {
  themeTitle: "dark" | "light";
  toggleTheme: () => void;

  isShowSignModal: boolean;
  showSignModal: () => void;

  isSignIn: boolean;
  changeSignType: () => void;

  userInitialState: User;
  userInfo: User;
  setUserInfo: ({ name, value }: { name: string; value: string }) => void;
  clearUserInfo: () => void;
};

function checkStorage() {
  if (
    typeof window !== "undefined" &&
    (localStorage.themeTitle === "dark" ||
      (!("themeTitle" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))
  ) {
    return "dark";
  } else {
    return "light";
  }
}

const initialState: User = {
  name: "",
  email: "",
  password: "",
};

const useStore = create<Store>((set) => ({
  themeTitle: checkStorage(),
  toggleTheme: () =>
    set((state) => {
      const themeTitle = state.themeTitle === "dark" ? "light" : "dark";
      localStorage.themeTitle = themeTitle;

      return { themeTitle };
    }),

  isShowSignModal: false,
  showSignModal: () =>
    set((state) => {
      const isShowSignModal = !state.isShowSignModal;

      return { isShowSignModal };
    }),

  isSignIn: false,
  changeSignType: () =>
    set((state) => {
      const isSignIn = !state.isSignIn;

      return { isSignIn };
    }),

  userInitialState: initialState,
  userInfo: initialState,
  setUserInfo: ({ name, value }) =>
    set((state) => {
      return { userInfo: { ...state.userInfo, [name]: value } };
    }),
  clearUserInfo: () =>
    set((state) => {
      return { userInfo: state.userInitialState };
    }),
}));

export default useStore;

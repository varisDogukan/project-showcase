import { create } from "zustand";

type Store = {
  themeTitle: "dark" | "light";
  toggleTheme: () => void;

  isShowSignModal: boolean;
  showSignModal: () => void;

  isSignIn: boolean;
  changeSignType: () => void;
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
}));

export default useStore;

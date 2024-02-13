import { create } from "zustand";

type Store = {
  themeTitle: "dark" | "light";
  toggleTheme: () => void;
};

function checkStorage() {
  if (
    !("theme" in localStorage) &&
    localStorage.themeTitle !== "light" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
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
}));

export default useStore;

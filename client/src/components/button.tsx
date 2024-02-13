"use client";

import useStore from "@/stores/zustandStore";

export default function Button() {
  const { themeTitle, toggleTheme } = useStore();

  return <button onClick={toggleTheme}>Click Me</button>;
}

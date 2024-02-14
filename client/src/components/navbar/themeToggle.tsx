"use client";

import React from "react";
import useStore from "@/stores/zustandStore";
import LabelWrapper from "./styles/themeToggle.styles";
import { VisuallyHidden } from "..";

export default function ThemeToggle() {
  const { themeTitle, toggleTheme } = useStore();
  const [checkedTheme, setCheckedTheme] = React.useState(false);

  React.useEffect(() => {
    setCheckedTheme(themeTitle === "light");
  }, [themeTitle]);

  return (
    <LabelWrapper>
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={checkedTheme}
        onChange={toggleTheme}
      />
      <svg className="toggle-checkbox__icon" viewBox="0 0 100 100">
        <mask id="mask--inner">
          <circle
            className="mask--inner"
            cx="50"
            cy="50"
            r="25"
            fill="white"
            strokeWidth="4"
            stroke="white"
          ></circle>
        </mask>
        <mask id="mask--outer">
          <rect width="100" height="100" fill="white"></rect>
          <circle
            className="mask--outer"
            cx="67.67"
            cy="32.33"
            fill="black"
            r="25"
          ></circle>
        </mask>
        <circle
          className="circle--inner"
          cx="50"
          cy="50"
          r="25"
          mask="url(#mask--outer)"
        ></circle>
        <circle
          className="circle--outer"
          cx="67.67"
          cy="32.33"
          r="25"
          mask="url(#mask--inner)"
        ></circle>
        <line className="line line--1" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--2" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--3" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--4" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--5" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--6" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--7" x1="50" y1="23" x2="50" y2="28" />
        <line className="line line--8" x1="50" y1="23" x2="50" y2="28" />
      </svg>
      <VisuallyHidden>Theme toggle button</VisuallyHidden>
    </LabelWrapper>
  );
}

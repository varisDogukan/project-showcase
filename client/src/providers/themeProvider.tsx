"use client";

import { ThemeProvider as Theme } from "styled-components";
import useStore from "@/stores/zustandStore";
import GlobalStyles, { theme } from "@/app/global-styles";
import StyledComponentsRegistry from "@/lib/registry";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeTitle } = useStore();

  return (
    <StyledComponentsRegistry>
      <Theme theme={theme[themeTitle]}>
        {children}
        <GlobalStyles />
      </Theme>
    </StyledComponentsRegistry>
  );
}

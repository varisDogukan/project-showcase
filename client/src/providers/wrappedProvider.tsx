import { Navbar } from "@/components";
import ThemeProvider from "./themeProvider";

type Props = {
  children: React.ReactNode;
};

export default function WrapperProvider({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        <Navbar />

        {children}
      </ThemeProvider>
    </>
  );
}

import { Button } from "@/components";
import HomeWrapper from "./page.styles";

export default function Home() {
  return (
    <HomeWrapper>
      <h2>Welcome to my portfolio</h2>
      <p>
        A showcase of my work across various technologies and programming
        languages. Each project is a piece of my journey in solving real-world
        problems with code. From front-end design to back-end systems,
        here&apos;s where I put my skills to the test. Take a look and see what
        I&apos;ve built!
      </p>
      <Button variant='tertiaryBg' href='/todo-app'>
        View Projects
      </Button>
    </HomeWrapper>
  );
}

import Image from "next/image";
import { Nav, NavContent } from "./styles/navbar.styles";
import { Button, ThemeToggle } from "../";

export default function Navbar() {
  return (
    <Nav>
      <NavContent>
        <Button>Register / Login</Button>
        <ThemeToggle />
      </NavContent>
      <Image alt="logo" src="/assets/Logo.svg" width={53} height={40} />
    </Nav>
  );
}

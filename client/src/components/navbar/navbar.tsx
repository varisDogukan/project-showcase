import Image from "next/image";
import NavbarContent from "./navbarContent";
import NavbarWrapper from "./styles/navbar.styles";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContent />
      <Image alt="logo" src="/assets/Logo.svg" width={53} height={40} />
    </NavbarWrapper>
  );
}

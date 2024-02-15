"use client";

import useStore from "@/stores/zustandStore";
import { Button, ThemeToggle, Modal, SignContainer } from "..";
import NavbarContentWrapper from "./styles/navbarContent.styles";

export default function NavbarContent() {
  const { isShowSignModal, showSignModal } = useStore();

  return (
    <NavbarContentWrapper>
      <Button variant="secondary" onClick={showSignModal}>
        Sign
      </Button>
      <ThemeToggle />

      {isShowSignModal && (
        <Modal>
          <SignContainer />
        </Modal>
      )}
    </NavbarContentWrapper>
  );
}

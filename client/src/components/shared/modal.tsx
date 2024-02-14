import React from "react";
import ModalWrapper from "./styles/modal.styles";

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return <ModalWrapper>{children}</ModalWrapper>;
}

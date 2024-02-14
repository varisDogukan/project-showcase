import React from "react";
import useStore from "@/stores/zustandStore";
import SignContainerWrapper from "./styles/signContainer.styles";
import useOutsideClick from "@/utils/hooks/useOutsideClick";

export default function SignContainer() {
  const { isShowSignModal, showSignModal } = useStore();
  const signRef = React.useRef(null);

  useOutsideClick({ ref: signRef, callback: showSignModal });

  return (
    <SignContainerWrapper ref={signRef}>signContainer</SignContainerWrapper>
  );
}

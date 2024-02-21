import React from "react";
import useStore from "@/stores/zustandStore";
import SignContainerWrapper from "./styles/signContainer.styles";
import Image from "next/image";
import { Button, VisuallyHidden } from "..";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function SignContainer() {
  const { showSignModal, isSignIn, changeSignType } = useStore();

  const check = {
    signUp: "Don't have an account?",
    signIn: "Already have an account.",
  };

  return (
    <SignContainerWrapper>
      <Button size="normal" onClick={showSignModal} variant="transparent">
        <Image
          src="/assets/Close.svg"
          alt="close icon for sign modal"
          width={20}
          height={20}
        />
        <VisuallyHidden>Sign modal close button</VisuallyHidden>
      </Button>
      <h4>{isSignIn ? "Sign In" : "Sign Up"}</h4>

      {isSignIn ? <SignIn /> : <SignUp />}
      <p>
        {check[isSignIn ? "signUp" : "signIn"]}
        <Button onClick={changeSignType} size="normal" variant="transparent">
          {isSignIn ? "Sign Up" : "Sign In"}
        </Button>
      </p>
    </SignContainerWrapper>
  );
}

import React from "react";
import useStore from "@/stores/zustandStore";
import { Button } from "..";
import FormInputGroup from "../shared/formInputGroup";
import SignUpWrapper from "./styles/signUp.styles";
import useSignUpMutation from "@/utils/hooks/mutations/useSignUpMutation";

export default function SignUp() {
  const { setUserInfo } = useStore();
  const { errorContainer, isPending, mutate, setErrorContainer } =
    useSignUpMutation();

  function handleInputChange(evn: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evn.target;

    setErrorContainer({ name: "", password: "", email: "" });
    setUserInfo({ name, value });
  }

  function handleSubmit(evn: React.FormEvent<HTMLFormElement>) {
    evn.preventDefault();
    setErrorContainer({ name: "", password: "", email: "" });
    mutate();
  }

  return (
    <SignUpWrapper onSubmit={handleSubmit}>
      <FormInputGroup
        name="name"
        onChange={handleInputChange}
        title="name"
        type="text"
        errorMsg={errorContainer.name}
        placeholder="John Doe"
      />

      <FormInputGroup
        name="email"
        onChange={handleInputChange}
        title="email"
        type="email"
        errorMsg={errorContainer.email}
        placeholder="example@gg.com"
      />

      <FormInputGroup
        name="password"
        onChange={handleInputChange}
        title="password"
        type="password"
        errorMsg={errorContainer.password}
        placeholder="12345"
      />

      <Button variant="tertiaryBg" size="full" type="submit">
        {isPending ? "Pending" : "Sign Up"}
      </Button>
    </SignUpWrapper>
  );
}

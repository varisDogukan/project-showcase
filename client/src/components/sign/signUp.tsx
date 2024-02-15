import { Button } from "..";
import FormInputGroup from "../shared/formInputGroup";
import SignUpWrapper from "./styles/signUp.styles";

export default function SignUp() {
  return (
    <SignUpWrapper>
      <FormInputGroup
        name="name"
        onChange={() => {}}
        title="name"
        type="text"
        errorMsg=""
      />

      <FormInputGroup
        name="email"
        onChange={() => {}}
        title="email"
        type="email"
        errorMsg=""
      />

      <FormInputGroup
        name="password"
        onChange={() => {}}
        title="password"
        type="password"
        errorMsg=""
      />

      <Button onClick={() => {}} variant="tertiaryBg" size="full">
        Sign Up
      </Button>
    </SignUpWrapper>
  );
}

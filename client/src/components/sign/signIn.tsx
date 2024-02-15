import { Button } from "..";
import FormInputGroup from "../shared/formInputGroup";
import SignUpWrapper from "./styles/signUp.styles";

export default function SignIn() {
  return (
    <SignUpWrapper>
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

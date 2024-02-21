import useStore from "@/stores/zustandStore";
import { Button } from "..";
import FormInputGroup from "../shared/formInputGroup";
import SignUpWrapper from "./styles/signUp.styles";
import useSignInMutation from "@/utils/hooks/mutations/useSignInMutation";

export default function SignIn() {
  const { setUserInfo } = useStore();
  const { errorContainer, isPending, mutate, setErrorContainer } =
    useSignInMutation();

  function handleInputChange(evn: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evn.target;

    setErrorContainer({ password: "", email: "" });
    setUserInfo({ name, value });
  }

  function handleSubmit(evn: React.FormEvent<HTMLFormElement>) {
    evn.preventDefault();
    setErrorContainer({ password: "", email: "" });
    mutate();
  }

  return (
    <SignUpWrapper onSubmit={handleSubmit}>
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

      <Button type="submit" variant="tertiaryBg" size="full">
        {isPending ? "Pending" : "Sign In"}
      </Button>
    </SignUpWrapper>
  );
}

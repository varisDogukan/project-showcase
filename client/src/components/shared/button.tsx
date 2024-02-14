import ButtonWrapper from "./styles/button.styles";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}

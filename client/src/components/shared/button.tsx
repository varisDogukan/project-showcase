import ButtonWrapper from "./styles/button.styles";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, ...props }: Props) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

import VisuallyHiddenWrapper from "./styles/visuallyHidden.styles";

type Props = {
  children: React.ReactNode;
};

export default function VisuallyHidden({ children }: Props) {
  return <VisuallyHiddenWrapper>{children}</VisuallyHiddenWrapper>;
}

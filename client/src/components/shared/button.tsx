import ButtonWrapper from "./styles/button.styles";

type Props = {
  children: React.ReactNode;
  variant: "transparent" | "primary" | "secondary" | "tertiaryBg";
  size: "normal" | "full";
  type?: "reset" | "button" | "submit";
  onClick?: () => void;
};

const colors = {
  transparent: {
    bg: "--transparent",
    color: "--primary-color",
  },
  primary: {
    bg: "--primary-bg",
    color: "--primary-color",
  },
  secondary: {
    bg: "--secondary-bg",
    color: "--secondary-color",
  },
  tertiaryBg: {
    bg: "--tertiary-bg",
    color: "--tertiary-color",
  },
};

export default function Button({
  children,
  variant,
  size = "normal",
  type = "button",
  onClick,
}: Props) {
  const background = colors[variant].bg;
  const color = colors[variant].color;
  const sizeProp = size === "normal" ? "auto" : "100%";

  return (
    <ButtonWrapper
      type={type}
      size={sizeProp}
      background={background}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
}

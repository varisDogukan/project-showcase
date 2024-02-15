import ButtonWrapper from "./styles/button.styles";

type Props = {
  children: React.ReactNode;
  variant: "transparent" | "primary" | "secondary" | "tertiaryBg";
  size: "normal" | "full";
  onClick: () => void;
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
  ...props
}: Props) {
  const variantBg = colors[variant].bg;
  const variantColor = colors[variant].color;
  const sizeProp = size === "normal" ? "auto" : "100%";

  return (
    <ButtonWrapper
      size={sizeProp}
      variantbg={variantBg}
      variantcolor={variantColor}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

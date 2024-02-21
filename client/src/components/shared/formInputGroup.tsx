import React from "react";
import FormInputGroupWrapper from "./styles/formInputGroup.styles";

type Props = {
  title: string;
  type: string;
  name: string;
  placeholder: string;
  errorMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInputGroup({ title, errorMsg, ...props }: Props) {
  return (
    <FormInputGroupWrapper htmlFor={props.name}>
      <span>{title}</span>
      <input id={props.name} {...props} autoComplete="on" />
      {errorMsg && <p>{errorMsg}</p>}
    </FormInputGroupWrapper>
  );
}

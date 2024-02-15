import React from "react";
import FormInputGroupWrapper from "./styles/formInputGroup.styles";

type Props = {
  title: string;
  type: string;
  name: string;
  errorMsg?: string;
  onChange: () => void;
};

export default function FormInputGroup({ title, errorMsg, ...props }: Props) {
  return (
    <FormInputGroupWrapper htmlFor={props.name}>
      <span>{title}</span>
      <input id={props.name} {...props} />
      {errorMsg && <p>{errorMsg}</p>}
    </FormInputGroupWrapper>
  );
}

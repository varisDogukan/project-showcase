"use client";

import styled from "styled-components";

type Props = {
  variantcolor: string;
  variantbg: string;
  size: string;
};

const ButtonWrapper = styled.button<Props>`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  background-color: var(${(props) => props.variantbg});
  color: var(${(props) => props.variantcolor});
  width: ${(props) => props.size};
`;

export default ButtonWrapper;

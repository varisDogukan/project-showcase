"use client";

import styled from "styled-components";

type Props = {
  color: string;
  background: string;
  size: string;
};

const ButtonWrapper = styled.button<Props>`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  background-color: var(${(props) => props.background});
  color: var(${(props) => props.color});
  width: ${(props) => props.size};
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(80%);
  }
`;

export default ButtonWrapper;

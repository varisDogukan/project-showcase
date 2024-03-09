"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

type Props = {
  color: string;
  $background: string;
  size: string;
};

const sharedStyle = css`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonWrapper = styled.button<Props>`
  ${sharedStyle};

  background: var(${({ $background }) => $background});
  color: var(${({ color }) => color});
  width: ${(props) => props.size};
`;

export const LinkWrapper = styled(Link)<Props>`
  ${sharedStyle}
  background: var(${({ $background }) => $background});
  color: var(${({ color }) => color});
  width: ${(props) => props.size};
`;

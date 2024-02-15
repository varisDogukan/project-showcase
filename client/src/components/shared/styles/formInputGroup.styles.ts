"use client";

import styled from "styled-components";

const FormInputGroupWrapper = styled.label`
  display: block;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 50px;
  }

  span {
    text-transform: capitalize;
    font-size: 18px;
  }

  input {
    margin: 5px 0;
    display: block;
    font-weight: 500;
    padding: 10px;
    border-radius: 4px;
    border: none;
    width: 100%;
    color: var(--primary-color);
    background-color: var(--primary-bg);
    font-size: 14px;
  }

  p {
    color: var(--error-color);
    font-weight: 400;
    font-size: 15px;
    padding: 0 10px;
  }
`;

export default FormInputGroupWrapper;

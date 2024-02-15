"use client";

import styled from "styled-components";

const SignContainerWrapper = styled.div`
  position: relative;
  width: min(90%, 400px);
  background-color: var(--secondary-bg);
  color: var(--secondary-color);
  border-radius: 8px;
  padding: 50px 20px 20px;
  box-shadow: var(--bs);

  h4 {
    margin-bottom: 30px;
    color: #609797;
    font-size: 28px;
    text-align: center;
  }

  & > button {
    position: absolute;
    right: 0;
    top: 10px;
  }

  & > p {
    text-align: center;
  }
`;

export default SignContainerWrapper;

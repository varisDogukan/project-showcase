"use client";

import styled from "styled-components";

const HomeWrapper = styled.main`
  width: min(90%, 600px);
  margin: 0 auto;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    opacity: 0.6;
    font-size: 14px;
  }
`;

export default HomeWrapper;

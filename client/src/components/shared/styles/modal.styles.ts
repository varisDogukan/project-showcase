"use client";

import styled from "styled-components";

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  overflow-y: auto;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export default ModalWrapper;

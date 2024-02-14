import styled from "styled-components";

export const Wrapper = styled.label`
  display: block;
  width: 50px;
  height: 50px;
  cursor: pointer;

  .toggle-checkbox {
    position: absolute;

    width: 1px;
    height: 1px;

    overflow: hidden;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);

    white-space: nowrap;
  }

  .theme-checkbox__icon {
    width: 50px;
  }

  .circle--inner,
  .circle--outer {
    fill: none;

    stroke: var(--stroke-color);
    stroke-width: 4;

    transition: all 0.5s ease-in-out;
  }

  .mask--outer,
  .mask--inner {
    transition: all 0.5s ease-in-out;
  }

  .line {
    stroke: var(--stroke-color);
    stroke-width: 4;
    stroke-linecap: round;

    transform-origin: center;
    transition: all 0.5s ease-in-out;

    opacity: 0;
  }

  .line--1 {
    transform: rotate(0deg) scaleY(0);
  }

  .line--2 {
    transform: rotate(45deg) scaleY(0);
  }

  .line--3 {
    transform: rotate(90deg) scaleY(0);
  }

  .line--4 {
    transform: rotate(135deg) scaleY(0);
  }

  .line--5 {
    transform: rotate(180deg) scaleY(0);
  }

  .line--6 {
    transform: rotate(225deg) scaleY(0);
  }

  .line--7 {
    transform: rotate(270deg) scaleY(0);
  }

  .line--8 {
    transform: rotate(315deg) scaleY(0);
  }

  .toggle-checkbox:checked + svg .circle--outer,
  .toggle-checkbox:checked + svg .mask--outer {
    r: 0%;
  }

  .toggle-checkbox:checked + svg .circle--inner,
  .toggle-checkbox:checked + svg .mask--inner {
    r: 12.5%;
  }

  .toggle-checkbox:checked + svg .line {
    opacity: 1;
  }

  .toggle-checkbox:checked + svg .line--1 {
    transform: rotate(0deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--2 {
    transform: rotate(45deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--3 {
    transform: rotate(90deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--4 {
    transform: rotate(135deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--5 {
    transform: rotate(180deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--6 {
    transform: rotate(225deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--7 {
    transform: rotate(270deg) scaleY(1);
  }

  .toggle-checkbox:checked + svg .line--8 {
    transform: rotate(315deg) scaleY(1);
  }

  /* Show focus styles when the SVG receives focus */
  input[type="checkbox"]:focus + svg {
    outline: 3px solid;
  }

  /* Hide focus styles for mouse users */
  input[type="checkbox"]:focus:not(:focus-visible) + svg {
    outline: none;
  }
`;

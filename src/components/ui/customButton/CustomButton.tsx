import { FC, ReactNode } from "react";
import styled from "styled-components";

interface TypedButton {
  children: ReactNode;
  actionClick: () => void;
}

const CustomButton: FC<TypedButton> = ({ children, actionClick }) => {
  const Button = styled.button`
    width: 100%;
    font-size: 16px;
    padding: 9px 10px;
    border: none;
    border-radius: 4px;
    font-family: sans-serif;
    color: white;
    cursor: pointer;
    background-color: #0052cc;
    &:hover {
      background-color: #0065ff;
    }
  `;
  return <Button onClick={actionClick}>{children}</Button>;
};

export default CustomButton;

import styled from "styled-components";

import { Button, Checkbox, TextField } from "@mui/material";

export const StyledTodoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledTodoTextField = styled(TextField)`
  width: 100%;
  background: ${({ isComplete }) => (isComplete ? "red" : "lightblue")};
  text-decoration: ${({ isComplete }) =>
    isComplete ? "line-through" : "none"};
  border-radius: 15px;
  padding: 0rem 1rem;
  padding-top: 1rem;
  color: black;
`;

export const StyledTodoClickable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledDeleteBtn = styled(Button)`
  background: #2f2f2f;
  transition: all ease-in-out 300ms;
  color: #ce4646;
  &:hover {
    transition: all ease-in-out 300ms;
    background: #ce4646;
    color: #2f2f2f;
  }
`;

export const StyledCheckbox = styled(Checkbox)``;

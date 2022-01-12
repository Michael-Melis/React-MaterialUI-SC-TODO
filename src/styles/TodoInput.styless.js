import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem;
`;

export const StyledButton = styled(Button)`
  background: #43f0a8;
  border-radius: 15px;
  width: 1rem;
  color: black;
  transition: all ease-in-out 300ms;
  &:hover {
    transition: all ease-in-out 300ms;
    background: #fff;
  }
`;

export const StyledTextField = styled(TextField)`
  background: lightblue;
  width: 20rem;
`;

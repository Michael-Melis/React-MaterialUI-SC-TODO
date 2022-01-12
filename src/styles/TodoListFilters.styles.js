import styled from "styled-components";
import { MenuItem, Select } from "@mui/material";

export const StyledSelect = styled(Select)`
  background: #43f0a8;
  width: 100%;
  padding: 0rem 1rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  background: #43f0a8;
  padding: 0rem 1rem;
  &:hover {
    background: lightblue;
  }
`;

export const StyledTodoListFilter = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    color: black;
  }
`;

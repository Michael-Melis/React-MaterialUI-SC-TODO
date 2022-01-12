import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../Atoms/atom";
import {
  StyledSelect,
  StyledTodoListFilter,
  StyledMenuItem,
} from "../styles/TodoListFilters.styles";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <StyledTodoListFilter>
      <h1>Show: </h1>
      <StyledSelect value={filter} onChange={updateFilter}>
        <StyledMenuItem value={"All"}>All</StyledMenuItem>
        <StyledMenuItem value={"Completed"}>Completed</StyledMenuItem>
        <StyledMenuItem value={"Uncomplete"}>Uncompleted</StyledMenuItem>
      </StyledSelect>
    </StyledTodoListFilter>
  );
};

export default TodoListFilters;

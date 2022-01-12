import React from "react";
import { useRecoilValue, selector } from "recoil";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { filteredTodolistState } from "./../Atoms/atom";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import {
  StyledListView,
  StyledStastAndFilter,
} from "./../styles/ListView.styles";

const ListView = () => {
  const todoList = useRecoilValue(filteredTodolistState);

  return (
    <StyledListView>
      <StyledStastAndFilter>
        <TodoListStats />
        <TodoListFilters />
      </StyledStastAndFilter>

      <TodoInput />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </StyledListView>
  );
};

export default ListView;

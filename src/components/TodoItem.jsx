import React from "react";
import { todoListState } from "./../Atoms/atom";
import { useRecoilState } from "recoil";
import { Button, Checkbox, TextField } from "@mui/material";
import {
  StyledTodoItem,
  StyledTodoTextField,
  StyledTodoClickable,
  StyledDeleteBtn,
  StyledCheckbox,
} from "../styles/TodoItem.styles";

const TodoItem = ({ todoItem }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === todoItem);

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const handleEditTodo = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      text: value,
    });
    setTodoList(newList);
  };

  const handleDelete = () => {
    setTodoList(
      todoList.filter((deletedItem) => deletedItem.id !== todoItem.id)
    );
  };

  const handleComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      isComplete: !todoItem.isComplete,
    });
    setTodoList(newList);
  };

  return (
    <StyledTodoItem>
      <StyledTodoTextField
        isComplete={todoItem.isComplete}
        variant="standard"
        type="text "
        value={todoItem.text}
        onChange={handleEditTodo}
        minRows={5}
      />
      <StyledTodoClickable>
        <StyledCheckbox
          type="checkbox"
          value={todoItem.isComplete}
          onChange={handleComplete}
        />
        <StyledDeleteBtn onClick={handleDelete}>x</StyledDeleteBtn>
      </StyledTodoClickable>
    </StyledTodoItem>
  );
};

export default TodoItem;

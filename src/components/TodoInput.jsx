import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledButton,
  StyledForm,
  StyledTextField,
} from "../styles/TodoInput.styless";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../Atoms/atom";
import { nanoid } from "nanoid";
import { Button, TextField } from "@mui/material";

const schema = yup.object().shape({
  text: yup.string().required(),
});

const TodoInput = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //seting atom
  const setTodoList = useSetRecoilState(todoListState);

  const handleSubmitClick = (data) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: nanoid(),
        text: data.text,
        isComplete: false,
      },
    ]);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitClick)}>
      <Controller
        name="text"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledTextField
            {...field}
            type="text"
            label="new task"
            error={!!errors.text}
            helperText={errors ? errors.text?.message : null}
          />
        )}
      />
      <StyledButton type="submit">+</StyledButton>
    </StyledForm>
  );
};

export default TodoInput;

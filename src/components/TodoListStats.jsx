import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Atoms/atom";
import { StyledUL } from "../styles/TodoListStats.styles";

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formatedPercentCompleted = Math.round(percentCompleted);
  return (
    <StyledUL>
      <li>Total items: {totalNum}</li>
      <li>Completed todos: {totalCompletedNum}</li>
      <li>Uncompleted todos: {totalUncompletedNum}</li>
      <li>Percent completed: {formatedPercentCompleted}</li>
    </StyledUL>
  );
};

export default TodoListStats;

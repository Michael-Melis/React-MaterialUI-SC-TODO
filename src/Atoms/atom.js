import { atom, selector } from "recoil";

//atoms
export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "All",
});
//selector

export const filteredTodolistState = selector({
  key: "filteredTodolistState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Completed":
        return list.filter((todoItem) => todoItem.isComplete);
      case "Uncomplete":
        return list.filter((todoItem) => !todoItem.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = todoList.filter(
      (item) => !item.isComplete
    ).length;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

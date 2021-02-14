import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: uuidv4(),
        title: "Task 1",
        creator: "Loc",
        status: "new",
        description:
          "This is a tasks,This is a tasks,This is a tasks,This is a tasks,This is a tasks,",
      },
      {
        id: uuidv4(),
        title: "Task 2",
        creator: "Toan",
        status: "doing",
        description:
          "This is a tasks,This is a tasks,This is a tasks,This is a tasks,This is a tasks,",
      },
      {
        id: uuidv4(),
        title: "Task 3",
        creator: "Loc",
        status: "done",
        description:
          "This is a tasks,This is a tasks,This is a tasks,This is a tasks,This is a tasks,",
      },
      {
        id: uuidv4(),
        title: "Task 1",
        creator: "Loc",
        status: "new",
        description:
          "This is a tasks,This is a tasks,This is a tasks,This is a tasks,This is a tasks,",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos.push({
        id: uuidv4(),
        title: action.payload.title,
        creator: action.payload.creator,
        status: action.payload.status,
        description: action.payload.description,
      });
    },
    searchTodo: (state, action) => {
        console.log(action.payload);
      state.allTodos = state.allTodos.filter(
        (todo) => todo.title === action.payload || todo.creator === action.payload
      );
    },
  },
});

//reducers
const todosReducer = todosSlice.reducer;

//selector

export const todosSelector = (state) => state.todosReducer.allTodos;

//action selector
export const { addTodo } = todosSlice.actions;

export const { searchTodo } = todosSlice.actions;
//export
export default todosReducer;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: uuidv4(),
        title: "Task 4",
        creator: "Hieu",
        status: "new",
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
    searchTodo: []
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
      const searchValue = state.allTodos.filter(
        (todo) =>
          todo.title === action.payload || todo.creator === action.payload
      );
      state.searchTodo = searchValue;
    },
    editTodo: (state, action) => {
      state.allTodos = state.allTodos.map((todo) => {
        console.log(todo.id);
        console.log(action.payload.id);
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            creator: action.payload.creator,
            status: action.payload.status,
            description: action.payload.description,
          };
        }else {
          return {
            ...todo,
          }
        }
      });
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload.id;
      console.log(todoId);
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

//reducers
const todosReducer = todosSlice.reducer;

//selector
export const todosSelector = (state) => state.todosReducer.allTodos;
//action selector
export const { addTodo, searchTodo, editTodo, deleteTodo } = todosSlice.actions;
//export
export default todosReducer;

import { actionType } from "./actionType";
import { updateObject } from "../utils/updateObject";

export const initialState = {
  todos: [
    {
      id: "a",
      text: "Learn react",
      isCompleted: true
    },
    {
      id: "b",
      text: "Learn CSS3 Animations",
      isCompleted: true
    },
    {
      id: "c",
      text: "Build a todo app!",
      isCompleted: false
    },
    {
      id: "d",
      text: "Animate the app",
      isCompleted: false
    },
    {
      id: "f",
      text: "Play games",
      isCompleted: false
    },
    {
      id: "g",
      text: "Go to gym",
      isCompleted: false
    }
  ]
};

function createTodo(state, action) {
  const updatedTodos = [...state.todos];

  updatedTodos.unshift({
    id: `${Math.random()}`,
    text: action.text,
    isCompleted: false
  });

  return updateObject(state, {
    todos: updatedTodos
  });
}

function updateTodo(state, action) {
  const updatedTodos = state.todos.map((todoItem) => {
    if (todoItem.id !== action.id) {
      return todoItem;
    }

    return {
      ...todoItem,
      ...action.update
    };
  });

  return updateObject(state, {
    todos: updatedTodos
  });
}

function deleteTodo(state, action) {
  const updatedTodos = state.todos.filter((todoItem) => {
    return todoItem.id !== action.id;
  });

  return updateObject(state, {
    todos: updatedTodos
  });
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actionType.CREATE_TODO:
      return createTodo(state, action);

    case actionType.UPDATE_TODO:
      return updateTodo(state, action);

    case actionType.DELETE_TODO:
      return deleteTodo(state, action);

    default:
      return state;
  }
};

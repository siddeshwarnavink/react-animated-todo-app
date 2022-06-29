import { useReducer } from "react";

import { initialState, todoReducer } from "./store/reducer";
import { actionType } from "./store/actionType";
import { filterCompletedTodos, filterPendingTodos } from "./utils/filterTodos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/todo-context";
import "./styles.css";

export default function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  function onAddTodo(todoText) {
    dispatch({
      type: actionType.CREATE_TODO,
      text: todoText
    });
  }

  function onRemoveTodo(todoItem) {
    dispatch({
      type: actionType.DELETE_TODO,
      id: todoItem.id
    });
  }

  function onToggleTodoState(todoItem) {
    dispatch({
      type: actionType.UPDATE_TODO,
      id: todoItem.id,
      update: { isCompleted: !todoItem.isCompleted }
    });
  }

  return (
    <div>
      <h1>
        React Todo <span role="img">😎🤏</span>
      </h1>

      <AddTodo addTodo={onAddTodo} />

      <div className="todo-wrapper">
        <div className="todo-grid">
          <TodoContext.Provider value={todoState.todos}>
            <TodoList
              toggleTodo={onToggleTodoState}
              removeTodo={onRemoveTodo}
              todos={filterPendingTodos(todoState.todos)}
            />
            <TodoList
              toggleTodo={onToggleTodoState}
              removeTodo={onRemoveTodo}
              todos={filterCompletedTodos(todoState.todos)}
            />
          </TodoContext.Provider>
        </div>
      </div>
    </div>
  );
}

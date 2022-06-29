import { useToggle } from "../hooks/useToggle";
import { cssClasses } from "../utils/cssClasses";

import TodoItem from "./TodoItem";

function TodoList(props) {
  const [isFlyAnimationPlaying, toggleFlyAnimation] = useToggle(false);

  function toggleTodoStateHandler(todoItem) {
    props.toggleTodo(todoItem);
  }

  return (
    <ul className={cssClasses([isFlyAnimationPlaying && "flyUp"])}>
      {props.todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          listPosition={index}
          todo={todo}
          toggleTodoState={() => toggleTodoStateHandler(todo)}
          removeTodo={() => props.removeTodo(todo)}
          toggleListAnimation={toggleFlyAnimation}
        />
      ))}
    </ul>
  );
}

export default TodoList;

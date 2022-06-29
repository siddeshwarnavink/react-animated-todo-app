import { useContext } from "react";

import { TodoContext } from "../context/todo-context";
import { filterCompletedTodos, filterPendingTodos } from "../utils/filterTodos";
import { cssClasses } from "../utils/cssClasses";
import { useToggle } from "../hooks/useToggle";
import { attachDynamicCSS } from "../utils/attachDynamicCSS";

function TodoItem(props) {
  const todoCtx = useContext(TodoContext);
  const [isFlyAnimationPlaying, toggleFlyAnimation] = useToggle(false);
  const [isFadeAnimationPlaying, toggleFadeAnimation] = useToggle(false);

  function onClickHandler() {
    const completedTodoListLength = filterCompletedTodos(todoCtx).length;
    const pendingTodoListLength = filterPendingTodos(todoCtx).length;

    const PIXLE_INCREMENT = 50; // approx. hight of each todo item

    // Adding Dynamic @keyframe
    if (!props.todo.isCompleted) {
      const ANIMATE_TO_PIXLE =
        (completedTodoListLength - props.listPosition) * PIXLE_INCREMENT;

      attachDynamicCSS(`
        @keyframes flyListItem {
          0% {
            transform: translate(0px, 0px);
          }
        
          100% {
            #2 transform: translate(330px, 110px);
            transform: translate(330px, ${ANIMATE_TO_PIXLE}px);
          }
        }
      `);
    } else {
      const ANIMATE_TO_PIXLE =
        (pendingTodoListLength - props.listPosition) * PIXLE_INCREMENT;

      attachDynamicCSS(`
        @keyframes flyListItem {
          0% {
            transform: translate(0px, 0px);
          }
        
          100% {
            #2 transform: translate(330px, 110px);
            transform: translate(-330px, ${ANIMATE_TO_PIXLE}px);
          }
        }
      `);
    }

    // Starting animation
    toggleFlyAnimation();

    // Updating the todo after the animation is done
    setTimeout(props.toggleTodoState, 1500);
  }

  function removeTodoHandler() {
    // Starting animation
    toggleFadeAnimation();
    // Deleting the todo after the animation is done
    setTimeout(props.removeTodo, 500);
  }

  /*
   * "✔️" for completed todo, "❌" for pending todo
   * if the animation is playing, display the opposite emoji
   */
  const displayEmoji = (
    isFlyAnimationPlaying ? !props.todo.isCompleted : props.todo.isCompleted
  )
    ? "✔️"
    : "❌";

  return (
    <li
      className={cssClasses([
        "todo-item",
        isFlyAnimationPlaying && "flyListItemAnimation",
        isFadeAnimationPlaying && "fadeAway"
      ])}
    >
      <div onClick={onClickHandler}>
        <span role="img">{displayEmoji}</span>️{props.todo.text}
      </div>

      <button onClick={removeTodoHandler}>X</button>
    </li>
  );
}

export default TodoItem;

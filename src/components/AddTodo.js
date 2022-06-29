import { createRef } from "react";

function AddTodo(props) {
  const inputRef = createRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    // Create todo only if the input is not empty
    if (inputRef.current.value.trim().length > 0) {
      props.addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="add-todo">
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="e.g push my code to github"
        />

        <button type="submit">+ Add</button>
      </div>
    </form>
  );
}

export default AddTodo;

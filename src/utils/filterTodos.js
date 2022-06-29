/**
 * Filters the pending todos
 * @param Array todos
 */
export function filterPendingTodos(todos) {
  return todos.filter((todoItem) => {
    return !todoItem.isCompleted;
  });
}

/**
 * Filters the completed todos
 * @param Array todos
 */
export function filterCompletedTodos(todos) {
  return todos.filter((todoItem) => {
    return todoItem.isCompleted;
  });
}

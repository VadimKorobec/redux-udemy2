import { useSelector } from "react-redux";

export const TodoList = () => {
  const { todos, status, error } = useSelector((state) => state.todos);
  return (
    <div>
      <h2>Todo List: {todos.length}</h2>
      <span>Status : {status}</span>
      {error && <h4>{error}</h4>}
    </div>
  );
};

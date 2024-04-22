import { useDispatch } from "react-redux";
import { createTodo } from "../store/todos/todoAcrions";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(e.target.title.value));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

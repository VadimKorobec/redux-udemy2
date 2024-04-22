import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserList } from "../UserList";
import { TodoList } from "../TodoList";
import "./App.css";
import { loadUser } from "../../store/users/userActions";
import { loadTodo } from "../../store/todos/todoAcrions";
import { NewTodo } from "../NewTodo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadTodo());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <NewTodo />
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserList } from "../UserList";
import { TodoList } from "../TodoList";
import "./App.css";
import { loadUser } from "../../store/users/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;

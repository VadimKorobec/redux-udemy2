import { useSelector } from "react-redux";

export const UserList = () => {
  const users = useSelector((state) => state.users);
  return <h2>Users List {users.length}</h2>;
};

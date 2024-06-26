import { client } from "../../api/imdex";

export const ADD_TODOS = "todos/ADD_TODOS";
export const SET_LOADING = "todos/SET_LOADING";
export const SET_ERROR = "todos/SET_ERROR";
export const ADD_TODO = "todos/ADD_TODO";

const addTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
});

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadTodo = () => (dispatch) => {
  dispatch(setLoading());
  client
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((data) => dispatch(addTodos(data)))
    .catch((error) => dispatch(setError(error)));
};

export const createTodo = (title) => (dispatch) => {
  client
    .post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
      userId: 1,
    })
    .then((newTodo) => dispatch(addTodo(newTodo)))
    .catch((error) => dispatch(setError(error)));
};

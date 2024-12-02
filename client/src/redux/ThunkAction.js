import { loadTodo } from "./TodoSlice";
import axios from "axios";
export function callAPITodo() {
  return async (dispatch) => {
    try {
      const reponse = await axios.get(
        "https://674015eed0b59228b7ee9a9f.mockapi.io/users"
      );
      console.log(reponse);
      dispatch(loadTodo(reponse.data));
    } catch (error) {}
  };
}

import React from "react";
import List from "./todo/List";
import FormAdd from "./todo/FormAdd";
import TodoContext from "./todo/contexts/Context";

export default function Todo() {
  const initTodos = [
    {
      id: 1,
      name: "ReactJs",
    },
    {
      id: 2,
      name: "NodeJs",
    },
    {
      id: 3,
      name: "AngularJs",
    },
  ];
  const [todos, dispatch] = React.useReducer(reducer, initTodos);
  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        if (action.text) {
          return [
            ...state,
            {
              id: state.length + 1,
              name: action.text,
            },
          ];
        }
        return state;
      case "Edit":
        console.log("Edit");
        return [];
      case "Remove":
        console.log("Delete");
        return state.filter((todo) => todo.id !== action.id);
      default:
        break;
    }
  }

  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
      <h1>List Todos</h1>
        <FormAdd />
          <List />
      </TodoContext.Provider>
    </>
  );
}

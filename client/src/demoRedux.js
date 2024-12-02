console.log("demo Redux");

import { createStore } from "redux";

const initState = [
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

function reducer(state = initState, action) {
  switch (action.type) {
    case "add":
      return [...state, { name: action.text, id: state.length + 1 }];
    case "delete":
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);


export default store;

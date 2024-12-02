import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/TodoSlice';
export default function FormAdd() {
    const [text, setText] = React.useState("");
  let dispatch = useDispatch();
  return (
    <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
    <input
      onChange={(e) => setText(e.target.value)}
      type="text"
      value={text}
      placeholder="Add new..."
      className="w-full outline-none bg-transparent text-gray-600 text-sm"
    />
    <button
      onClick={() => {
        if (text) {
          dispatch(addTodo(text));
          setText("");
        }
      }}
      type="submit"
    >
      Add
    </button>
  </div>
  )
}

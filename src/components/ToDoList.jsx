import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-green-500 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-5 text-center text-white">
          Todo List
        </h1>
        <div className="w-full flex gap-1 my-2">
          <input
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={handleChange}
            className="w-[80%] p-3  border border-gray-300 rounded outline-none"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white  p-3 rounded w-[20%]"
          >
            Add
          </button>
        </div>
        <ol className=" flex flex-col gap-2">
          {todos.map((todo, index) => (
            <li className="flex gap-1 justify-between" key={index}>
              <span className=" w-[80%] bg-yellow-500 p-3 text-white rounded-sm">
                {todo}
              </span>
              <button
                className="w-[20%] bg-red-500 text-white  p-3 rounded"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;

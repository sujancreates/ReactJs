import React, { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
  const [newTask, setNewTask] = useState('');

  // Handle task input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add new task to the list
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Remove a task
  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto m-16">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
      <div className="mb-4">
        <input
          type="text"
          className="p-2 w-full border border-gray-300 rounded bg-gray-800 text-gray-100 bg-white text-gray-900"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
          onClick={addTask}
        >   
          Add Task
        </button>
          </div>

      {/* To-Do List */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded border bg-gray-800 text-gray-100 bg-white text-gray-900 ${
              todo.completed ? 'bg-green-200' : 'bg-gray-200'
            }`}
          >
            <span
              className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleTaskCompletion(index)}
            >
              {todo.text}
            </span>
            <button
              className="text-red-500 ml-2"
              onClick={() => removeTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

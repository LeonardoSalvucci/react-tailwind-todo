import { useState } from "react";
export default function ({ onAdd }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.length > 0) {
      onAdd({ task, done: false });
      setTask("");
    }
  };

  return (
    <div className="flex items-center">
      <input
        className="flex-1 border-2 rounded-l-md border-blue-500 p-3 "
        type="text"
        placeholder="Add a task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button
        type="button"
        className="border-2 rounded-r-md border-blue-500 text-white bg-blue-500 w-11 h-full text-3xl flex items-center justify-center"
        onClick={handleAdd}
      >
        <span className="material-symbols-outlined font-bold hover:scale-125 transition">
          add
        </span>
      </button>
    </div>
  );
}

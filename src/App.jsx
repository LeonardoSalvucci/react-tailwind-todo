import React from "react";
import Container from "./components/Container";
import TaskButton from "./components/TaskButton";

function App() {
  return (
    <div className="App flex bg-gradient-to-r from-blue-500 to-teal-200 justify-center items-center h-screen w-screen">
      <Container>
        <div className="flex flex-col flex-1 p-5 items-top gap-5">
          {/* add task */}
          <div className="flex items-center">
            <input
              className="flex-1 border-2 rounded-l-md border-blue-500 p-3 "
              type="text"
              placeholder="Add a task here..."
            />
            <button
              type="button"
              className="border-2 rounded-r-md border-blue-500 text-white bg-blue-500 w-11 h-full text-3xl flex items-center justify-center"
            >
              +
            </button>
          </div>

          {/* tasks items */}
          <div className="bg-sky-100 rounded flex justify-between items-center gap-2 p-3 group hover:cursor-pointer hover:bg-slate-100 transition">
            <span className="flex-1 text-blue-500">learn redux</span>
            <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
              <TaskButton text="+" />
              <TaskButton text="x" />
            </div>
          </div>

          {/* separator */}
          <div className="w-full border border-blue-300"></div>
        </div>
      </Container>
    </div>
  );
}

export default App;

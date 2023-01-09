import React from "react";
import Container from "./components/Container";
import TaskItem from "./components/TaskItem";

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
          <TaskItem task="learn react" />
          <TaskItem task="learn typescript" />

          {/* separator */}
          <div className="w-full border border-blue-300"></div>

          <TaskItem task="learn react" done />
        </div>
      </Container>
    </div>
  );
}

export default App;

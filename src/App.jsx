import React from "react";
import Container from "./components/Container";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App flex bg-gradient-to-r from-blue-500 to-teal-200 justify-center items-center h-screen w-screen">
      <Container>
        <div className="flex flex-col flex-1 p-5 items-top gap-5">
          {/* add task */}
          <AddTask />

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

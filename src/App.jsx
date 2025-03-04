import React from "react";
import AddTask from "./components/Addtask";
import ListTask from "./components/ListTask";

const App = () => {
  return (
    <div>
      <h1>Todo List with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;

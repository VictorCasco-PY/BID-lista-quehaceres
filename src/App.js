import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Task from "./components/Task";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Input list={list} setList={setList} />
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
    </div>
  );
}

export default App;

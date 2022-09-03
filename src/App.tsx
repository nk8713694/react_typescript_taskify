import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "./models/models";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookMouse from "./components/HookMouse";

const App: React.FC = () => {

  return (
    <>
   <HookMouse/>
    </>
  
  );
};

export default App;

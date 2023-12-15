import React from 'react';
import './componentsCss/TodoApp.css'
import TodoList from './components/TodoApp-2';
import { TodoProvider } from './components/TodoApp-1';
function App() {
  return (
    
    <TodoProvider>
    <div>
      <h1>To-Do List Application</h1>
      <TodoList />
    </div>
  </TodoProvider>
  )
}

export default App;

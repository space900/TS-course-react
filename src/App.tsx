import React from 'react';

import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem id="13" title="first todo" completed={false} />
    </div>
  );
}

export default App;

import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import TaskList from './Task/TaskList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
        <h1>To-do list</h1>
        <BrowserRouter>
          <Route path='/' exact component={TaskList} />
        </BrowserRouter>
    </div>

  );
}

export default App;
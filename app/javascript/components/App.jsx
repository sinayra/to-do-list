import React from 'react';

import Home from '../components/Home'
import Task from '../components/Task'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/task' component={Task} />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
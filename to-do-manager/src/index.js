import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App }  from './App/App';

import { TodoProvider } from './App/ToDoContext/ToDoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
import React from 'react';
import TodoList from './TodoList';
import { Provider } from 'react-redux'; 
import store from './Store/store'
import './index.css';

const App = () => {
  return (
    <Provider store={store}>      
    <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

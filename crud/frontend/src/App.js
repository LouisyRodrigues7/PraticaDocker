import React from 'react';
import ItemList from './components/ItemList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <h1>CRUD com React e Node.js</h1>
      <ItemList />
    </div>
  );
}

export default App;
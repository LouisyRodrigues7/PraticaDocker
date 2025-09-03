import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ onItemAdded }) => {
  const [newItem, setNewItem] = useState('');

  const addItem = async () => {
    try {
      await axios.post('http://localhost:5000/items', { name: newItem });
      setNewItem('');
      onItemAdded();
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Digite o nome do item"
      />
      <button onClick={addItem}>Adicionar Item</button>
    </div>
  );
};

export default ItemForm;
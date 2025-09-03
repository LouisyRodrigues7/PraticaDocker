import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  return (
    <div>
      <ItemForm onItemAdded={fetchItems} />
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} <button onClick={() => deleteItem(item._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
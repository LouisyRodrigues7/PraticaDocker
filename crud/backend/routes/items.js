const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Definição do esquema e modelo do MongoDB
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// Rota para buscar todos os itens
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens' });
  }
});

// Rota para criar um novo item
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar item' });
  }
});

// Rota para deletar um item pelo ID
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar item' });
  }
});

module.exports = router;
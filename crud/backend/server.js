const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRoutes = require('./routes/items');

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose
  .connect('mongodb://db:27017/crud-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/items', itemsRoutes);

// Inicialização do servidor
app.listen(5000, () => console.log('Back-end rodando na porta 5000'));
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Projeto_fafa';

mongoose.connect(mongoURI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("User", userSchema);
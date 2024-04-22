const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3000;

app.use(express.json());

app.use(cors());

const routes = require('./routes/userRoutes');

app.use('/static', express.static(path.join(__dirname, 'static')));



app.use('/users', routes);

app.get('/login', (req, res) => {
    console.log('Acessando a página de login'); 
    res.sendFile(path.join(__dirname, 'static', 'templates', 'login.html'));
});
app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta: ${PORT}/login`);
});
const express = require('express');
const app = express();

const PORT = 3000;


const routes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', routes);


app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta: ${PORT}`);
});
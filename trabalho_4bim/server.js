const express = require("express");

const allRoutes = require('./routes/allRoutes.js')


const app = express();
     app.use(express.json())


app.listen(3000, 'localhost', () => {
     console.log("Servidor em funcionamento :3 \nPorta: 3000 \nAwaiting requests...");
})

app.use('/api', allRoutes); // Precisa vir depois do app.listen [inicialização]
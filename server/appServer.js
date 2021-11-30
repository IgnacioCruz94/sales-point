// Modules
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/router');
const cors = require('cors');


// Middleware to parse body
app.use(express.json());

// Databases connection
const initializationDb = require('./connectionDB/connectionMongoDb');
initializationDb.initDataBases();

// Define routes
app.use(routes);
app.use(cors());

app.use((req, res) => {
  res.status(404).json({
    message: 'Resource not found.',
  });
});

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})
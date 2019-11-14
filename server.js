import express from 'express';
import createTable from './api/models/tables'

const app = express();

const PORT = 8000;


app.get('/', (req, res) => {
    return res.send('The API is working');
});

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
});
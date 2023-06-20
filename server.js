const express = require('express');
const app = express();
const cors = require('cors');
const projectsRoutes = require('./routes/projectsRoutes');
const itemsRoutes = require('./routes/itemsRoutes');

app.use(cors());
app.use(express.json());
app.use('/', projectsRoutes)
app.use('/', itemsRoutes)



app.listen(8080, () => {
    console.log('server has starteed')
})
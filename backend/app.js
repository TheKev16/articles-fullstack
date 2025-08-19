const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/author');
const articleRouter = require('./routes/article');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/articlesDB')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Rutas
app.use('/', indexRouter);
app.use('/author', authorRouter);
app.use('/articles', articleRouter);

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

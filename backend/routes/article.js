const express = require('express');
const router = express.Router();
const Article = require('../models/mdlArticle');

// Obtener todos
router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.status(200).json({
      status_code: 200,
      status_message: 'Ok',
      data: articles.length ? articles : { articles: 'List is empty' }
    });
  } catch (err) {
    next(err);
  }
});

// Obtener por ID
router.get('/:id', async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
      status_code: 200,
      status_message: 'Ok',
      data: article ? article : { articles: 'Not found' }
    });
  } catch (err) {
    next(err);
  }
});

// Crear
router.post('/', async (req, res, next) => {
  try {
    const arti = new Article(req.body);
    await arti.save();
    res.status(201).json({
      status_code: 201,
      status_message: 'Data was created',
      data: arti
    });
  } catch (err) {
    next(err);
  }
});

// Actualizar
router.put('/', async (req, res, next) => {
  try {
    await Article.updateOne({ _id: req.body.id }, { $set: req.body });
    res.status(200).json({
      status_code: 200,
      status_message: 'Ok',
      data: 'Record updated'
    });
  } catch (err) {
    next(err);
  }
});

// Eliminar
router.delete('/', async (req, res, next) => {
  try {
    await Article.deleteOne({ _id: req.body.id });
    res.status(200).json({
      status_code: 200,
      status_message: 'Ok',
      data: 'Record deleted'
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

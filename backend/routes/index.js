const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status_code: 200,
    status_message: 'Ok',
    data: {
      title: 'Express articles....!',
      description: 'An example to register text like newspaper articles'
    }
  });
});

module.exports = router;

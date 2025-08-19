const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status_code: 200,
    status_message: 'Ok',
    data: {
      name: 'Kevin Vera',
      nickname: 'TheKev',
      occupation: 'IT Student'
    }
  });
});

module.exports = router;

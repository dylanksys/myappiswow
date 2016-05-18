var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/homewow', function(req, res) {
  res.send('Path: /homewow');
};

router.get('/aboutwow', function(req, res) {
  res.send('Path: /aboutwow');
};

router.get('/contactwow', function(req, res) {
  res.send('Path: /contactwow');
};

module.exports = router;

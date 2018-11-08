const router = require('express').Router();

const {
  authentication,
  authorization,
} = require('../middleware');

const {
  createData,
  getData,
  getDataById,
  updateData,
  removeData,
} = require('../controller');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is live !',
  });
});

router.post('/create', createData);
router.get('/get', authentication, authorization, getData);
router.get('/get-by-id/:id', authentication, authorization, getDataById);
router.put('/put/:id', authentication, authorization, updateData);
router.delete('/remove/:id', authentication, authorization, removeData);

module.exports = router;

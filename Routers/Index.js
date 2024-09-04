
const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/Controllers');

router.get('/', controllers.DefaultController);
router.post('/addData', controllers.AddDataController);
router.get('/editData/:id', controllers.EditDataController)
router.post('/updateData/:id', controllers.UpdatetDataController);
router.get('/deleteData/:id', controllers.DeleteDataController);


module.exports = router;









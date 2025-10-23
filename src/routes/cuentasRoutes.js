
const express = require('express');
const router = express.Router();
const {
  getAllCuentas,
  getCuentaById,
  getCuentasByQuery,
  getCuentasBalance
} = require('../controllers/cuentasController');


router.get('/cuentasBalance', getCuentasBalance);


router.get('/cuentas', getCuentasByQuery);


router.get('/cuenta/:id', getCuentaById);

module.exports = router;
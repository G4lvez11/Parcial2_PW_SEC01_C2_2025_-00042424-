

const express = require('express');
const cuentasRoutes = require('./routes/cuentasRoutes');

const app = express();
const PORT = 3130;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    message: 'API de Cuentas Bancarias',
    endpoints: [
      'GET /cuentas - Obtener todas las cuentas',
      'GET /cuenta/:id - Obtener cuenta por ID',
      'GET /cuentas?id=valor - Buscar por ID',
      'GET /cuentas?name=valor - Buscar por nombre',
      'GET /cuentas?gender=valor - Buscar por género',
      'GET /cuentasBalance - Obtener balance total de cuentas activas'
    ]
  });
});


app.use('/', cuentasRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Endpoints disponibles:`);
  console.log(`   - GET http://localhost:${PORT}/cuentas`);
  console.log(`   - GET http://localhost:${PORT}/cuenta/:id`);
  console.log(`   - GET http://localhost:${PORT}/cuentas?name=valor`);
  console.log(`   - GET http://localhost:${PORT}/cuentasBalance`);
});
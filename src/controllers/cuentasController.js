

const cuentas = require('../data/cuentas');


const parseBalance = (balanceString) => {
  return parseFloat(balanceString.replace(/[$,]/g, ''));
};


const getAllCuentas = (req, res) => {
  try {
    res.json({
      count: cuentas.length,
      data: cuentas
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las cuentas' });
  }
};


const getCuentaById = (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = cuentas.find(c => c.id === id);

    if (cuenta) {
      res.json({
        finded: true,
        account: cuenta
      });
    } else {
      res.json({
        finded: false,
        account: null
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar la cuenta' });
  }
};


const getCuentasByQuery = (req, res) => {
  try {
    
    const queryKeys = Object.keys(req.query);
    
    if (queryKeys.length === 0) {
      return res.json({
        count: cuentas.length,
        data: cuentas
      });
    }

    const paramName = queryKeys[0];
    const paramValue = req.query[paramName];


    if (paramName === 'id') {
      const cuenta = cuentas.find(c => c.id === paramValue);
      if (cuenta) {
        return res.json({
          finded: true,
          account: cuenta
        });
      } else {
        return res.json({
          finded: false
        });
      }
    }

   
    if (paramName === 'name' || paramName === 'nombre') {
      const cuentasEncontradas = cuentas.filter(c => 
        c.name.toLowerCase().includes(paramValue.toLowerCase())
      );
      
      if (cuentasEncontradas.length === 1) {
        return res.json({
          finded: true,
          account: cuentasEncontradas[0]
        });
      } else if (cuentasEncontradas.length > 1) {
        return res.json({
          finded: true,
          data: cuentasEncontradas
        });
      } else {
        return res.json({
          finded: false
        });
      }
    }

    if (paramName === 'gender' || paramName === 'genero') {
      const cuentasEncontradas = cuentas.filter(c => 
        c.gender.toLowerCase() === paramValue.toLowerCase()
      );
      
      if (cuentasEncontradas.length === 1) {
        return res.json({
          finded: true,
          account: cuentasEncontradas[0]
        });
      } else if (cuentasEncontradas.length > 1) {
        return res.json({
          finded: true,
          data: cuentasEncontradas
        });
      } else {
        return res.json({
          finded: false
        });
      }
    }


    res.json({
      finded: false,
      message: 'Parámetro de búsqueda no válido. Use: id, name o gender'
    });

  } catch (error) {
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
};


const getCuentasBalance = (req, res) => {
  try {
    const cuentasActivas = cuentas.filter(c => c.isActive === true);
    
    if (cuentasActivas.length === 0) {
      return res.json({
        status: false,
        accountBalance: 0,
        message: 'No hay cuentas activas'
      });
    }

    const totalBalance = cuentasActivas.reduce((sum, cuenta) => {
      return sum + parseBalance(cuenta.balance);
    }, 0);

    res.json({
      status: true,
      accountBalance: totalBalance.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al calcular el balance' });
  }
};

module.exports = {
  getAllCuentas,
  getCuentaById,
  getCuentasByQuery,
  getCuentasBalance
};
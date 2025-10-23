# Examen Práctico II - Programación Web

API REST de Cuentas Bancarias desarrollada con Node.js y Express.

## Instalación

npm install

## Ejecutar el proyecto

npm run dev

El servidor correrá en: http://localhost:3130

## Endpoints Disponibles

### 1. Obtener todas las cuentas
- GET /cuentas
- Respuesta: count y data con array de cuentas

### 2. Obtener cuenta por ID
- GET /cuenta/:id
- Ejemplo: /cuenta/1
- Respuesta: finded y account

### 3. Buscar cuentas por query params
- GET /cuentas?id=1
- GET /cuentas?name=María
- GET /cuentas?gender=female

### 4. Obtener balance total
- GET /cuentasBalance
- Respuesta: status y accountBalance

## Tecnologías Utilizadas

- Node.js
- Express.js
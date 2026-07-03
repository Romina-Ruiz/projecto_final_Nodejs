# CRUD Node.js - Proyecto Final Talento Tech

API REST básica para administrar productos usando Node.js, Express y Firebase Firestore.

## Descripción

Este proyecto es un backend CRUD de productos desarrollado como trabajo final para el curso de Talento Tech. Permite crear, leer, actualizar y eliminar productos a través de rutas HTTP REST.

## Tecnologías

- Node.js
- Express
- Firebase Firestore
- CORS
- dotenv
- ECMAScript Modules (`type": "module"`)

## Instalación

1. Clona el repositorio.
2. Ingresa a la carpeta del proyecto:

```bash
cd proyecto_final_Nodejs
```

3. Instala dependencias:

```bash
npm install
```
```bash
npm i express
```
```bash
npm i dotenv
```
```bash
npm i cors
```
```bash
npm i firebase
```
```bash
npm i jsonwebtoken
```

4. Crea un archivo `.env` con las variables necesarias para Firebase y el puerto si lo deseas.

5. Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

## Uso

El servidor corre por defecto en `http://localhost:3001`.

Rutas principales disponibles:

- `GET /api/products` - listar todos los productos
- `GET /api/products/:id` - obtener un producto por su id
- `POST /api/products` - crear un producto
- `PUT /api/products/:id` - actualizar un producto
- `DELETE /api/products/:id` - eliminar un producto

### Ejemplo de cuerpo para crear producto

```json
{
  "title": "Polar Usuhaia",
  "description": "Blanco con escudo de mayo en la espalda.",
  "price": 80000,
  "stock": 10
}
```

## Estructura del proyecto

- `index.js` - punto de entrada de la aplicación
- `src/routes/` - definición de rutas
- `src/controllers/` - lógica de controladores
- `src/models/` - conexión y operaciones con Firestore
- `src/middlewares/` - middlewares personalizados

## Notas

- El middleware `auth` está configurado como un placeholder que permite todas las solicitudes. Debe extenderse si se desea control de autenticación real.
- Para consultas `POST` y `PUT`, el controlador requiere todos los campos: `title`, `description`, `price` y `stock`.

## Autor

- Romina Ruiz

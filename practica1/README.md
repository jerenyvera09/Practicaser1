
#  Practica 1  API REST con NestJS, TypeORM y SQLite

Este proyecto corresponde a la Práctica 1 de la materia Aplicaciones para el Servidor Web. Se ha desarrollado una API REST usando el framework NestJS con conexión a base de datos SQLite, estructurada de forma modular y aplicando buenas prácticas como validaciones, manejo de errores y uso del patrón repositorio.

##  Descripción del Proyecto

La API incluye 3 módulos (entidades) desarrollados desde cero:

-  Receptor  Gestión de personas que reciben ayudas o donaciones
-  Solicitud  Registro de solicitudes realizadas por receptores
-  Entrega  Registro de entregas realizadas como respuesta a las solicitudes

Cada entidad cuenta con:

- Su propio módulo, controlador, servicio, DTOs y entidad
- Validaciones usando class-validator
- CRUD completo (Create, Read, Update, Delete)
- Pruebas realizadas en Postman

##  Tecnologías Usadas

- NestJS (framework principal)
- TypeORM (ORM para base de datos)
- SQLite (base de datos ligera)
- class-validator y class-transformer (validación de datos)
- Postman (para pruebas de endpoints)

##  Estructura del Proyecto

```
src/
│
├── receptor/
│   ├── dto/
│   ├── entities/
│   ├── receptor.controller.ts
│   ├── receptor.service.ts
│   └── receptor.module.ts
│
├── solicitud/
│   ├── dto/
│   ├── entities/
│   ├── solicitud.controller.ts
│   ├── solicitud.service.ts
│   └── solicitud.module.ts
│
├── entrega/
│   ├── dto/
│   ├── entities/
│   ├── entrega.controller.ts
│   ├── entrega.service.ts
│   └── entrega.module.ts
│
├── app.module.ts
└── main.ts
```

##  Instrucciones para Ejecutar el Proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/practica1.git
cd practica1
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor NestJS:

```bash
npm run start:dev
```

4. La API estará disponible en:

```
http://localhost:3000/api/v1
```

##  Endpoints Disponibles

Cada módulo tiene los siguientes 5 endpoints:

✔ POST
✔ GET (todos)
✔ GET por ID
✔ PATCH
✔ DELETE

Total: 3 módulos × 5 endpoints = 15 endpoints RESTful.

Ejemplos de endpoints:

- POST    /api/v1/receptor
- GET     /api/v1/solicitud
- PATCH   /api/v1/entrega/:id
- DELETE  /api/v1/solicitud/:id

##  Pruebas con Postman

Se adjunta una colección de Postman con los 15 endpoints probados, incluyendo:

- Inserción de 4 registros por entidad
- Validaciones y errores
- Actualización y eliminación

(Agrega aquí el nombre del archivo .json si lo exportas: /postman/practica1-collection.json)

##  Consideraciones Técnicas

- Se utilizó ValidationPipe global en main.ts
- Cada DTO incluye validaciones específicas
- Se lanzó NotFoundException en update y remove cuando no se encontró la entidad
- Se usó el patrón repositorio con @InjectRepository en todos los servicios
- Se estableció un prefijo de API: /api/v1

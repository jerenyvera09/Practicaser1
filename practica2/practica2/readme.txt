# Práctica 2 - API GraphQL con NestJS

Este proyecto corresponde a la Práctica 2 de la asignatura "Aplicaciones para el Servidor Web" (Carrera de Software, 5to Nivel, paralelo A). El objetivo es implementar una API GraphQL utilizando NestJS, basada en una arquitectura por capas.

## Tema del proyecto

Sistema de gestion de entregas solidarias.

Se implementan tres entidades:
- **Receptor**: persona que recibe una ayuda o donación.
- **Solicitud**: solicitud de ayuda hecha por un receptor.
- **Entrega**: entrega realizada en respuesta a una solicitud.

---

## Tecnologías utilizadas

- NestJS
- GraphQL (code first)
- TypeORM
- SQLite
- Class-validator
- Node.js

---

## Estructura del proyecto

El proyecto sigue una arquitectura por capas:

- `entities/`: definición del modelo de datos (decoradores de TypeORM y GraphQL).
- `dto/`: definición de los datos de entrada y validación con class-validator.
- `service.ts`: lógica de negocio (CRUD).
- `resolver.ts`: exposición de la lógica mediante GraphQL (@Query y @Mutation).

Cada entidad tiene su propio módulo con las capas completas.

---

## Instalación del proyecto

1. Clonar el repositorio:

```bash
git clone <https://github.com/jerenyvera09/Practicaser1.git>
cd practica2
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear el archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DATABASE=test.sqlite
```

---

## Ejecución del proyecto

1. Ejecutar el servidor en modo desarrollo:

```bash
npm run start:dev
```

2. Acceder al Playground de GraphQL:

```
http://localhost:3000/graphql
```

Desde ahí puedes ejecutar queries y mutations para probar cada entidad.

---

## Operaciones disponibles por entidad

### Receptor
- createReceptor
- findAll (receptores)
- findOne (receptor)
- updateReceptor
- removeReceptor

### Solicitud
- createSolicitud
- findAll (solicitudes)
- findOne (solicitud)
- updateSolicitud
- removeSolicitud

### Entrega
- createEntrega
- findAll (entregas)
- findOne (entrega)
- updateEntrega
- removeEntrega

---

## Notas finales

- Este proyecto fue desarrollado con fines académicos como parte de la práctica 2.
- Se hizo uso de las herramientas proporcionadas por el docente y se siguió la estructura del ejemplo base.
- Se probaron todas las funcionalidades usando el Playground de GraphQL.

---

Desarrollado por: [Jereny Vera Mero "B"]  
Materia: Aplicaciones para el Servidor Web  
Docente: Ing. John Cevallos  
Fecha: 2 de julio de 2025

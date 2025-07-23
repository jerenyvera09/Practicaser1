# Proyecto de Donación - Microservicio Solicitud y API Gateway

## Integrantes del Grupo

- Jereny vera
- Andres Garcia
  Jordy Franco

## Descripción General

Este proyecto implementa una arquitectura de microservicios usando NestJS y NATS. Incluye:

- Un API Gateway que expone endpoints HTTP y enruta las peticiones a los microservicios.
- Un microservicio independiente para la entidad `solicitud` (puedes agregar otros microservicios según tu grupo).

## Instrucciones de Ejecución

### 1. Clonar el repositorio

```sh
git clone <URL_DE_TU_REPOSITORIO>
cd <nombre_del_proyecto>
```

### 2. Instalar dependencias

```sh
npm install
```

### 3. Configurar variables de entorno

Asegúrate de tener el archivo `.env` en la raíz del gateway y de cada microservicio. Ejemplo para gateway:

```
PORT=3000
NATS_URL=nats://127.0.0.1:4222
```

### 4. Levantar el servidor NATS

Descarga el ejecutable de NATS desde https://docs.nats.io/running-a-nats-service/introduction y ejecuta:

```sh
nats-server
```

### 5. Levantar el API Gateway

```sh
npm run start
```

### 6. Levantar el microservicio de solicitud

En otra terminal, navega a la carpeta del microservicio y ejecuta:

```sh
npm install
npm run start
```

## Pruebas y Evidencias

Puedes probar los endpoints HTTP del Gateway usando Postman o cURL. Ejemplo de endpoints:

- `POST http://localhost:3000/api/solicitud`
- `GET http://localhost:3000/api/solicitud`
- `GET http://localhost:3000/api/solicitud/:id`
- `PATCH http://localhost:3000/api/solicitud/:id`
- `DELETE http://localhost:3000/api/solicitud/:id`

_Agrega aquí capturas de pantalla de las pruebas exitosas en Postman_

## Conclusiones Individuales

_Agrega aquí tu reflexión personal sobre los desafíos, ventajas y aprendizajes de la arquitectura de microservicios con NestJS y NATS._

---

> Recuerda que para la calificación, tu repositorio debe contener el Gateway, el microservicio y este README completo con evidencias y conclusiones.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install#
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Deployment

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

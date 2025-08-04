# Examen Segundo Parcial - Backend Modular con NestJS

## Descripción General

Este proyecto implementa la arquitectura backend para una aplicación de gestión de personas, siguiendo los requisitos del examen de la ULEAM. El backend está dividido en tres módulos independientes, cada uno utilizando una tecnología diferente para exponer los recursos:

- **proyecto-rest**: API RESTful con NestJS y TypeORM
- **proyecto-graphql**: API GraphQL con NestJS y TypeORM
- **proyecto-websocket**: API WebSocket con NestJS
- **shared-domain**: Módulo compartido con entidades, DTOs, interfaces, enums y lógica de negocio reutilizable

## Estructura del Proyecto

```
examen/
├── proyecto-rest/
├── proyecto-graphql/
├── proyecto-websocket/
└── shared-domain/
```

### 1. Definición del Modelo, Servicios y Persistencia

- Todas las entidades necesarias (`Persona`, `TipoUsuario`, etc.) están definidas en el módulo `shared-domain`.
- Los DTOs incluyen validaciones estrictas usando `class-validator`.
- Los servicios gestionan la lógica de negocio y la persistencia de datos usando TypeORM.
- Cada proyecto importa y utiliza el modelo, DTOs y servicios desde el módulo compartido.

### 2. Implementación del Backend por Recurso

- **REST**: Endpoints CRUD para personas y tipos de usuario, validación de datos y persistencia.
- **GraphQL**: Queries y Mutations para personas, validación de datos con `ValidationPipe` y persistencia.
- **WebSocket**: Comunicación en tiempo real para operaciones sobre personas, validación y persistencia.
- Cada backend está listo para ser consumido por un frontend.

### 3. Reutilización del Dominio como Módulo Compartido

- El módulo `shared-domain` contiene entidades, DTOs, interfaces, enums y lógica de negocio reutilizable.
- Este módulo se importa en los tres proyectos, garantizando un único núcleo de dominio y evitando duplicidad de código.
- La arquitectura modular promueve la escalabilidad y la claridad.

## Integración del Módulo Compartido

Para integrar el módulo `shared-domain` en cada proyecto:

1. Importa las entidades, DTOs, interfaces y enums desde `shared-domain/src`.
2. Utiliza los DTOs y entidades en los servicios, controladores, resolvers y sockets de cada proyecto.
3. Aplica las validaciones y lógica de negocio definida en el módulo compartido.

## Requisitos Técnicos

- TypeScript y NestJS en todos los módulos
- Decoradores habilitados en la configuración de TypeScript (`experimentalDecorators`, `emitDecoratorMetadata`)
- Paquetes necesarios instalados: `class-validator`, `class-transformer`, `@nestjs/core`, `@nestjs/graphql`, `@nestjs/websockets`, `@nestjs/typeorm`, `typeorm`, etc.

## Observaciones

- El backend está completamente modularizado y listo para ser consumido por cualquier frontend.
- La validación de datos es estricta y uniforme en todos los recursos.
- El módulo compartido garantiza la reutilización y la consistencia del dominio.

---

**Autor:** jereny vera
**Fecha:** 4 de agosto de 2025
**Examen ULEAM - Backend Modular**


# Examen Parcial - Aplicaciones para el Servidor Web

##  Descripción General
Este proyecto implementa una **API REST con Arquitectura Limpia** que soporta múltiples tipos de datasource:

-  **Memory** (en memoria)
-  **Prisma** (PostgreSQL)
-  **TypeORM** (PostgreSQL)

Todo el proyecto original fue adaptado para trabajar con nuestras **propias entidades** en lugar de la entidad `Todo`.

##  Entidades Personalizadas
Se reemplazó completamente la lógica de `Todo` por estas entidades:
- `AreaResponsable`
- `Donacion`
- `Prioridad`
- `Recepcion`
- `TipoDonacion`

Cada entidad cuenta con:
- Entidad (`.entity.ts`)
- DTO (`.dto.ts`)
- Casos de uso (`create`, `update`, `delete`, `get-all`, `get-by-id`)
- Datasource (para memory, prisma y typeorm)
- Repositorio
- Controlador
- Rutas (`routes.ts`, `routes.memory.ts`)

##  Modos de ejecución

###  Memory (sin base de datos)
```bash
npm install
npm run dev:memory
```
 Se ejecuta sin necesidad de Docker ni PostgreSQL.

###  Prisma (con base de datos PostgreSQL)
```bash
# Asegúrate de tener el archivo .env configurado con:
# DATASOURCE_TYPE=PRISMA
docker-compose up -d
npm run prisma:migrate:prod
npm run dev:prisma
```

###  TypeORM (con base de datos PostgreSQL)
```bash
# Asegúrate de tener el archivo .env configurado con:
# DATASOURCE_TYPE=TYPEORM
docker-compose up -d
npm run dev:typeorm
```

##  Variables de entorno (.env)
```env
PORT=3000
DATASOURCE_TYPE=MEMORY

# Para PRISMA o TYPEORM
POSTGRES_URL=postgresql://postgres:jeremy2023@@localhost:5432/modulo2_db
POSTGRES_USER=postgres
POSTGRES_DB=modulo2_db
POSTGRES_PASSWORD=jeremy2023@
```

##  Estructura de Carpetas

```
clean/
├── domain/
│   ├── entities/
│   ├── dtos/
│   ├── repositories/
│   ├── datasources/
│   └── use-cases/
├── infrastructure/
│   ├── datasource/
│   └── repositories/
├── presentation/
│   ├── controllers/
│   ├── routes/
│   └── app.ts
├── prisma/ | typeorm/
├── public/
├── memory-datasource.http
└── .env
```

##  Cómo se implementó

1. Se extrajo el proyecto original del docente (`Examen4-main.zip`).
2. Se reemplazó la lógica de `Todo` por nuestras entidades personalizadas.
3. Se reescribió toda la capa de dominio, infraestructura y presentación.
4. Se adaptaron los controladores y rutas al nuevo dominio.
5. Se mantuvo la arquitectura limpia y soporte completo para los tres datasources.
6. Se configuró `.env` y scripts de ejecución.
7. Se probó el funcionamiento de todos los modos (`memory`, `prisma`, `typeorm`).

##  Autor: Estudiante (Jereny Vera Mero 5"A")
Materia: Aplicaciones para el Servidor Web  
Evaluación: Examen Parcial (9 de junio de 2025)

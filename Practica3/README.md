# 📦 Práctica 3 - Sistema de Donaciones (WebSockets con NestJS + TypeORM)

Este proyecto implementa un sistema para gestionar receptores, solicitudes y entregas de donaciones, usando **NestJS**, **TypeORM**, **SQLite** y **WebSockets**. Está basado en lo requerido por la Práctica 3 del curso.

---

## ⚙️ Instalación del proyecto

1. Clonar el repositorio o descomprimir el ZIP entregado.
2. Abrir la terminal en la raíz del proyecto.
3. Instalar las dependencias:

```bash
npm install
```

---

## 🚀 Ejecutar el servidor

Para iniciar el servidor en modo desarrollo (watch):

```bash
npm run start:dev
```

El servidor quedará activo en:

```
http://localhost:3000
```

---

## 📡 Comunicación WebSocket

Se utiliza **Socket.IO**. Cada entidad tiene eventos específicos para comunicarse desde el cliente (ej. Postman, front).

### Configuración básica en Postman:

1. Seleccionar tipo `Socket.IO`.
2. URL: `ws://localhost:3000`
3. Header:
   - `authentication`: `mi-token-prueba` (si se desea simular token)

---

## 🧪 Eventos disponibles por entidad

### 🔹 Receptor

| Evento WebSocket  | Acción                     |
| ----------------- | -------------------------- |
| `createReceptor`  | Crear nuevo receptor       |
| `findAllReceptor` | Obtener todos los datos    |
| `findOneReceptor` | Buscar receptor por ID     |
| `updateReceptor`  | Actualizar receptor        |
| `removeReceptor`  | Eliminar receptor          |
| `receptorCreated` | Emitido tras creación      |
| `receptorUpdated` | Emitido tras actualización |
| `receptorDeleted` | Emitido tras eliminación   |

---

### 🔹 Solicitud

| Evento WebSocket   | Acción                     |
| ------------------ | -------------------------- |
| `createSolicitud`  | Crear nueva solicitud      |
| `findAllSolicitud` | Obtener todas              |
| `findOneSolicitud` | Buscar por ID              |
| `updateSolicitud`  | Actualizar solicitud       |
| `removeSolicitud`  | Eliminar solicitud         |
| `solicitudCreated` | Emitido tras creación      |
| `solicitudUpdated` | Emitido tras actualización |
| `solicitudDeleted` | Emitido tras eliminación   |

---

### 🔹 Entrega

| Evento WebSocket | Acción                     |
| ---------------- | -------------------------- |
| `createEntrega`  | Crear nueva entrega        |
| `findAllEntrega` | Obtener todas las entregas |
| `findOneEntrega` | Buscar entrega por ID      |
| `updateEntrega`  | Actualizar entrega         |
| `removeEntrega`  | Eliminar entrega           |
| `entregaCreated` | Emitido tras creación      |
| `entregaUpdated` | Emitido tras actualización |
| `entregaDeleted` | Emitido tras eliminación   |

---

## 📁 Base de datos

- Se utiliza **SQLite**
- Archivo generado: `app.db`
- Auto sincronización activa (`synchronize: true` en `app.module.ts`)

---

## 🧪 Validaciones activas

- Se usa `class-validator` y `ValidationPipe` para validar:
  - Strings requeridos
  - Longitud mínima/máxima
  - Formatos (números, fechas, etc.)
- Campos extra no definidos en DTO son rechazados.

---

## ✅ Recomendaciones de prueba

- Usar cliente WebSocket como Postman o una app front que consuma eventos.
- Siempre revisar consola del servidor para mensajes de conexión.

---

## 👤 Autor Jereny Vera Mero "B"

Proyecto generado como parte de la **Práctica 3** - Curso Arquitectura de Software.

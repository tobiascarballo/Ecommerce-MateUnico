# 🧉 Mate Único - Proyecto E-Commerce

Este repositorio contiene el código fuente del proyecto "Mate Único", un sistema de e-commerce completo desarrollado como parte del **Taller de Integración** para la carrera de **Licenciatura en Sistemas de Información** de la UADER - FCYT.

El objetivo del proyecto es desarrollar una aplicación web funcional para la venta minorista de mates y combos, implementando un flujo de compra completo, autenticación de usuarios y un panel de administración.

### 👨‍💻 Integrantes del Equipo

* Carballo Tobías
* Dacuy Santino
* Pereyra Lucrecia

---

## 🛠️ Stack Tecnológico

Este es un proyecto *full-stack* que utiliza las siguientes tecnologías:

* **Front-End:** React (con Vite), JavaScript, HTML5, CSS3.
* **Back-End:** Node.js, Express.
* **Base de Datos:** PostgreSQL.

---

## 🚀 Guía de Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto completo en tu entorno local.

### 1. Prerrequisitos

Asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (que incluye npm)
* [PostgreSQL](https://www.postgresql.org/download/) (el servidor de base de datos)
* [Git](https://git-scm.com/downloads)
* Una herramienta de gestión de BD como **pgAdmin**.

### 2. Base de Datos (PostgreSQL)

1.  Abre pgAdmin y crea una nueva base de datos (ej: `mate-unico`).
2.  Abre la "Query Tool" para esa base de datos.
3.  Copia y pega el script SQL de `(SQL-principal.sql)` para crear todos los dominios, tablas y restricciones.

### 3. Back-End (API) y Front-End

En una terminal, navega a la carpeta `back`:

```bash
# 1. Ir a la carpeta del back-end
cd back

# 2. Instalar dependencias
npm install

# 3. Crear el archivo de variables de entorno .env (ignorado por Git por seguridad)
# Contenido del archivo .env
DB_USER=postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=mate-unico

# 4. Para iniciar el servidor en modo desarrollo
npm run dev

En otra terminal, navega a la carpeta `front`:

# 1. Ir a la carpeta del front-end
cd front

# 2. Instalar TODAS las dependencias
npm install

# 3. Para iniciar el servidor de desarrollo
npm run dev
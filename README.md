# 🧠 Plataforma de Psicología - Gestión de Psicólogos y Pacientes

Bienvenido a la plataforma de Psicología, un sistema diseñado para gestionar psicólogos, pacientes y citas en una aplicación moderna utilizando **React, Vite, Tailwind CSS, Node.js, Express y MongoDB**.

## 🚀 Descripción del Proyecto
Nuestra plataforma está diseñada para **digitalizar y optimizar la gestión psicológica**, permitiendo a los profesionales de la salud mental ofrecer una experiencia más organizada y eficiente. 

### **🔹 Funcionalidades Clave:**
- **Registro y autenticación de psicólogos** con validación de emails permitidos.
- **Gestión de pacientes**, incluyendo historial clínico y notas privadas.
- **Programación y gestión de citas** con notificaciones automáticas.
- **Perfiles de psicólogos** con disponibilidad y especialidades.
- **Interfaz intuitiva y responsiva**, optimizada con **React y Tailwind CSS**.

### **📦 Dependencias Instaladas:**

#### **Frontend:**
- `react` & `react-dom` (Framework y renderizado)
- `react-router-dom` (Navegación y rutas)
- `axios` (Manejo de peticiones HTTP)
- `react-hook-form` (Validación de formularios)
- `tailwindcss` (Diseño moderno y responsivo)

#### **Backend:**
- `express` (Framework para API REST)
- `mongoose` (Modelado de datos en MongoDB)
- `jsonwebtoken` (Autenticación JWT)
- `bcryptjs` (Encriptación de contraseñas)
- `dotenv` (Manejo de variables de entorno)
- `cors` (Permisos entre frontend y backend)

La plataforma está desarrollada con una arquitectura modular, asegurando escalabilidad y facilidad de mantenimiento.

---

## 📦 Instalación y Configuración

### **1️⃣ Clonar el Repositorio**
```sh
git clone https://github.com/Blancadum/TOP.git
cd TOP
```

### **2️⃣ Configurar el Backend**
```sh
cd api
npm install
```
#### 📌 **Configurar las variables de entorno** en `api/.env`:
```env
MONGO_URI=mongodb://localhost:27017/mi-base-de-datos
JWT_SECRET=tu_secreto_super_seguro
PORT=5000
```
#### 🔥 **Iniciar el Backend**
```sh
npm run dev
```
El servidor se ejecutará en `http://localhost:5000`.

---

### **3️⃣ Configurar el Frontend**
```sh
cd ../web
npm install
```
#### 🔥 **Iniciar el Frontend**
```sh
npm run dev
```
El frontend se ejecutará en `http://localhost:5173`.

---

## 🔐 **Autenticación y Roles**
- **Psicólogos** pueden registrarse, iniciar sesión y gestionar pacientes.
- **Lista blanca de emails** restringe el acceso a psicólogos preaprobados.
- **JWT** se usa para manejar sesiones seguras.

---

## 📅 **Gestión de Citas**
- **Psicólogos** pueden crear, ver y gestionar citas con pacientes.
- **MongoDB** almacena toda la información de pacientes y sus consultas.
- **Interfaz de calendario** permite ver citas programadas.

---

## 🛠 **Comandos Útiles**
📌 **Levantar el backend y frontend en paralelo**:
```sh
cd TOP
(cd api && npm run dev) & (cd web && npm run dev)
```

📌 **Revisar logs en caso de errores**:
```sh
cd api
npm run logs
```

---

## 🤝 **Contribución**
Si quieres contribuir a este proyecto:
1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** (`git checkout -b feature-nueva`).
3. **Realiza tus cambios y súbelos** (`git push origin feature-nueva`).
4. **Haz un Pull Request**.

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. ¡Úsalo y modifícalo libremente!

---

🚀 **¡Gracias por tu interés en el proyecto!** Cualquier duda, contáctame blancadum@gmail.com o abre un issue en GitHub. 🎉
Te espero! 


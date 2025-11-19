# Frontend CRUD - Examen Técnico (Angular)

Aplicación desarrollada como parte de un examen técnico para la evaluación de conocimientos en Angular.  
El proyecto consiste en un CRUD completo utilizando la API pública `JSONPlaceholder`, simulando un blog con `posts`, `comments` y `users`.

---

## 🚀 Características

La aplicación permite:

- Listar todos los **posts**
- Consultar un **post individual**
- Ver los **comentarios** relacionados a cada post
- Ver información del **usuario** propietario del post
- Crear nuevos posts
- Editar posts existentes
- Eliminar posts
- Navegación mediante rutas de Angular
- Diseño visual mejorado con Bootstrap

---

## 🧠 Objetivo del Proyecto

El objetivo principal es evaluar:

- Dominio general de Angular CLI  
- Lógica de programación  
- Limpieza y claridad del código  
- Correcta implementación del CRUD utilizando una API real  
- Habilidad para consumir múltiples endpoints relacionados entre sí  

---

## 📡 API Utilizada

Se hace uso de la API pública `https://jsonplaceholder.typicode.com`, que expone los siguientes recursos empleados en el proyecto:

| Acción | Endpoint |
|---|---|
| Obtener todos los posts | `GET /posts` |
| Obtener post por id | `GET /posts/{id}` |
| Obtener comentarios del post | `GET /posts/{id}/comments` |
| Obtener comentarios por filtro | `GET /comments?postId={id}` |
| Crear un post | `POST /posts` |
| Editar un post | `PUT /posts/{id}` |
| Eliminar un post | `DELETE /posts/{id}` |

📌 **Importante:**  
La API simula las operaciones `POST` y `PUT`; no persisten en base de datos, solo devuelven una respuesta mock.

---

## 🧱 Tecnologías Utilizadas

- Angular CLI
- TypeScript
- Bootstrap 5
- HTML5 y CSS3
- RxJS
- JSONPlaceholder API

---

## 📂 Estructura General del Proyecto

```plaintext
src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── models/
 │   ├── pages/
 │   └── app.routes.ts
 └── index.html
```

---

## 🛠 Instalación y Ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Guillermoizalde/PruebaTecnicaFrontend.git
cd nombre-del-proyecto
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
ng serve -o
```

La aplicación se abrirá en:

```
http://localhost:4200/
```

---

## 🎨 Características de Diseño

- Layout responsivo  
- Tarjetas con animación en hover  
- Página principal estilizada con Bootstrap  
- Interfaz minimalista y agradable  

---

## 📌 Relación entre Recursos

- Cada `post` pertenece a un usuario  
- Cada `post` puede tener múltiples comentarios  
- Al navegar al detalle del post se muestra:
  - Información del post
  - Comentarios asociados
  - Datos del usuario propietario

---

## 📦 Estado del Proyecto

✔ Completado según los criterios del examen  
✔ Funcional y navegable  
✔ Código limpio  
✔ Mantenible y extensible

---

## 👤 Autor

Desarrollado por: **José Guillermo Izalde**

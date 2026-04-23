# ![Imagen del logo](./src/assets/icons/duck-icon.png) DuckStore

> Proyecto Frontend – Bootcamp Factoría F5

DuckStore es una web responsive diseñada para practicar y consolidar conocimientos de **HTML5, CSS3, arquitectura modular, responsive design y accesibilidad web**.

Incluye una landing page, un catálogo de productos y páginas de detalle, con un enfoque en diseño limpio, semántica correcta y experiencia de usuario accesible.

![Estado](https://img.shields.io/badge/Estado-Completado-brightgreen)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Jira](https://img.shields.io/badge/Jira-Board-orange)
![Figma](https://img.shields.io/badge/Figma-DesignSystem-purple)

---

## 📑 Tabla de Contenidos

1. [Descripción General](#-descripción-general)
2. [Demostración Visual](#-demostración-visual)
3. [Instalación](#-instalación)
4. [Uso](#-uso)
5. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
6. [Accesibilidad Implementada](#-accesibilidad-implementada)
7. [Mejoras Pendientes (Siguiente Sprint)](#-mejoras-pendientes-siguiente-sprint)
8. [Enlaces](#-enlaces)
9. [Autoras](#-autoras)

---

## 📝 Descripción General

DuckStore es un proyecto frontend desarrollado en el marco del Bootcamp de Factoría F5 & FemCoders.  
Su objetivo es aplicar buenas prácticas de:

- Semántica HTML5
- CSS modular y escalable
- Responsive Design (mobile-first)
- Accesibilidad WCAG 2.1 AA
- Trabajo colaborativo con metodología ágil (Scrum)

El proyecto simula una tienda de patos de goma premium, con:

- **Landing page**
- **Catálogo de productos**
- **Páginas de detalle**
- **Navbar responsive**
- **Componentes reutilizables (cards, badges, botones)**

---

## 🚀 Demostración Visual

![Vista previa de la página contacto en versión escritorio](./src/assets/screenshots/contact-page-desktop.png)

![Vista previa de la página contacto en versión escritorio](./src/assets/screenshots/contact-page-mobile.png)

![Vista previa del menú en versión escritorio](./src/assets/screenshots/navbar-mobile.png)

---

## ⚙️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/SiuzannaVach/DuckStoreF5.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd DuckStoreF5
   ```

3. Abre Visual Studio Code

   ```bash
   code .
   ```

## 🧩 Uso

Una vez abierto el proyecto:

- Navega por la **landing page** para ver la presentación del producto.
- Accede al **catálogo** para explorar los diferentes modelos de patos.
- Entra en cualquier **página de detalle** para ver información ampliada de cada patito disponible.
- Usa el **menú responsive** para moverte entre secciones.

---

## 🛠 Tecnologías Utilizadas

### 🎨 Diseño & Gestión

- **Figma** — Diseño UI/UX y Design System
- **Stitch** — Sistema de componentes
- **Jira** — Gestión ágil del proyecto
- **VS Code** — Entorno de desarrollo
- **Git & GitHub** — Versión de controles

### 💻 Desarrollo

- **HTML5 semántico**
- **CSS3 modular**

---

## 📁 Estructura de Carpetas

```
DuckStoreF5/
│
├── index.html
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── (iconos del proyecto)
│   │   ├── images/
│   │   │   └── (imágenes del catálogo y páginas de detalle)
│   │   └── screenshots/
│   │       └── (capturas usadas en el README)
│   │
│   ├── css/
│   │   ├── catalog.css
│   │   ├── contact.css
│   │   ├── detail-product.css
│   │   ├── footer.css
│   │   ├── landingpage.css
│   │   ├── navbar.css
│   │   ├── reset.css
│   │   └── style.css   ← archivo principal que importa todos los módulos
│   │
│   └── pages/
│       ├── catalog.html
│       ├── contact.html
│       ├── detail-classic-duck.html
│       ├── detail-captain-quack.html
│       ├── detail-astro-duck.html
│       ├── detail-chef-quack.html
│       ├── detail-superhero-duck.html
│       └── detail-zen-master.html
│
└── README.md

```

## 🟦 Accesibilidad Implementada

El proyecto DuckStore incorpora múltiples prácticas alineadas con **WCAG 2.1 AA**, garantizando una experiencia inclusiva y usable para todo tipo de usuarios.

### ✔️ Semántica HTML5 estructurada

- Uso correcto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
- Jerarquía de encabezados coherente, con un `<h1>` por página.

### ✔️ Navegación accesible

- `aria-current="page"` en el enlace activo del menú.
- Menú responsive accesible mediante teclado (tabulación correcta y foco visible).

### ✔️ Textos alternativos adecuados

- Todas las imágenes relevantes incluyen `alt` descriptivo.
- Iconos decorativos marcados con `aria-hidden="true"`.

### ✔️ Contraste de colores revisado

- Paleta evaluada según WCAG 2.1 AA.

### ✔️ Visibilidad del foco

- Estilos de `:focus` y `:focus-visible` implementados.

### ✔️ Responsive accesible

- Diseño fluido sin pérdida de contenido al hacer zoom.
- Imágenes y tarjetas adaptadas a distintos tamaños de pantalla.

### ✔️ Idioma y metadatos

- Todas las páginas declaran correctamente `lang="en"`.
- Metadatos de viewport configurados para accesibilidad móvil.

---

## 🟧 Mejoras Pendientes (Siguiente Sprint)

### 🔸 Accesibilidad

- Añadir `prefers-reduced-motion` para usuarios con sensibilidad al movimiento.
- Revisar contraste en estados interactivos tras añadir JavaScript.
- Mejorar la gestión del foco en elementos dinámicos (menú, overlays, etc.).

### 🔸 JavaScript

Entre otras funciones, implementar un menú hamburguesa completamente accesible:

- Añadir `aria-expanded`.
- Añadir `aria-label` dinámico (“Open menu” / “Close menu”).
- Gestionar el foco al abrir y cerrar el menú.

### 🔸 Funcionalidades adicionales

Hablar con el cliente sobre:

- Posible **formulario de contacto**.
- Validación accesible (`aria-describedby`, roles de error).
- Nuevas secciones o funcionalidades según necesidades del proyecto.

---

## 🔗 Enlaces

- [**GitHub Pages**](https://siuzannavach.github.io/DuckStoreF5/)
- [**Jira del proyecto**](https://aidagarciaf5.atlassian.net/jira/software/projects/DST/boards/1?selectedIssue=DST-79&atlOrigin=eyJpIjoiYjU2ZjM1NWZlOGNlNDkxOWExM2RhOTBkOWJlMmM3ZjYiLCJwIjoiaiJ9)
- [**Figma (Design System + prototipo)**](https://www.figma.com/design/qfpxntI80xDhP2UWs282hR/Sketch--Mockup---Prototype?node-id=0-1&t=ZkgZfaiigTb6EZrP-1)

---

## 👩‍💻 Autoras

- [**Aïda García**](https://github.com/aidag91) — Equipo de desarrollo y Scrum Master
- [**Rukayatu Seidu**](https://github.com/rseidu941-commits) — Equipo de desarrollo
- [**Siuzanna Vachaganian**](https://github.com/SiuzannaVach/) — Equipo de desarrollo y Product Owner

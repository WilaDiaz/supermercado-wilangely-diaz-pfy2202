# Raíz Supermercado — gestión de inventario con React

Proyecto individual para la actividad sumativa de Desarrollo Frontend II (PFY2202). Integra las funcionalidades solicitadas en las semanas 1, 2 y 3.

## Funcionalidades

- Navegación SPA con React Router: inicio, inventario, alta de productos, detalle, carrito y páginas informativas.
- Catálogo inicial de ejemplo con nombre, marca, categoría, precio, formato, descripción y stock.
- Formulario para incorporar productos al estado global de inventario.
- Búsqueda y filtro por categoría sin mutar ni perder el catálogo original.
- Vista de detalle y agregado al carrito con validación de stock.
- Aumento y disminución de cantidades en el carrito; se devuelve o descuenta stock de forma sincronizada.
- Interfaz responsive creada con Tailwind CSS.
- Código separado por contexto, componentes de interfaz y páginas.
- Flujo de GitHub Actions listo para publicar en GitHub Pages al subir cambios a `main`.

## Requisitos

Node.js y npm instalados.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Vite mostrará la dirección local (normalmente http://localhost:5173).

Para generar una versión de producción local:

```bash
npm run build
npm run preview
```

## Publicar

1. Crea en tu cuenta un repositorio público llamado `supermercado-nombre-apellido-siglaCurso`, sustituyendo los segmentos por tus datos reales.
2. Descomprime esta carpeta y abre una terminal dentro de ella. Ejecuta:

```bash
git init
git add .
git commit -m "Desarrolla supermercado con React avanzado"
git branch -M main
git remote add origin https://github.com/USUARIO/supermercado-nombre-apellido-siglaCurso.git
git push -u origin main
```

Cambia `USUARIO` y el nombre del repositorio por los datos reales. En GitHub, entra a **Settings → Pages** y elige **GitHub Actions** como fuente. El workflow incluido compilará y publicará el sitio. Comparte con tu docente la URL del repositorio y del sitio publicado.

## Alcance de los datos

El catálogo inicial es de demostración y el estado vive en memoria mientras la aplicación está abierta; al recargar la página vuelve al inventario inicial. El botón de finalizar compra es demostrativo y no procesa pagos.

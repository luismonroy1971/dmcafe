# DM CAFÉ — Carta Digital

Aplicación web (React + Vite + Tailwind) para mostrar una carta/menú por categorías, con cards de producto e imágenes servidas desde `public/`.

## Requisitos

- Node.js (recomendado: LTS)
- npm

## Instalación

```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Luego abre la URL que aparece en la terminal (por defecto Vite usa `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Los archivos finales se generan en `dist/`.

## Lint

```bash
npm run lint
```

## Estructura del proyecto

- `src/App.jsx`: renderiza el layout y el listado de categorías.
- `src/data/menuData.js`: fuente de datos del menú (categorías y productos).
- `src/components/CategorySection.jsx`: card desplegable por categoría (incluye imagen de categoría).
- `src/components/ProductCard.jsx`: card de producto (incluye imagen del producto).
- `public/`: imágenes accesibles por URL (ej. `/cafe.png`, `/cafeespreso.png`).

## Cómo agregar/actualizar imágenes

1. Copia las imágenes a `public/`.
2. En `src/data/menuData.js`, asigna la ruta en `image` con un path absoluto desde la raíz, por ejemplo:

```js
{ id: "c_1", name: "Espresso", price: "S/ 5.00", image: "/cafeespreso.png" }
```

Si el nombre del archivo tiene caracteres especiales (tildes o `&`), la app ya codifica el URL al renderizar para evitar problemas en el navegador.

## Scripts disponibles

- `npm run dev`: desarrollo (HMR).
- `npm run build`: build de producción.
- `npm run preview`: previsualiza el build localmente.
- `npm run lint`: ejecuta ESLint.

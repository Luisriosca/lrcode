---
title: '¿Cómo crear un blog altamente funcional en 1 hora?'
image: '/blog/urara-blog-template.webp'
created: 2023-25-05
updated: 2023-25-05
tags:
  - 'Coding'
  - 'Proyectos'
  - 'SvelteKit'
  - 'Urara'
---

Crear un blog no tiene por qué ser un proceso complicado y tardado. En este post te enseñaremos cómo puedes crear un blog altamente funcional en tan solo una hora, utilizando algunas herramientas y tecnologías que harán que el proceso sea muy fácil y rápido.

## SvelteKit

SvelteKit es un marco de trabajo para la creación de aplicaciones web que proporciona la capacidad de crear aplicaciones web con enrutamiento incorporado, soporte de servidor y renderizado del lado del servidor. Es una excelente opción para desarrolladores de todos los niveles, ya que es muy fácil de usar y cumple con todas las cualidades imprescindibles para cualquier marco de trabajo de creación de aplicaciones web, incluyendo facilidad de uso, flexibilidad, escalabilidad y compatibilidad con una amplia variedad de herramientas y tecnologías.

Además, SvelteKit se integra muy bien con Tailwind, lo que permite crear una interfaz de usuario atractiva y personalizada sin tener que escribir CSS personalizado.

## Tailwind

Tailwind es un marco de trabajo CSS que proporciona estilos predefinidos y utilidades CSS. Con Tailwind, puedes crear una interfaz de usuario atractiva y personalizada sin escribir CSS personalizado.

## Template utilizado

Para comenzar a construir nuestro blog, utilizaremos el template "Urara Blog Template" de SvelteKit. Este template proporciona una estructura básica para un blog, incluyendo una página de inicio, una página de blog y una página de detalles de publicación.

Para utilizar el template, sigue los siguientes pasos:

1. Clona el repositorio del template usando el siguiente comando:

```
git clone <https://github.com/urara-blog/urara-blog-template.git>

```

2. Accede a la carpeta del proyecto con el siguiente comando:

```
cd urara-blog-template

```

3. Instala las dependencias necesarias con el siguiente comando:

```
npm install

```

4. Ejecuta el servidor de desarrollo con el siguiente comando:

```
npm run dev

```

Es importante recordar instalar pnpm como manejador de archivos antes de ejecutar los comandos anteriores.

## Servicio de hospedaje

Para alojar nuestro sitio web, inicialmente se compró el dominio en HostGator, aunque finalmente se optó por utilizar Netlify debido a sus características de alojamiento de sitios estáticos, integración continua y despliegue continuo.

Para realizar el traspaso con los DNS, se siguió la documentación de HostGator, lo que permitió configurar la redirección a HTTPS en Netlify.

Además, se integró la integración continua (CI) y el despliegue continuo (CD) utilizando GitHub y Netlify. De esta manera, cada vez que se realiza un cambio en el repositorio de GitHub, Netlify reconstruye el sitio y lo despliega automáticamente, lo que facilita enormemente la gestión y el mantenimiento del sitio.

En resumen, con SvelteKit, Tailwind, el template Urara y Netlify, puedes crear un blog altamente funcional en poco tiempo y con muy poco esfuerzo.

¡Esperamos que este post te haya sido útil! Si tienes alguna pregunta o comentario, déjanoslo saber en la sección de comentarios.

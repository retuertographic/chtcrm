# Chat CRM · web de producto

Mini-sitio estático para **Chat CRM by Retuerto Graphic Design**, construido con
el mismo sistema que la web de El Capricho (`retuertographicdesign/capri`):
HTML plano, sin build ni framework, publicable en GitHub Pages.

El contenido está sacado de la presentación *Informe de producto · Afiliados ·
Chat CRM*.

## Estructura

```
index.html                  la página principal (hero, módulos, funcionalidades, argumentos, contacto)
novedades.html              listado de novedades (lee novedades-data.json)
novedades/<slug>.html       cada artículo, con versión ES y EN en el mismo archivo
novedades-data.json         índice de artículos (título, fecha, extracto, imagen)
partials/header.html        cabecera común, inyectada en todas las páginas
partials/footer.html        pie + modal legal (aviso, privacidad, cookies)
assets/site.css             TODO el diseño del sitio (una sola hoja de estilos)
assets/i18n.js              todos los textos, en español e inglés
assets/modules.js           el contenido de los 9 módulos de Chat CRM
assets/site-common.js       comportamiento común (header, menú, idioma, legal, compartir)
img/                        imágenes (de momento vacío: el sitio no depende de ninguna)
```

Diferencia con `capri`: allí el CSS está duplicado (en línea en `index.html` y
en `assets/site.css`). Aquí hay **una sola hoja**, `assets/site.css`, que usan
todas las páginas: se cambia un color y cambia en todo el sitio.

## Cómo se edita

| Quiero cambiar… | Toco… |
|---|---|
| Un texto de la página (hero, secciones, legal) | `assets/i18n.js` |
| Lo que dice un módulo de Chat CRM | `assets/modules.js` |
| Colores, tipografías, espaciados | las variables `:root` de `assets/site.css` |
| El menú o el pie | `partials/header.html` / `partials/footer.html` |
| Email, WhatsApp o formulario de demo | el bloque `SITE_CONFIG` al final de `index.html` |
| Publicar una novedad | añadir la entrada en `novedades-data.json` y copiar un artículo existente en `novedades/` |

Cada texto traducible lleva `data-i18n="clave"` en el HTML; el selector de
idioma sustituye su contenido con el valor de `assets/i18n.js`. Si añades una
clave, añádela **en `es` y en `en`**.

## Configuración pendiente

Antes de publicar hay que rellenar estos huecos (están marcados en el código):

1. **`SITE_CONFIG`** (final de `index.html`):
   - `email`: ahora mismo `info@retuertographicdesign.com` — cambiar si el buzón real es otro.
   - `whatsapp`: número internacional sin signos, p. ej. `34600123456`. Vacío = el botón no se muestra.
   - `demoForm`: URL del formulario de Chat CRM embebido (como los de `crmapi.retuertographicdesign.com`
     que usa la web de El Capricho), una por idioma. Vacío = se muestra un aviso con el email.
2. **Datos fiscales del aviso legal** (`assets/i18n.js`, claves `aviso_p1`):
   ponen `[PENDIENTE]` en el NIF y la dirección porque no los tengo.
3. **CMP de cookies**: `capri` carga Biscotti con su `websiteId`. Aquí no se ha
   incluido ninguno: si se quiere el mismo banner, hay que crear un sitio nuevo
   en Biscotti y pegar su script en el `<head>` de `index.html`, `novedades.html`
   y cada artículo.
4. **Dominio**: si va a un dominio propio (p. ej. `chatcrm.retuertographicdesign.com`),
   añadir un archivo `CNAME` con ese dominio en la raíz y apuntar el DNS a GitHub Pages.

## Publicar

Este repositorio ya es la raíz del sitio (`index.html` está arriba del todo):

1. `Settings → Pages → Source: main / (root)`.
2. A los pocos minutos queda en `https://retuertographic.github.io/chtcrm/`.

No hace falta ningún build, ni npm, ni secretos: son archivos estáticos.

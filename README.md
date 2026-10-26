# Carnicería Rafael — Rafael / El corte

Landing local con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. No necesita instalación, compilación ni servicios externos de aplicación. No se ha desplegado ni se han modificado otros proyectos.

## Dirección visual

Marfil, burdeos, arena, carbón y blanco cálido. Titulación Barlow Condensed y texto Manrope, servidos por Google Fonts con alternativas locales. Composición editorial con fotografía inclinada, cortes oblicuos, teléfono vertical, registro de consultas y contacto claro en forma de ficha. El contenido permanece visible sin JavaScript; los desplegables son HTML nativo. La navegación móvil muestra los enlaces principales sin menú oculto. “Antes de venir” sigue accesible dentro del recorrido y en escritorio.

El concepto “el corte” es exclusivamente gráfico. No afirma técnicas, certificaciones ni especialidades del negocio. Las imágenes no forman un catálogo.

## Investigación — 26 de octubre de 2026

Datos publicados: nombre, actividad general de carnicería, localidad El Bosque (11670, Cádiz) y teléfono +34 653 724 340. El teléfono y la localidad facilitados por el cliente coinciden con fuentes públicas:

- [Waze, ficha de Carnicería Rafael](https://www.waze.com/es/live-map/directions/es/an/el-bosque/carniceria-rafael?to=place.ChIJq3kJzr0TDQ0RtXDpc96tMt4): nombre, localidad y teléfono. Publica horarios, pero no se han incorporado al no contar con confirmación directa actual.
- [Europa Sur, reportaje sobre El Bosque](https://www.europasur.es/noticias-provincia-cadiz/voto-cambio-tanatorio-bosque_0_1793522821.html): testimonio de Rafael como propietario de una carnicería. Respalda la existencia y el contexto comercial; sus horarios históricos no se usan como actuales. No se reproducen sus declaraciones ni su fotografía.
- [Ganadería de Cádiz, ficha del negocio](https://ganaderiadecadiz.com/otro-producto/carniceria-rafael-en-el-bosque/): coincide en localidad y teléfono. Sus afirmaciones genéricas sobre calidad, tradición y reparto no se consideran confirmación suficiente y se han descartado.
- [Mapcarta](https://mapcarta.com/es/N13203309758): actividad de carnicería en El Bosque. No se publican coordenadas ni un marcador.
- [Directorio Carnicería España](https://carniceriaespana.com/c/el-bosque-11/): opiniones de terceros mencionan productos. No se usan como confirmación de una oferta actual ni se reproducen reseñas.

No se ha confirmado una dirección postal exacta, horario vigente, cuentas sociales oficiales, catálogo, precios ni servicios adicionales. Se omiten calle, mapa, WhatsApp, reparto, pedidos, correo, formulario, historia, premios y testimonios. Se invita a llamar para confirmar información práctica. El marcado JSON-LD utiliza LocalBusiness y únicamente datos respaldados. No existe dominio definitivo: no se inventa canonical, URL absoluta ni identidad social. Al publicar en el futuro, configurar la URL absoluta de Open Graph y canonical si procede.

## Fotografías y licencia

No se han encontrado imágenes propias con autorización de uso comprobable. Las dos fotografías descargadas son ilustrativas de archivo y están identificadas como tales junto a las imágenes, en sus textos alternativos y en el pie.

| Archivo | Autor / fuente | Descarga usada | Validación |
| --- | --- | --- | --- |
| `img/producto.jpg` | [Javon Swaby, Pexels 5313882](https://www.pexels.com/photo/raw-meat-on-brown-wooden-chopping-board-5313882/) | https://images.pexels.com/photos/5313882/pexels-photo-5313882.jpeg?auto=compress&cs=tinysrgb&w=1600 | JPEG real, 1600 × 2400, 564230 bytes |
| `img/detalle.jpg` | [Maxi Gagliano, Pexels 4765653](https://www.pexels.com/photo/fresh-meat-on-wooden-chopping-board-4765653/) | https://images.pexels.com/photos/4765653/pexels-photo-4765653.jpeg?auto=compress&cs=tinysrgb&w=1600 | JPEG real, 1600 × 1067, 219029 bytes |

[Licencia Pexels](https://www.pexels.com/license/), consultada el 26/10/2026: permite uso gratuito en webs comerciales y modificaciones; prohíbe sugerir respaldo de personas o marcas. Se acredita a ambos autores voluntariamente. Descargas redimensionadas y comprimidas por el CDN; recorte visual mediante CSS. Sin cambios falsos de extensión. Ambas imágenes se han decodificado con System.Drawing y Chrome. Ninguna pertenece a los proyectos anteriores.

## Comprobaciones ejecutadas

- `node --check js/script.js`: correcto.
- Chrome mediante Playwright disponible en el entorno: 375, 768, 1440 y 1920 px; ancho del documento igual al viewport, imágenes decodificadas y destinos de enlaces internos presentes.
- Capturas completas en los cuatro tamaños; revisión visual de escritorio y móvil.
- Apertura del primer desplegable; navegación móvil al contacto; copia real de `653724340` con mensaje de éxito; ausencia de errores JavaScript.
- `prefers-reduced-motion: reduce`: scroll automático sin animación.
- Enlaces telefónicos con `tel:+34653724340`. No se ejecuta una llamada real.
- El portapapeles tiene alternativa manual seleccionable si la API falla; las interacciones esenciales funcionan sin depender de esa API.
- Revisión visual de las portadas de Chacinas Olmedo, Abacería de Julián, La Despensa de Nerea, Panadería Marchenilla, Panadería El Rescoldo y Miel El Bosque mediante capturas locales. Se han diferenciado composición, familia de titulares, fotografía, contacto y organización. Comparten convenciones básicas de accesibilidad y enlaces estándar. No es una certificación de originalidad absoluta.

La carpeta `.qa/` está excluida y contiene solo evidencias y utilidades locales de revisión; no se necesita para Live Server. Las fuentes externas necesitan red y tienen alternativas locales. No se ha realizado una auditoría automática WCAG completa ni probado lectores de pantalla o dispositivos físicos.

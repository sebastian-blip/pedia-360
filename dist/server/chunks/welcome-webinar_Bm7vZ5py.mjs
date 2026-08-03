import { c as createComponent } from './astro-component_BNqx6DdI.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_Bk-cZdte.mjs';
/* empty css                    */
import { $ as $$MainLayout } from './MainLayout_CLaFu2Ae.mjs';
import { $ as $$Button } from './Button_DNRg9BtK.mjs';

const $$WelcomeWebinar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-shzyt7ui": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="success" data-astro-cid-shzyt7ui> <div class="card" data-astro-cid-shzyt7ui> <div class="icon" data-astro-cid-shzyt7ui>
🎉
</div> <h1 data-astro-cid-shzyt7ui>
¡Tu cupo está reservado!
</h1> <h2 data-astro-cid-shzyt7ui>
Ya estás inscrita en el webinar gratuito
</h2> <p class="title" data-astro-cid-shzyt7ui>
"Entendiendo la barriguita de tu bebé"
</p> <div class="divider" data-astro-cid-shzyt7ui></div> <div class="info" data-astro-cid-shzyt7ui> <div class="info-item" data-astro-cid-shzyt7ui> <span class="emoji" data-astro-cid-shzyt7ui>📩</span> <div data-astro-cid-shzyt7ui> <strong data-astro-cid-shzyt7ui>
Revisa tu correo electrónico
</strong> <p data-astro-cid-shzyt7ui>
Acabamos de enviarte toda la información de acceso.
</p> <small data-astro-cid-shzyt7ui>
Si no encuentras el correo en tu bandeja principal,
            revisa también las carpetas de Promociones,
            Social o Spam.
</small> </div> </div> <div class="info-item" data-astro-cid-shzyt7ui> <span class="emoji" data-astro-cid-shzyt7ui>📅</span> <div data-astro-cid-shzyt7ui> <strong data-astro-cid-shzyt7ui>
Guarda la fecha del webinar
</strong> <p data-astro-cid-shzyt7ui>
Agrégala a tu calendario para no perderte esta clase.
</p> </div> </div> </div> <div class="cta" data-astro-cid-shzyt7ui> ${renderComponent($$result2, "Button", $$Button, { "text": "ÚNETE AL GRUPO DE WHATSAPP", "href": "https://whatsapp.com/channel/0029VbCtYc6IN9ioYfcLjM2t", "variant": "primary", "size": "lg", "data-astro-cid-shzyt7ui": true })} </div> <p class="footer" data-astro-cid-shzyt7ui>
¡Nos vemos pronto! 💜
</p> </div> </section> ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/welcome-webinar.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/welcome-webinar.astro";
const $$url = "/welcome-webinar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WelcomeWebinar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_CourHKez.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_CB7ySg6I.mjs';
import { $ as $$MainLayout } from './MainLayout_C1KbUddZ.mjs';
/* empty css                    */
import { $ as $$ } from './.Layout_CjCxhu0n.mjs';
import { $ as $$Footer } from './Footer_GywUMsSA.mjs';

const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Welcome$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="welcome" data-astro-cid-mmc7otgs> <div class="welcome-container" data-astro-cid-mmc7otgs> <div class="success-badge" data-astro-cid-mmc7otgs>🎉</div> <h1 data-astro-cid-mmc7otgs>¡Bienvenida a Pedia360!</h1> <p class="subtitle" data-astro-cid-mmc7otgs>
Felicidades, ya eres parte de nuestra comunidad.
      Estamos muy felices de acompañarte en esta etapa tan importante.
</p> <div class="video-container" data-astro-cid-mmc7otgs> <div class="video-player" data-astro-cid-mmc7otgs> <video autoplay muted controls playsinline preload="metadata" class="video-element" data-astro-cid-mmc7otgs> <source src="/videos/welcome.mp4" type="video/mp4" data-astro-cid-mmc7otgs>
Tu navegador no soporta videos HTML5.
</video> </div> </div> <div class="steps" data-astro-cid-mmc7otgs> <h2 data-astro-cid-mmc7otgs>Sigue estos 3 pasos para comenzar</h2> <div class="step" data-astro-cid-mmc7otgs> <div class="step-number" data-astro-cid-mmc7otgs>1</div> <div class="step-content" data-astro-cid-mmc7otgs> <h3 data-astro-cid-mmc7otgs>Revisa tu correo electrónico</h3> <p data-astro-cid-mmc7otgs>
Hotmart acaba de enviarte tus datos de acceso.
            Recuerda revisar también tu carpeta de spam o promociones.
</p> </div> </div> <div class="step" data-astro-cid-mmc7otgs> <div class="step-number" data-astro-cid-mmc7otgs>2</div> <div class="step-content" data-astro-cid-mmc7otgs> <h3 data-astro-cid-mmc7otgs>Únete a nuestro grupo de Telegram</h3> <p data-astro-cid-mmc7otgs>
Allí compartiremos novedades, recordatorios y contenido exclusivo
            para las familias de la membresía.
</p> <a href="https://t.me/+uWc87jgMwKZkNzVh" target="_blank" rel="noopener noreferrer" class="telegram-link" aria-label="Unirme a Telegram" data-astro-cid-mmc7otgs> ${renderComponent($$result, "Send", $$Send, { "size": 24, "data-astro-cid-mmc7otgs": true })} <span data-astro-cid-mmc7otgs>Unirme a Telegram</span> </a> </div> </div> <div class="step" data-astro-cid-mmc7otgs> <div class="step-number" data-astro-cid-mmc7otgs>3</div> <div class="step-content" data-astro-cid-mmc7otgs> <h3 data-astro-cid-mmc7otgs>Estate pendiente de nuestros correos</h3> <p data-astro-cid-mmc7otgs>
Durante los próximos días recibirás información desde
<strong data-astro-cid-mmc7otgs>info@pedia-360.com</strong> con la programación mensual,
            eventos en vivo y actividades para que puedas organizarte con
            tiempo.
</p> </div> </div> </div> <div class="final-message" data-astro-cid-mmc7otgs> <h2 data-astro-cid-mmc7otgs>Nos vemos muy pronto</h2> <p data-astro-cid-mmc7otgs>
Gracias por confiar en nosotras para acompañarte en el crecimiento y
        bienestar de tu familia.
</p> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Welcome.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeSale", $$Welcome$1, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/welcome.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/welcome.astro";
const $$url = "/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Welcome,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

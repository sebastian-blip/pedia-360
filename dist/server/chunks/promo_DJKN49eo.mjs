import { c as createComponent } from './astro-component_CnvSSFUV.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, j as renderComponent } from './server_CpqIxvTj.mjs';
import { $ as $$MainLayout } from './MainLayout_CCIa7Ejj.mjs';
import 'clsx';
/* empty css                    */
import { $ as $$Video, a as $$Benefits, b as $$Features, c as $$Team, d as $$TeamDay, e as $$Testimonials } from './TeamDay_BZppbv9T.mjs';
import { $ as $$Rutas, a as $$FAQ } from './FAQ_DSNgIGiR.mjs';
import { $ as $$Footer } from './Footer_BIDZ3HiZ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-sxi3igoq> <div class="hero-container" data-astro-cid-sxi3igoq> <div class="hero-content" data-astro-cid-sxi3igoq> <!-- Logo superior --> <div class="hero-logo-top" data-astro-cid-sxi3igoq> <img src="/images/LOGO PEDIA 360 - TEXT.png" alt="Pedia360" loading="eager" data-astro-cid-sxi3igoq> </div> <h1 class="hero-title" data-astro-cid-sxi3igoq>
Deja de buscar respuestas en Chat Gpt  y empieza a tomar decisiones con tranquilidad sobre la salud y crianza de tu hijo
</h1> <p class="hero-subtitle" data-astro-cid-sxi3igoq>
Pedia360 es un acompañamiento creado por pediatras para mamás con niños de 0 a 5 años que quieren entender qué hacer en cada etapa, sin vivir con miedo, dudas o información contradictoria.
</p> <div class="hero-features" data-astro-cid-sxi3igoq> <div class="feature-item" data-astro-cid-sxi3igoq> <span class="check-icon" data-astro-cid-sxi3igoq>✔</span> <span data-astro-cid-sxi3igoq>Salud infantil</span> </div> <div class="feature-item" data-astro-cid-sxi3igoq> <span class="check-icon" data-astro-cid-sxi3igoq>✔</span> <span data-astro-cid-sxi3igoq>Alimentación</span> </div> <div class="feature-item" data-astro-cid-sxi3igoq> <span class="check-icon" data-astro-cid-sxi3igoq>✔</span> <span data-astro-cid-sxi3igoq>Sueño</span> </div> <div class="feature-item" data-astro-cid-sxi3igoq> <span class="check-icon" data-astro-cid-sxi3igoq>✔</span> <span data-astro-cid-sxi3igoq>Desarrollo</span> </div> <div class="feature-item" data-astro-cid-sxi3igoq> <span class="check-icon" data-astro-cid-sxi3igoq>✔</span> <span data-astro-cid-sxi3igoq>Crianza basada en evidencia</span> </div> </div> <!-- Logo inferior --> <div class="hero-logo-bottom" data-astro-cid-sxi3igoq> <img src="/images/logo.png" alt="Pedia360" loading="lazy" data-astro-cid-sxi3igoq> </div> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/promo/Hero.astro", void 0);

const $$PainPoints = createComponent(($$result, $$props, $$slots) => {
  const painPoints = [
    "Buscas información y encuentras opiniones completamente diferentes",
    "No sabes cuándo algo es normal y cuándo deberías preocuparte",
    "La consulta médica no siempre te deja tranquila ni alcanza el tiempo para resolver todas tus dudas",
    "Has comprado cursos o talleres, pero cuando surge el problema real… sigues sin saber qué hacer y no tienes a quién preguntarle",
    "Quieres acompañar a tu hijo desde el conocimiento y no desde el miedo",
    "Sientes presión por 'hacerlo perfecto' todo el tiempo",
    "El algoritmo te tiene inundado de información y no sabes cuál creer"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pain-points" data-astro-cid-y7vugkyf> <div class="pain-points-container" data-astro-cid-y7vugkyf> <div class="pain-points-content" data-astro-cid-y7vugkyf> <p class="intro-text" data-astro-cid-y7vugkyf>
Probablemente llegaste aquí porque estás cansada de escuchar opiniones diferentes sobre cómo criar a tu hijo y no saber a quién creer.
</p> <div class="pain-points-list" data-astro-cid-y7vugkyf> ${painPoints.map((point) => renderTemplate`<div class="pain-point-item" data-astro-cid-y7vugkyf> <span class="check-icon" data-astro-cid-y7vugkyf>✔</span> <p data-astro-cid-y7vugkyf>${point}</p> </div>`)} </div> <p class="conclusion" data-astro-cid-y7vugkyf>
Si te identificaste con 2 o más puntos, esta membresía es para ti.
</p> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/promo/PainPoints.astro", void 0);

const $$Promo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Video", $$Video, {})} ${renderComponent($$result2, "PainPoints", $$PainPoints, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Rutas", $$Rutas, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "TeamDay", $$TeamDay, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/promo.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/promo.astro";
const $$url = "/promo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Promo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

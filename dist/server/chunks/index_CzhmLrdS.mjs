import { c as createComponent } from './astro-component_CnvSSFUV.mjs';
import 'piccolore';
import { m as maybeRenderHead, j as renderComponent, r as renderTemplate } from './server_CpqIxvTj.mjs';
import { $ as $$MainLayout } from './MainLayout_CCIa7Ejj.mjs';
/* empty css                    */
import { $ as $$Button } from './Button_CTx_uxWA.mjs';
import { $ as $$Video, a as $$Benefits, b as $$Features, c as $$Team, d as $$TeamDay, e as $$Testimonials } from './TeamDay_BZppbv9T.mjs';
import { $ as $$Rutas, a as $$FAQ } from './FAQ_DSNgIGiR.mjs';
import { $ as $$Footer } from './Footer_BIDZ3HiZ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-container" data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> <!-- Logo superior --> <div class="hero-logo-top" data-astro-cid-bbe6dxrz> <img src="/images/LOGO PEDIA 360 - TEXT.png" alt="Pedia360" loading="eager" data-astro-cid-bbe6dxrz> </div> <h1 class="hero-title" data-astro-cid-bbe6dxrz>
Deja de buscar respuestas en Chat Gpt  y empieza a tomar decisiones con tranquilidad sobre la salud y crianza de tu hijo
</h1> <p class="hero-subtitle" data-astro-cid-bbe6dxrz>
Pedia360 es un acompañamiento creado por pediatras para mamás con niños de 0 a 5 años que quieren entender qué hacer en cada etapa, sin vivir con miedo, dudas o información contradictoria.
</p> <div class="hero-features" data-astro-cid-bbe6dxrz> <div class="feature-item" data-astro-cid-bbe6dxrz> <span class="check-icon" data-astro-cid-bbe6dxrz>✔</span> <span data-astro-cid-bbe6dxrz>Salud infantil</span> </div> <div class="feature-item" data-astro-cid-bbe6dxrz> <span class="check-icon" data-astro-cid-bbe6dxrz>✔</span> <span data-astro-cid-bbe6dxrz>Alimentación</span> </div> <div class="feature-item" data-astro-cid-bbe6dxrz> <span class="check-icon" data-astro-cid-bbe6dxrz>✔</span> <span data-astro-cid-bbe6dxrz>Sueño</span> </div> <div class="feature-item" data-astro-cid-bbe6dxrz> <span class="check-icon" data-astro-cid-bbe6dxrz>✔</span> <span data-astro-cid-bbe6dxrz>Desarrollo</span> </div> <div class="feature-item" data-astro-cid-bbe6dxrz> <span class="check-icon" data-astro-cid-bbe6dxrz>✔</span> <span data-astro-cid-bbe6dxrz>Crianza basada en evidencia</span> </div> </div> <div class="hero-cta" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME AHORA", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'first_cta_click', { event_category: 'engagement', event_label: 'Hero Section' });", "data-astro-cid-bbe6dxrz": true })} </div> <div class="hero-cta" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", $$Button, { "text": "VER PLANES", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'second_cta_click', { event_category: 'engagement', event_label: 'Hero Section' });", "data-astro-cid-bbe6dxrz": true })} </div> <!-- Logo inferior --> <div class="hero-logo-bottom" data-astro-cid-bbe6dxrz> <img src="/images/logo.png" alt="Pedia360" loading="lazy" data-astro-cid-bbe6dxrz> </div> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Hero.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<section class="pain-points" data-astro-cid-dxipqcxf> <div class="pain-points-container" data-astro-cid-dxipqcxf> <div class="pain-points-content" data-astro-cid-dxipqcxf> <p class="intro-text" data-astro-cid-dxipqcxf>
Probablemente llegaste aquí porque estás cansada de escuchar opiniones diferentes sobre cómo criar a tu hijo y no saber a quién creer.
</p> <div class="pain-points-list" data-astro-cid-dxipqcxf> ${painPoints.map((point) => renderTemplate`<div class="pain-point-item" data-astro-cid-dxipqcxf> <span class="check-icon" data-astro-cid-dxipqcxf>✔</span> <p data-astro-cid-dxipqcxf>${point}</p> </div>`)} </div> <p class="conclusion" data-astro-cid-dxipqcxf>
Si te identificaste con 2 o más puntos, esta membresía es para ti.
</p> <div class="cta-button" data-astro-cid-dxipqcxf> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO SENTIRME MÁS TRANQUILA", "variant": "secondary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'third_cta_click', { event_category: 'engagement', event_label: 'Pain Points Section' });", "data-astro-cid-dxipqcxf": true })} </div> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/PainPoints.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pricing" id="pricing" data-astro-cid-hkoc4sea> <div class="pricing-container" data-astro-cid-hkoc4sea> <h2 data-astro-cid-hkoc4sea>Elige el plan que mejor se adapte a ti</h2> <p class="pricing-subtitle" data-astro-cid-hkoc4sea>
Por menos de lo que cuesta una consulta privada, tendrás acompañamiento constante
</p> <div class="pricing-grid" data-astro-cid-hkoc4sea> <!-- Plan Mensual --> <div class="pricing-card" data-astro-cid-hkoc4sea> <div class="pricing-header" data-astro-cid-hkoc4sea> <h3 data-astro-cid-hkoc4sea>Plan Mensual</h3> </div> <div class="pricing-price" data-astro-cid-hkoc4sea> <div class="price-item" data-astro-cid-hkoc4sea> <span class="original-price" data-astro-cid-hkoc4sea>$19,5 USD</span> <span class="current-price" data-astro-cid-hkoc4sea>$14,9 USD</span> <span class="period" data-astro-cid-hkoc4sea>al mes</span> </div> <p class="launch-badge" data-astro-cid-hkoc4sea>Precio Lanzamiento</p> </div> <p class="price-description" data-astro-cid-hkoc4sea>
Perfecto para empezar y conocer todo el contenido.
</p> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO EMPEZAR", "variant": "primary", "size": "md", "href": "https://pay.hotmart.com/G106540717U?off=mxca3lyt&checkoutMode=6", "onClick": "gtag('event', 'mensual_cta_click', { event_category: 'engagement', event_label: 'Pricing Section' });", "data-astro-cid-hkoc4sea": true })} </div> <!-- Plan Trimestral --> <div class="pricing-card featured" data-astro-cid-hkoc4sea> <div class="badge-featured" data-astro-cid-hkoc4sea>Más Popular</div> <div class="pricing-header" data-astro-cid-hkoc4sea> <h3 data-astro-cid-hkoc4sea>Plan Trimestral</h3> </div> <div class="pricing-price" data-astro-cid-hkoc4sea> <div class="price-item" data-astro-cid-hkoc4sea> <span class="original-price" data-astro-cid-hkoc4sea>$52,5 USD</span> <span class="current-price" data-astro-cid-hkoc4sea>$40 USD</span> <span class="saving-badge" data-astro-cid-hkoc4sea>
✨ Ahorra un 10%
</span> <span class="period" data-astro-cid-hkoc4sea>por 3 meses</span> </div> <p class="launch-badge" data-astro-cid-hkoc4sea>Precio Lanzamiento</p> </div> <p class="price-description" data-astro-cid-hkoc4sea>
Ahorra más y acompaña el proceso de tu hijo con continuidad.
</p> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO EL PLAN TRIMESTRAL", "variant": "primary", "size": "md", "href": "https://pay.hotmart.com/G106540717U?off=15n4x3kw&checkoutMode=6", "onClick": "gtag('event', 'trimestral_cta_click', { event_category: 'engagement', event_label: 'Pricing Section' });", "data-astro-cid-hkoc4sea": true })} </div> <!-- Plan Anual --> <div class="pricing-card" data-astro-cid-hkoc4sea> <div class="pricing-header" data-astro-cid-hkoc4sea> <h3 data-astro-cid-hkoc4sea>Plan Anual</h3> </div> <div class="pricing-price" data-astro-cid-hkoc4sea> <div class="price-item" data-astro-cid-hkoc4sea> <span class="original-price" data-astro-cid-hkoc4sea>$178 USD</span> <span class="current-price" data-astro-cid-hkoc4sea>$136 USD</span> <span class="saving-badge" data-astro-cid-hkoc4sea>
✨ Ahorra un 24%
</span> <span class="period" data-astro-cid-hkoc4sea>al año</span> </div> <p class="launch-badge" data-astro-cid-hkoc4sea>Precio Lanzamiento</p> </div> <p class="price-description" data-astro-cid-hkoc4sea>
La mejor opción para tener acompañamiento continuo durante todo el año.
</p> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO EL PLAN ANUAL", "variant": "primary", "size": "md", "href": "https://pay.hotmart.com/G106540717U?off=5jkvlz7h&checkoutMode=6", "onClick": "gtag('event', 'anual_cta_click', { event_category: 'engagement', event_label: 'Pricing Section' });", "data-astro-cid-hkoc4sea": true })} </div> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Pricing.astro", void 0);

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="final-cta" data-astro-cid-66itwakk> <div class="final-container" data-astro-cid-66itwakk> <!-- Mensaje principal --> <div class="final-content" data-astro-cid-66itwakk> <h2 data-astro-cid-66itwakk>
Tu hijo no viene con manual…
<span class="highlight" data-astro-cid-66itwakk>pero no tienes que vivir este proceso sola.</span> </h2> <p data-astro-cid-66itwakk>Tener claridad y acompañamiento puede hacer una diferencia enorme en cómo vives cada etapa de la crianza.</p> </div> <!-- Botón grande final --> <div class="final-button" data-astro-cid-66itwakk> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME A LA MEMBRESÍA AHORA", "variant": "primary", "href": "#pricing", "onClick": "gtag('event', 'final_cta_click', { event_category: 'engagement', event_label: 'Final CTA Section' });", "data-astro-cid-66itwakk": true })} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/FinalCTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Video", $$Video, {})} ${renderComponent($$result2, "PainPoints", $$PainPoints, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Rutas", $$Rutas, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "TeamDay", $$TeamDay, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/index.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

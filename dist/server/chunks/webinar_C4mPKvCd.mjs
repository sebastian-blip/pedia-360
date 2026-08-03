import { c as createComponent } from './astro-component_CourHKez.mjs';
import 'piccolore';
import { m as maybeRenderHead, j as renderComponent, r as renderTemplate, f as addAttribute } from './server_CB7ySg6I.mjs';
import { $ as $$MainLayout } from './MainLayout_C1KbUddZ.mjs';
/* empty css                    */
import { $ as $$Button } from './Button_DO9GwfP6.mjs';
import { $ as $$Rutas, a as $$FAQ, b as $$Pricing, c as $$FinalCTA } from './FinalCTA_CS2Ltykk.mjs';
import { $ as $$Footer } from './Footer_GywUMsSA.mjs';

const $$HeroWebinar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-ufnaisbh> <div class="hero-container" data-astro-cid-ufnaisbh> <div class="hero-content" data-astro-cid-ufnaisbh> <!-- Logo superior --> <div class="hero-logo-top" data-astro-cid-ufnaisbh> <img src="/images/LOGO PEDIA 360 - TEXT.png" alt="Pedia360" loading="eager" data-astro-cid-ufnaisbh> </div> <h1 class="hero-title" data-astro-cid-ufnaisbh>
Ayudamos a mamás con hijos de 0 a 5 años a tomar decisiones seguras sobre su salud y crianza, con nuestro acompañamiento como pediatras expertos.
</h1> <div class="hero-features" data-astro-cid-ufnaisbh> <div class="feature-item" data-astro-cid-ufnaisbh> <span class="check-icon" data-astro-cid-ufnaisbh>✔</span> <span data-astro-cid-ufnaisbh>Salud infantil</span> </div> <div class="feature-item" data-astro-cid-ufnaisbh> <span class="check-icon" data-astro-cid-ufnaisbh>✔</span> <span data-astro-cid-ufnaisbh>Alimentación</span> </div> <div class="feature-item" data-astro-cid-ufnaisbh> <span class="check-icon" data-astro-cid-ufnaisbh>✔</span> <span data-astro-cid-ufnaisbh>Sueño</span> </div> <div class="feature-item" data-astro-cid-ufnaisbh> <span class="check-icon" data-astro-cid-ufnaisbh>✔</span> <span data-astro-cid-ufnaisbh>Desarrollo</span> </div> <div class="feature-item" data-astro-cid-ufnaisbh> <span class="check-icon" data-astro-cid-ufnaisbh>✔</span> <span data-astro-cid-ufnaisbh>Crianza basada en evidencia</span> </div> </div> <div class="hero-cta" data-astro-cid-ufnaisbh> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME AHORA", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'first_cta_click', { event_category: 'engagement', event_label: 'Hero Section' });", "data-astro-cid-ufnaisbh": true })} </div> <div class="hero-cta" data-astro-cid-ufnaisbh> ${renderComponent($$result, "Button", $$Button, { "text": "VER PLANES", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'second_cta_click', { event_category: 'engagement', event_label: 'Hero Section' });", "data-astro-cid-ufnaisbh": true })} </div> <!-- Logo inferior --> <div class="hero-logo-bottom" data-astro-cid-ufnaisbh> <img src="/images/logo.png" alt="Pedia360" loading="lazy" data-astro-cid-ufnaisbh> </div> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/HeroWebinar.astro", void 0);

const $$FeaturesWebinar = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "/icons/general/brain.svg",
      title: "Rutas guiadas por edades",
      description: "Más de 40 videos organizados paso a paso según la etapa de desarrollo de tu hijo."
    },
    {
      icon: "/icons/general/chat.svg",
      title: "Sesiones en vivo todas las semanas",
      description: "Espacios de acompañamiento con Diana y Luza para resolver dudas reales del día a día."
    },
    {
      icon: "/icons/general/repeat.svg",
      title: "Nuevas clases todos los meses",
      description: "Actualizaciones constantes sobre temas relevantes para cada etapa infantil."
    },
    {
      icon: "/icons/general/community.svg",
      title: "Comunidad privada",
      description: "Acceso a un grupo privado de Telegram donde podrás compartir experiencias y sentirte acompañada por otras familias."
    },
    {
      icon: "/icons/general/books.svg",
      title: "Biblioteca de salud infantil",
      description: "Contenido práctico sobre enfermedades frecuentes, signos de alarma y manejo inicial en casa."
    },
    {
      icon: "/icons/general/sos.svg",
      title: "Botón SOS",
      description: "Contenido pensado para esos momentos donde necesitas respuestas rápidas y tranquilidad inmediata."
    },
    {
      icon: "/icons/general/download.svg",
      title: "Plantillas y descargables",
      description: "Guías prácticas, PDFs y recursos fáciles de aplicar en casa."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="features" data-astro-cid-a5dfepxp> <div class="features-container" data-astro-cid-a5dfepxp> <h2 data-astro-cid-a5dfepxp>Todo lo que tendrás dentro de la membresía</h2> <div class="features-grid" data-astro-cid-a5dfepxp> ${features.map((feature) => renderTemplate`<div class="feature-card" data-astro-cid-a5dfepxp> <div class="feature-icon" data-astro-cid-a5dfepxp> <img${addAttribute(feature.icon, "src")}${addAttribute(feature.title, "alt")} data-astro-cid-a5dfepxp> </div> <h3 data-astro-cid-a5dfepxp>${feature.title}</h3> <p data-astro-cid-a5dfepxp>${feature.description}</p> </div>`)} </div> </div> <div class="hero-cta" data-astro-cid-a5dfepxp> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME AHORA", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'webinar_cta_click', { event_category: 'engagement', event_label: 'Hero Section' });", "data-astro-cid-a5dfepxp": true })} </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/FeaturesWebinar.astro", void 0);

const $$Webinar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroWebinar, {})} ${renderComponent($$result2, "Features", $$FeaturesWebinar, {})} ${renderComponent($$result2, "Rutas", $$Rutas, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/webinar.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/webinar.astro";
const $$url = "/webinar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Webinar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

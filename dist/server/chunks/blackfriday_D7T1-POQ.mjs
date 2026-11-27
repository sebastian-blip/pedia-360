import { c as createComponent } from './astro-component_BBqddoPS.mjs';
import 'piccolore';
import { m as maybeRenderHead, i as renderComponent, r as renderTemplate, f as addAttribute } from './server_O3rkxwBG.mjs';
import { $ as $$MainLayout } from './MainLayout_Dg11kvsF.mjs';
/* empty css                    */
import { $ as $$Button } from './Button_Cs2ZSbtK.mjs';
import { $ as $$Features, a as $$Benefits } from './Benefits_CKIYLuEz.mjs';
import { $ as $$FinalCTA } from './FinalCTA_BT2irsca.mjs';
import { $ as $$Footer } from './Footer_-OI9OI_6.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="home" data-astro-cid-armltk7h> <div class="hero-container" data-astro-cid-armltk7h> <div class="hero-content" data-astro-cid-armltk7h> <div class="hero-badge" data-astro-cid-armltk7h> <span class="badge-star" data-astro-cid-armltk7h>★</span> <span data-astro-cid-armltk7h>BLACK FRIDAY</span> <span class="badge-star" data-astro-cid-armltk7h>★</span> </div> <div class="hero-logo-top" data-astro-cid-armltk7h> <img src="/images/LOGO PEDIA 360 - TEXT.png" alt="Pedia360" loading="eager" data-astro-cid-armltk7h> </div> <h1 class="hero-title" data-astro-cid-armltk7h>
La membresía que te devuelve la tranquilidad como mamá
<span class="highlight" data-astro-cid-armltk7h>ahora con hasta un 40% de descuento</span> </h1> <p class="hero-subtitle" data-astro-cid-armltk7h>
Pedia360 es un acompañamiento creado por pediatras para mamás con niños de 0 a 5 años. 
        Resuelve tus dudas sobre salud, alimentación, sueño y desarrollo con información basada en evidencia, 
        sin depender del algoritmo ni del Dr. Google.
</p> <div class="hero-features" data-astro-cid-armltk7h> <div class="feature-item" data-astro-cid-armltk7h> <span class="check-icon" data-astro-cid-armltk7h>✔</span> <span data-astro-cid-armltk7h>Salud infantil</span> </div> <div class="feature-item" data-astro-cid-armltk7h> <span class="check-icon" data-astro-cid-armltk7h>✔</span> <span data-astro-cid-armltk7h>Alimentación</span> </div> <div class="feature-item" data-astro-cid-armltk7h> <span class="check-icon" data-astro-cid-armltk7h>✔</span> <span data-astro-cid-armltk7h>Sueño</span> </div> <div class="feature-item" data-astro-cid-armltk7h> <span class="check-icon" data-astro-cid-armltk7h>✔</span> <span data-astro-cid-armltk7h>Desarrollo</span> </div> <div class="feature-item" data-astro-cid-armltk7h> <span class="check-icon" data-astro-cid-armltk7h>✔</span> <span data-astro-cid-armltk7h>Crianza basada en evidencia</span> </div> </div> <div class="hero-cta" data-astro-cid-armltk7h> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO APROVECHAR LA PROMO", "variant": "primary", "size": "lg", "href": "#pricing", "onClick": "gtag('event', 'blackfriday_hero_cta_click', { event_category: 'engagement', event_label: 'Black Friday Hero' });", "data-astro-cid-armltk7h": true })} </div> <p class="hero-urgency" data-astro-cid-armltk7h>
Oferta por tiempo limitado. Elige tu plan y empieza hoy.
</p> </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/blackfriday/Hero.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Plan Mensual",
      originalPrice: "$19,5 USD",
      currentPrice: "$11,70 USD",
      period: "al mes",
      description: "Perfecto para empezar y conocer todo el contenido.",
      saving: "Ahorra 40%",
      href: "https://pay.hotmart.com/G106540717U?off=qlnp8tjy",
      eventLabel: "blackfriday_mensual_cta_click"
    },
    {
      name: "Plan Trimestral",
      originalPrice: "$49,5 USD",
      currentPrice: "$29,70 USD",
      period: "por 3 meses",
      description: "Ahorra más y acompaña el proceso de tu hijo con continuidad.",
      saving: "Ahorra 40%",
      href: "https://pay.hotmart.com/G106540717U?off=3yqtkuhw",
      eventLabel: "blackfriday_trimestral_cta_click",
      featured: true
    },
    {
      name: "Plan Anual",
      originalPrice: "$175 USD",
      currentPrice: "$105 USD",
      period: "al año",
      description: "La mejor opción para tener acompañamiento continuo durante todo el año.",
      saving: "Ahorra 40%",
      href: "https://pay.hotmart.com/G106540717U?off=gtpagud2",
      eventLabel: "blackfriday_anual_cta_click"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pricing" id="pricing" data-astro-cid-c3e6o6zm> <div class="pricing-container" data-astro-cid-c3e6o6zm> <div class="pricing-header-section" data-astro-cid-c3e6o6zm> <span class="promo-badge" data-astro-cid-c3e6o6zm>BLACK FRIDAY</span> <h2 data-astro-cid-c3e6o6zm>Elige tu plan con descuento</h2> <p class="pricing-subtitle" data-astro-cid-c3e6o6zm>
Aprovecha hasta un 40% de descuento y únete a la membresía que te acompaña en cada etapa de la crianza.
</p> </div> <div class="pricing-grid" data-astro-cid-c3e6o6zm> ${plans.map((plan) => renderTemplate`<div${addAttribute(`pricing-card ${plan.featured ? "featured" : ""}`, "class")} data-astro-cid-c3e6o6zm> ${plan.featured && renderTemplate`<div class="badge-featured" data-astro-cid-c3e6o6zm>Más Popular</div>`} <div class="pricing-header" data-astro-cid-c3e6o6zm> <h3 data-astro-cid-c3e6o6zm>${plan.name}</h3> </div> <div class="pricing-price" data-astro-cid-c3e6o6zm> <span class="original-price" data-astro-cid-c3e6o6zm>${plan.originalPrice}</span> <span class="current-price" data-astro-cid-c3e6o6zm>${plan.currentPrice}</span> <span class="period" data-astro-cid-c3e6o6zm>${plan.period}</span> <span class="saving-badge" data-astro-cid-c3e6o6zm>✨ ${plan.saving}</span> </div> <p class="price-description" data-astro-cid-c3e6o6zm> ${plan.description} </p> ${renderComponent($$result, "Button", $$Button, { "text": `QUIERO EL ${plan.name.toUpperCase()}`, "variant": "primary", "size": "md", "href": plan.href, "onClick": `gtag('event', '${plan.eventLabel}', { event_category: 'engagement', event_label: 'Black Friday Pricing Section' });`, "data-astro-cid-c3e6o6zm": true })} </div>`)} </div> <p class="pricing-note" data-astro-cid-c3e6o6zm>
Precios en dólares estadounidenses. La promoción es válida por tiempo limitado durante Black Friday.
</p> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/blackfriday/Pricing.astro", void 0);

const $$Blackfriday = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Black Friday Pedia360 - Hasta 40% de descuento", "description": "Aprovecha el Black Friday de Pedia360 y únete a la membresía para mamás con niños de 0 a 5 años. Ahorra hasta un 40% en planes mensual, trimestral y anual." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/blackfriday.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/blackfriday.astro";
const $$url = "/blackfriday";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blackfriday,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_Dcpiu7Gs.mjs';
import 'piccolore';
import { m as maybeRenderHead, i as renderComponent, r as renderTemplate } from './server_BZyoylw2.mjs';
/* empty css                    */
import { $ as $$Button } from './Button_CAMFFtBP.mjs';

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="final-cta" data-astro-cid-66itwakk> <div class="final-container" data-astro-cid-66itwakk> <!-- Mensaje principal --> <div class="final-content" data-astro-cid-66itwakk> <h2 data-astro-cid-66itwakk>
Tu hijo no viene con manual…
<span class="highlight" data-astro-cid-66itwakk>pero no tienes que vivir este proceso sola.</span> </h2> <p data-astro-cid-66itwakk>Tener claridad y acompañamiento puede hacer una diferencia enorme en cómo vives cada etapa de la crianza.</p> </div> <!-- Botón grande final --> <div class="final-button" data-astro-cid-66itwakk> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME A LA MEMBRESÍA AHORA", "variant": "primary", "href": "#pricing", "onClick": "gtag('event', 'final_cta_click', { event_category: 'engagement', event_label: 'Final CTA Section' });", "data-astro-cid-66itwakk": true })} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/FinalCTA.astro", void 0);

export { $$FinalCTA as $ };

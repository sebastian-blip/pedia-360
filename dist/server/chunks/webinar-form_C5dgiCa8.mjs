import { c as createComponent } from './astro-component_DOmKqERS.mjs';
import 'piccolore';
import { k as createRenderInstruction, m as maybeRenderHead, j as renderComponent, r as renderTemplate } from './server_Ba2cZH2k.mjs';
import { $ as $$MainLayout } from './MainLayout_B7yPs5EE.mjs';
import { $ as $$Button } from './Button_BGz93CLA.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$WebinarForm$1 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="form-card" data-astro-cid-2vpky2jj> <div class="form-header" data-astro-cid-2vpky2jj> <h2 data-astro-cid-2vpky2jj>Reserva tu cupo</h2> <p data-astro-cid-2vpky2jj>
Completa tus datos para inscribirte al webinar gratuito.
</p> </div> <form class="webinar-form" data-astro-cid-2vpky2jj> <div class="field" data-astro-cid-2vpky2jj> <label for="name" data-astro-cid-2vpky2jj>
Nombre
</label> <input id="name" name="name" type="text" placeholder="Tu nombre" required data-astro-cid-2vpky2jj> </div> <div class="field" data-astro-cid-2vpky2jj> <label for="lastname" data-astro-cid-2vpky2jj>
Apellido
</label> <input id="lastname" name="lastname" type="text" placeholder="Tu apellido" required data-astro-cid-2vpky2jj> </div> <div class="field" data-astro-cid-2vpky2jj> <label for="email" data-astro-cid-2vpky2jj>
Correo electrónico
</label> <input id="email" name="email" type="email" placeholder="ejemplo@email.com" required data-astro-cid-2vpky2jj> </div> <div class="honeypot" aria-hidden="true" data-astro-cid-2vpky2jj> <label for="website" data-astro-cid-2vpky2jj>Website</label> <input id="website" name="website" type="text" tabindex="-1" autocomplete="off" data-astro-cid-2vpky2jj> </div> ${renderComponent($$result, "Button", $$Button, { "text": "INSCRIBIRME GRATIS", "variant": "primary", "size": "lg", "type": "submit", "data-astro-cid-2vpky2jj": true })} <p id="form-error" class="form-error" hidden data-astro-cid-2vpky2jj></p> </form> <div class="security" data-astro-cid-2vpky2jj>
🔒 Tus datos están protegidos.
<br data-astro-cid-2vpky2jj>
Nunca compartiremos tu información con terceros.
</div> </div> ${renderScript($$result, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/webinar/WebinarForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/webinar/WebinarForm.astro", void 0);

const $$WebinarHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-loomxoep> <div class="hero-container" data-astro-cid-loomxoep> <div class="hero-content" data-astro-cid-loomxoep> <div class="webinar-brand" data-astro-cid-loomxoep> <img src="/images/logo.png" alt="Pedia360" data-astro-cid-loomxoep> <p data-astro-cid-loomxoep>
Webinar Gratuito
</p> </div> <h1 data-astro-cid-loomxoep>
Entendiendo la
<span data-astro-cid-loomxoep>barriguita de tu bebé</span> </h1> <p class="description" data-astro-cid-loomxoep>
¿Tu bebé llora mucho, se retuerce, tiene gases o parece incómodo la mayor parte del tiempo?
</p> <p class="description" data-astro-cid-loomxoep>
En este webinar gratuito aprenderás a entender qué está ocurriendo en su sistema digestivo, cómo reconocer si se trata de cólico o estreñimiento y qué hacer para ayudarlo a sentirse mejor.
</p> <div class="info" data-astro-cid-loomxoep> <div class="info-card" data-astro-cid-loomxoep> <span data-astro-cid-loomxoep>📅</span> <div data-astro-cid-loomxoep> <strong data-astro-cid-loomxoep>Fecha</strong> <small data-astro-cid-loomxoep>11 de Agosto de 2026</small> </div> </div> <div class="info-card" data-astro-cid-loomxoep> <span data-astro-cid-loomxoep>🕐</span> <div data-astro-cid-loomxoep> <strong data-astro-cid-loomxoep>Hora</strong> <small data-astro-cid-loomxoep>7:00 PM (Colombia)</small> </div> </div> </div> <ul class="features" data-astro-cid-loomxoep> <li data-astro-cid-loomxoep>✔ Webinar en vivo</li> <li data-astro-cid-loomxoep>✔ Explicado por pediatras</li> <li data-astro-cid-loomxoep>✔ Totalmente gratuito</li> </ul> </div> <div class="hero-form" data-astro-cid-loomxoep> ${renderComponent($$result, "WebinarForm", $$WebinarForm$1, { "data-astro-cid-loomxoep": true })} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/webinar/WebinarHero.astro", void 0);

const $$WebinarForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$WebinarHero, {})} ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/webinar-form.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/webinar-form.astro";
const $$url = "/webinar-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebinarForm,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

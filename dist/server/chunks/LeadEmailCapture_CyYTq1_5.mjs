import { c as createComponent } from './astro-component_BBqddoPS.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './server_O3rkxwBG.mjs';
import 'clsx';
import { r as renderScript } from './script_DVeE0rXv.mjs';

const $$LeadEmailCapture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LeadEmailCapture;
  const {
    source,
    title = "Ingresa tu correo para comenzar",
    subtitle = "Te enviaremos un resumen de tu evaluación y recursos útiles para ti.",
    buttonText = "Comenzar evaluación",
    privacyText = "Solo usamos tu correo para enviarte información de Pedia360. No lo compartimos con terceros."
  } = Astro2.props;
  const storageKey = `leadEmail_${source}`;
  return renderTemplate`${maybeRenderHead()}<div class="email-capture" data-email-capture${addAttribute(source, "data-source")}${addAttribute(storageKey, "data-storage-key")} data-astro-cid-k6xewzqs> <div class="email-capture-card" data-capture-card data-astro-cid-k6xewzqs> <div class="email-capture-header" data-astro-cid-k6xewzqs> <h2 data-astro-cid-k6xewzqs>${title}</h2> <p data-astro-cid-k6xewzqs>${subtitle}</p> </div> <form class="email-capture-form" data-capture-form novalidate data-astro-cid-k6xewzqs> <div class="email-field" data-astro-cid-k6xewzqs> <label${addAttribute(`lead-email-${source}`, "for")} data-astro-cid-k6xewzqs>Correo electrónico</label> <input${addAttribute(`lead-email-${source}`, "id")} type="email" name="email" placeholder="tucorreo@ejemplo.com" autocomplete="email" maxlength="254" required data-email-input data-astro-cid-k6xewzqs> <span class="email-error" data-email-error data-astro-cid-k6xewzqs></span> </div> <button class="lm-btn lm-btn-primary lm-btn-lg" type="submit" data-submit-btn data-astro-cid-k6xewzqs> ${buttonText} </button> </form> <p class="email-capture-privacy" data-astro-cid-k6xewzqs>${privacyText}</p> </div> <div class="email-capture-success" data-capture-success hidden data-astro-cid-k6xewzqs> <div class="success-icon" data-astro-cid-k6xewzqs>✅</div> <h3 data-astro-cid-k6xewzqs>¡Correo guardado!</h3> <p data-astro-cid-k6xewzqs>Ahora puedes continuar con la evaluación.</p> </div> </div> ${renderScript($$result, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/LeadEmailCapture.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/LeadEmailCapture.astro", void 0);

export { $$LeadEmailCapture as $ };

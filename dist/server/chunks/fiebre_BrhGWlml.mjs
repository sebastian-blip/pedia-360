import { c as createComponent } from './astro-component_X6g7uG2o.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, i as renderComponent } from './server_D4R6okJX.mjs';
import { $ as $$MainLayout } from './MainLayout_DNzTn3EX.mjs';
import 'clsx';
import { r as renderScript } from './script_Ct9S9qRU.mjs';

const $$LeadMagnetFiebre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LeadMagnetFiebre;
  const {
    title = "¿Tu hijo tiene fiebre?",
    subtitle = "Responde esta guía rápida para saber si debes llevarlo a urgencias."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lead-magnet" data-lead-magnet data-astro-cid-5hl5v6qz> <div class="lead-magnet-card" data-astro-cid-5hl5v6qz> <div class="lead-magnet-header" data-astro-cid-5hl5v6qz> <h2 data-astro-cid-5hl5v6qz>${title}</h2> <p data-astro-cid-5hl5v6qz>${subtitle}</p> </div> <div class="progress-bar" data-progress-bar data-astro-cid-5hl5v6qz> <div class="progress-fill" data-progress-fill data-astro-cid-5hl5v6qz></div> </div> <form class="lead-magnet-form" data-lead-form novalidate data-astro-cid-5hl5v6qz> <!-- Pregunta 1 --> <fieldset class="question-step" data-step="1" data-question="age" data-astro-cid-5hl5v6qz> <legend class="question-title" data-astro-cid-5hl5v6qz> <span class="question-number" data-astro-cid-5hl5v6qz>1</span>
¿Qué edad tiene tu hijo?
</legend> <div class="options" data-astro-cid-5hl5v6qz> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="age" value="0-3" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>0 a 3 meses</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="age" value="over3" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Más de 3 meses</span> </label> </div> </fieldset> <!-- Pregunta 2 --> <fieldset class="question-step" data-step="2" data-question="measured" hidden data-astro-cid-5hl5v6qz> <legend class="question-title" data-astro-cid-5hl5v6qz> <span class="question-number" data-astro-cid-5hl5v6qz>2</span>
¿Ya tomaste la temperatura con termómetro?
</legend> <div class="options" data-astro-cid-5hl5v6qz> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="measured" value="yes" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Sí</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="measured" value="no" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>No</span> </label> </div> <div class="feedback" data-feedback="measured" hidden data-astro-cid-5hl5v6qz></div> </fieldset> <!-- Pregunta 3 --> <fieldset class="question-step" data-step="3" data-question="temperature" hidden data-astro-cid-5hl5v6qz> <legend class="question-title" data-astro-cid-5hl5v6qz> <span class="question-number" data-astro-cid-5hl5v6qz>3</span>
¿Qué temperatura te dio?
</legend> <div class="options" data-astro-cid-5hl5v6qz> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="temperature" value="less37-5" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Menor a 37,5 °C</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="temperature" value="37-5-38" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>37,5 a 38 °C</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="temperature" value="38-39" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Entre 38 a 39 °C</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="temperature" value="over39" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Mayor a 39 °C</span> </label> </div> <div class="feedback" data-feedback="temperature" hidden data-astro-cid-5hl5v6qz></div> </fieldset> <!-- Pregunta 4 --> <fieldset class="question-step" data-step="4" data-question="acetaminophen" hidden data-astro-cid-5hl5v6qz> <legend class="question-title" data-astro-cid-5hl5v6qz> <span class="question-number" data-astro-cid-5hl5v6qz>4</span>
¿Ya diste acetaminofén?
</legend> <div class="options" data-astro-cid-5hl5v6qz> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="acetaminophen" value="yes" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Sí</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="radio" name="acetaminophen" value="no" required data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>No</span> </label> </div> <div class="feedback" data-feedback="acetaminophen" hidden data-astro-cid-5hl5v6qz></div> </fieldset> <!-- Pregunta 5 --> <fieldset class="question-step" data-step="5" data-question="symptoms" hidden data-astro-cid-5hl5v6qz> <legend class="question-title" data-astro-cid-5hl5v6qz> <span class="question-number" data-astro-cid-5hl5v6qz>5</span>
Además de la fiebre, tu hijo tiene <em data-astro-cid-5hl5v6qz>(selecciona una o varias)</em>:
</legend> <div class="options options-multi" data-astro-cid-5hl5v6qz> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="breathing" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Dificultad para respirar, se coloca morado o agitado</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="vomit-diarrhea" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Vómito o diarrea más de 4 veces en 4 horas</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="no-drinks" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>No quiere recibir ninguna bebida, ni suero ni teta o tetero</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="more3days" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Lleva más de 3 días con fiebre y no tiene más síntomas</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="uncontrolled" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>No logras controlar la fiebre por lo menos 4 horas después de dar el acetaminofén</span> </label> <label class="option-card" data-astro-cid-5hl5v6qz> <input type="checkbox" name="symptoms" value="none" data-astro-cid-5hl5v6qz> <span class="option-text" data-astro-cid-5hl5v6qz>Ninguna</span> </label> </div> <div class="feedback" data-feedback="symptoms" hidden data-astro-cid-5hl5v6qz></div> </fieldset> <!-- Resumen --> <div class="summary-step" data-step="summary" hidden data-astro-cid-5hl5v6qz> <div class="summary-header" data-astro-cid-5hl5v6qz> <h3 data-astro-cid-5hl5v6qz>Recomendación</h3> <p data-astro-cid-5hl5v6qz>Esta es la orientación según tus respuestas.</p> </div> <div class="summary-content" data-summary-content data-astro-cid-5hl5v6qz></div> </div> <!-- Finalización --> <div class="complete-step" data-step="complete" hidden data-astro-cid-5hl5v6qz> <div class="complete-icon" data-astro-cid-5hl5v6qz>🩺</div> <div class="complete-header" data-astro-cid-5hl5v6qz> <h3 data-astro-cid-5hl5v6qz>¡Gracias por completar la guía!</h3> <p data-astro-cid-5hl5v6qz>
Recuerda que esta herramienta es orientativa. Si tienes dudas o el estado de tu hijo cambia, consulta a tu pediatra o acude a urgencias.
</p> </div> </div> <div class="actions" data-astro-cid-5hl5v6qz> <button class="lm-btn lm-btn-primary lm-btn-lg" type="button" data-next-btn data-astro-cid-5hl5v6qz>
Continuar
</button> <button class="lm-btn lm-btn-outline lm-btn-md" type="button" data-prev-btn hidden data-astro-cid-5hl5v6qz>
Volver
</button> </div> </form> </div> </div> ${renderScript($$result, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/LeadMagnetFiebre.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/LeadMagnetFiebre.astro", void 0);

const $$Fiebre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Fiebre - Guía rápida - Pedia360", "description": "Responde una guía rápida para saber si tu hijo con fiebre debe ir a urgencias.", "data-astro-cid-mgu7ns2v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="fiebre-page" data-astro-cid-mgu7ns2v> <section class="fiebre-hero" data-astro-cid-mgu7ns2v> <h1 data-astro-cid-mgu7ns2v>Guía de fiebre</h1> <p data-astro-cid-mgu7ns2v>Tu hijo tiene fiebre en este momento y necesitas saber si ir a urgencias. Responde esta guía.</p> </section> ${renderComponent($$result2, "LeadMagnetFiebre", $$LeadMagnetFiebre, { "data-astro-cid-mgu7ns2v": true })} </main> ` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/fiebre.astro", void 0);

const $$file = "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/pages/fiebre.astro";
const $$url = "/fiebre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fiebre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

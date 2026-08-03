import { c as createComponent } from './astro-component_CPn2nF2J.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as addAttribute, r as renderTemplate, j as renderComponent } from './server_DDdEXEv2.mjs';
import 'clsx';
/* empty css                    */
import { $ as $$Button } from './Button_B3VdkWiY.mjs';

const $$Rutas = createComponent(($$result, $$props, $$slots) => {
  const rutas = [
    {
      id: "nido",
      icon: "/icons/rutas/nido.svg",
      iconBgColor: "#A975F2",
      subtitle: "0-3 meses",
      title: "Ruta Nido",
      tagline: "Bienvenido al mundo",
      content: "Adaptación, lactancia, sueño, primeros cuidados y señales importantes."
    },
    {
      id: "transiciones",
      icon: "/icons/rutas/foo.svg",
      iconBgColor: "#FFD255",
      subtitle: "4-12 meses",
      title: "Ruta Transiciones",
      tagline: "Creciendo a pasos agigantados",
      content: "Inicio de alimentación, cambios de sueño, desarrollo y nuevas rutinas."
    },
    {
      id: "independencia",
      icon: "/icons/rutas/person.svg",
      iconBgColor: "#FA6AA5",
      subtitle: "1-2 años",
      title: "Ruta Independencia",
      tagline: "El año donde todo cambia",
      content: "Pataletas, límites, autonomía, alimentación y sueño."
    },
    {
      id: "preescolar",
      icon: "/icons/rutas/oso.svg",
      iconBgColor: "#FFD255",
      subtitle: "2-5 años",
      title: "Ruta Preescolar",
      tagline: "Cuidando la salud del preescolar",
      content: "Rutinas, enfermedades frecuentes, crianza y desarrollo emocional."
    },
    {
      id: "sos",
      icon: "/icons/rutas/corazon.svg",
      iconBgColor: "#FA6AA5",
      subtitle: "",
      title: "Ruta Botón SOS",
      tagline: "Calma inmediata",
      content: "Contenido rápido para situaciones urgentes o dudas frecuentes."
    },
    {
      id: "enfermedades",
      icon: "/icons/rutas/maletin.svg",
      iconBgColor: "#A975F2",
      subtitle: "",
      title: "Ruta Enfermedades",
      tagline: "La biblioteca de la salud infantil",
      content: "Biblioteca práctica para acompañarte frente a enfermedades comunes infantiles."
    },
    {
      id: "descargables",
      icon: "/icons/rutas/documento.svg",
      iconBgColor: "#FFD255",
      subtitle: "",
      title: "Ruta Descargables",
      tagline: "PDFs, Ebook y más",
      content: "PDFs, guías, plantillas y recursos útiles para aplicar fácilmente."
    },
    {
      id: "sesiones",
      icon: "/icons/rutas/chat.svg",
      iconBgColor: "#A975F2",
      subtitle: "",
      title: "Ruta Sesión Q&A",
      tagline: "Acompañamiento en vivo",
      content: "Sesiones en vivo cada semana para resolver dudas y acompañarte."
    },
    {
      id: "talleres",
      icon: "/icons/rutas/calendar.svg",
      iconBgColor: "#FA6AA5",
      subtitle: "",
      title: "Ruta Talleres y Sesiones en Vivo",
      tagline: "Talleres y sesiones especiales",
      content: "Talleres y sesiones especiales sobre temas relevantes para cada etapa."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="rutas"> <div class="rutas-container"> <!-- Imagen superior --> <div class="rutas-header"> <img src="/images/rutas_header.png" alt="Pedia360 Rutas" class="rutas-header-image"> </div> <!-- Lista --> <div class="rutas-list"> ${rutas.map((ruta, index) => renderTemplate`<details class="ruta-card"${addAttribute(`
              --icon-color:${ruta.iconBgColor};
              --bg-color:${index % 2 === 0 ? "#FDECF3" : "#F4ECFA"};
            `, "style")}> <summary class="ruta-item">  <div class="ruta-icon-circle"> <img${addAttribute(ruta.icon, "src")}${addAttribute(ruta.title, "alt")} class="ruta-icon"> </div> <div class="ruta-divider"></div> <div class="ruta-content"> <div class="ruta-title"> ${ruta.subtitle && renderTemplate`<span class="ruta-subtitle"> ${ruta.subtitle}:
</span>`} ${" "} ${ruta.title} </div> <div class="ruta-description"> ${ruta.tagline} </div> </div> <div class="ruta-btn">
❯
</div> </summary> <div class="ruta-expand"> <p>${ruta.content}</p> </div> </details>`)} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Rutas.astro", void 0);

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

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "¿Puedo cancelar cuando quiera?",
      answer: "Sí. Puedes cancelar tu suscripción en cualquier momento."
    },
    {
      question: "¿Cuánto tiempo tendré acceso al contenido?",
      answer: "Tendrás acceso mientras mantengas tu suscripción activa. Una vez canceles, perderás acceso, pero podrás volver a suscribirte cuando quieras."
    },
    {
      question: "¿El contenido es para todas las edades?",
      answer: "Sí, tenemos rutas específicas para cada etapa: desde recién nacidos hasta niños de 5 años."
    },
    {
      question: "¿Las sesiones en vivo quedan grabadas?",
      answer: "Sí, todas las sesiones en vivo se graban y quedan disponibles en la plataforma para que puedas verlas cuando quieras."
    },
    {
      question: "¿Puedo compartir la membresía con otras mamás?",
      answer: "No, cada membresía es personal e intransferible. Cada persona debe tener su propia suscripción."
    },
    {
      question: "¿Tendré contacto con las doctoras?",
      answer: "Sí. Tendrás sesiones semanales en vivo para resolver dudas."
    },
    {
      question: "¿Puedo acceder desde cualquier país?",
      answer: "Sí. La membresía está disponible desde cualquier lugar del mundo."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq" data-astro-cid-al2ca2vr> <div class="faq-container" data-astro-cid-al2ca2vr> <h2 data-astro-cid-al2ca2vr>Preguntas Frecuentes</h2> <div class="faq-list" data-astro-cid-al2ca2vr> ${faqs.map((item) => renderTemplate`<details class="faq-item" data-astro-cid-al2ca2vr> <summary class="faq-question" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${item.question}</span> <span class="faq-icon" data-astro-cid-al2ca2vr>+</span> </summary> <div class="faq-answer" data-astro-cid-al2ca2vr> <p data-astro-cid-al2ca2vr>${item.answer}</p> </div> </details>`)} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/FAQ.astro", void 0);

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="final-cta" data-astro-cid-66itwakk> <div class="final-container" data-astro-cid-66itwakk> <!-- Mensaje principal --> <div class="final-content" data-astro-cid-66itwakk> <h2 data-astro-cid-66itwakk>
Tu hijo no viene con manual…
<span class="highlight" data-astro-cid-66itwakk>pero no tienes que vivir este proceso sola.</span> </h2> <p data-astro-cid-66itwakk>Tener claridad y acompañamiento puede hacer una diferencia enorme en cómo vives cada etapa de la crianza.</p> </div> <!-- Botón grande final --> <div class="final-button" data-astro-cid-66itwakk> ${renderComponent($$result, "Button", $$Button, { "text": "QUIERO UNIRME A LA MEMBRESÍA AHORA", "variant": "primary", "href": "#pricing", "onClick": "gtag('event', 'final_cta_click', { event_category: 'engagement', event_label: 'Final CTA Section' });", "data-astro-cid-66itwakk": true })} </div> </div> </section>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/FinalCTA.astro", void 0);

export { $$Rutas as $, $$FAQ as a, $$Pricing as b, $$FinalCTA as c };

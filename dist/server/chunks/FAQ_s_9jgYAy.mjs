import { c as createComponent } from './astro-component_CyPqXUeJ.mjs';
import 'piccolore';
import { m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './server_B64o-LQ9.mjs';
import 'clsx';
/* empty css                    */

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

export { $$Rutas as $, $$FAQ as a };

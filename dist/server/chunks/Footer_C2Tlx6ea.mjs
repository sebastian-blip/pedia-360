import { m as maybeRenderHead, s as spreadAttributes, f as addAttribute, l as renderSlot, r as renderTemplate } from './server_wOc8bkzF.mjs';
import { c as createComponent } from './astro-component_julrCl4c.mjs';
import 'clsx';
import 'piccolore';
/* empty css                    */

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-section" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Pedia360</h3> <p data-astro-cid-sz7xmlte>Pediatría a tu lado, acompañamiento basado en evidencia para mamás tranquilas.</p> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Enlaces</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#home" data-astro-cid-sz7xmlte>Inicio</a></li> <li data-astro-cid-sz7xmlte><a href="#benefits" data-astro-cid-sz7xmlte>Beneficios</a></li> <li data-astro-cid-sz7xmlte><a href="#pricing" data-astro-cid-sz7xmlte>Precios</a></li> <li data-astro-cid-sz7xmlte><a href="#faq" data-astro-cid-sz7xmlte>Preguntas Frecuentes</a></li> </ul> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Contacto</h4> <p data-astro-cid-sz7xmlte>📍 Cali, Colombia</p> <p data-astro-cid-sz7xmlte>📧 <a href="mailto:info@pedia360.com" data-astro-cid-sz7xmlte>info@pedia-360.com</a></p> </div> <div class="footer-section" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Síguenos</h4> <div class="social-links" data-astro-cid-sz7xmlte> <a href="#" aria-label="Instagram" data-astro-cid-sz7xmlte>Instagram</a> <a href="#" aria-label="Facebook" data-astro-cid-sz7xmlte>Facebook</a> <a href="#" aria-label="TikTok" data-astro-cid-sz7xmlte>TikTok</a> </div> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2026 Pedia360. Todos los derechos reservados.</p> <p data-astro-cid-sz7xmlte> <a href="/privacy" data-astro-cid-sz7xmlte>Política de Privacidad</a> |
<a href="/terms" data-astro-cid-sz7xmlte>Términos y Condiciones</a> </p> </div> </div> </footer>`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Footer.astro", void 0);

export { $$ as $, $$Footer as a };

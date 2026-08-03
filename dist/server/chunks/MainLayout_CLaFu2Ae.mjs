import { c as createComponent } from './astro-component_BNqx6DdI.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderSlot, i as renderHead, f as addAttribute } from './server_Bk-cZdte.mjs';
import 'clsx';
/* empty css                    */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "Pedia360 - Pediatría a tu lado",
    description = "Membresía para mamás con niños 0-5 años"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-ouamjn2i> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', `><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.ico"><!-- Google tag (gtag .js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-NTR3DX9ZW0"><\/script><script>
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', 'G-NTR3DX9ZW0');
    <\/script><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;600;700&display=swap" rel="stylesheet">`, "</head> <body data-astro-cid-ouamjn2i> ", "</body></html>"])), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };

import { c as createComponent } from './astro-component_Dcpiu7Gs.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate } from './server_BZyoylw2.mjs';

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    href,
    variant = "primary",
    size = "md",
    type = "button",
    onClick,
    ...rest
  } = Astro2.props;
  const isLink = !!href;
  const Tag = isLink ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...rest, "href": href, "type": !isLink ? type : void 0, "onclick": onClick, "class": `btn btn-${variant} btn-${size}`, "data-astro-cid-vnzlvqnm": true }, { "default": ($$result2) => renderTemplate`${text}` })}`;
}, "/home/sebastian-betancourh/Documentos/PEDIA 360 - ARCHIVOS-20260513T153510Z-3-001/landings/pedia360-landing/src/components/Button.astro", void 0);

export { $$Button as $ };

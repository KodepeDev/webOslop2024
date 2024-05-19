/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, l as renderSlot, u as unescapeHTML, j as Fragment } from '../astro_pLE7yKKW.mjs';
import 'kleur/colors';
import { $ as $$Icon, b as $$MainLayout, S as SITE } from './404_CfYAVDM8.mjs';
import { $ as $$AnnouncementBanner } from './about_nSTSnfQf.mjs';
import 'clsx';

const $$Astro$a = createAstro("https://screwfast.uk");
const $$MapSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { title, content, firstNumber, secondNumber, mapsrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full"> <div class="mb-4 flex w-full items-center justify-center"> <div class="flex px-3"> <div class="flex-shrink-0"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white"> <!-- Heroicon name: phone --> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path> </svg> </div> </div> <div class="ml-4"> <span class="text-lg font-extrabold leading-6 text-gray-900 dark:text-neutral-200">
Número de Contacto
</span> <br> <span class="mt-2 text-base font-bold text-gray-500 dark:text-neutral-200">${firstNumber}</span> </div> </div> <div class="flex px-3"> <div class="flex-shrink-0"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white"> <!-- Heroicon name: phone --> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp" })} </div> </div> <div class="ml-4"> <span class="text-lg font-extrabold leading-6 text-gray-900 dark:text-neutral-200">
Número de WhatsApp
</span> <br> <span class="mt-2 text-base font-bold text-gray-500 dark:text-neutral-200">${firstNumber}</span> </div> </div> </div> <div class="mb-4 overflow-hidden rounded-xl border-4 border-neutral-300 dark:border-neutral-700"> <iframe class="grayscale transition-all duration-300 hover:grayscale-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3672668475183!2d-77.00791708905597!3d-12.018217488167144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f4a3114763%3A0x6134ff058435fa87!2sOslop%20Telcom!5e0!3m2!1ses-419!2spe!4v1716150203706!5m2!1ses-419!2spe" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/MapSection.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$AuthBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/AuthBtn.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$ContactIconBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 "${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/ContactIconBlock.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$TextInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/forms/input/TextInput.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$EmailContactInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro2.props;
  return renderTemplate`<!-- Container for the label and email input field -->${maybeRenderHead()}<div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Email input field --> <input type="email" name="hs-email-contacts"${addAttribute(id, "id")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/forms/input/EmailContactInput.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$PhoneInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PhoneInput;
  const {
    label = Astro2.currentLocale === "fr" ? "Num\xE9ro de t\xE9l\xE9phone" : "Tel\xE9fono / Celular",
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="tel" name="hs-phone-number"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/forms/input/PhoneInput.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$TextAreaInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/forms/input/TextAreaInput.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const title = "Contacta con Nosotros";
  const subTitle = "\xBFTiene preguntas o quiere discutir un proyecto? Comun\xEDquese y creemos la soluci\xF3n perfecta con nuestras herramientas y servicios.";
  const formTitle = "Rellene el siguiente formulario";
  const formSubTitle = "Lo contactaremos en 1-2 d\xEDas h\xE1biles.";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Nombres", "name": "hs-firstname-contacts" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Apellidos", "name": "hs-firstname-contacts" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "Detalle", "name": "hs-about-contacts" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Enviar Mensaje" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Base de conocimientos", "content": "Explore todos los art\xEDculos de nuestra base de conocimientos.", "isLinkVisible": true, "linkTitle": "Visita gu\xEDas y tutoriales", "linkURL": "#", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "question" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explore nuestras preguntas frecuentes para obtener respuestas r\xE1pidas y claras a consultas comunes.", "isLinkVisible": true, "linkTitle": "Visita FAQ", "linkURL": "#", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visitanos en:", "content": "San Juan de Lurigancho - Lima Per\xFA", "isAddressVisible": true, "addressContent": "Jr Cidras 1237, Urb. Los Jardines" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Cont\xE1ctenos por correo electr\xF3nico", "content": "\xBFPrefieres la palabra escrita? Env\xEDanos un correo electr\xF3nico a", "isLinkVisible": true, "linkTitle": "osloptelcom@gmail.com", "linkURL": "#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/ContactSection.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const pageTitle = `Contacto | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://osloptelcom.com/contact",
    url: "https://osloptelcom.com/contact",
    name: "Cont\xE1ctanos| Oslop Telcom",
    description: "Quieres contratar a los t\xE9cnicos de Oslop Telcom para una instalaci\xF3n o mantenimiento de aire acondicionado",
    isPartOf: {
      "@type": "WebSite",
      url: "https://osloptelcom.com",
      name: "Oslop Telcom",
      description: "Oslop Telcom ofrecemos los mejores servicios de Aire Acondicionado refrigeraci\xF3n y calefacci\xF3n."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "WhatsApp", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ${renderComponent($$result2, "MapSection", $$MapSection, { "firstNumber": "+51 936 802 062" })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/contact.astro", void 0);

const $$file$1 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/contact.astro";
const $$url$1 = "/contact";

const contact$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$ContactSectionFr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactSectionFr;
  const title = "Contactez-nous";
  const subTitle = "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et laissons-nous \xE9laborer la solution parfaite avec nos outils et services.";
  const formTitle = "Remplissez le formulaire ci-dessous";
  const formSubTitle = "Nous vous r\xE9pondrons dans un d\xE9lai de 1 \xE0 2 jours ouvrables.";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Pr\xE9nom", "name": "hs-firstname-contacts" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Nom", "name": "hs-firstname-contacts" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "D\xE9tails", "name": "hs-about-contacts" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Envoyer un message" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Base de connaissances", "content": "Parcourez tous nos articles de base de connaissances.", "isLinkVisible": true, "linkTitle": "Visiter les guides et tutoriels", "linkURL": "#", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "question" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Explorez notre FAQ pour des r\xE9ponses rapides et claires aux questions courantes.", "isLinkVisible": true, "linkTitle": "Visiter la FAQ", "linkURL": "#", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Visitez notre bureau", "content": "ScrewFast UK", "isAddressVisible": true, "addressContent": "72 Union Terrace, E10 4PE London" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contactez-nous par e-mail", "content": "Pr\xE9f\xE9rez-vous le texte \xE9crit ? Envoyez-nous un e-mail \xE0", "isLinkVisible": true, "linkTitle": "support@screwfast.uk", "linkURL": "#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/fr/ContactSection_fr.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk//fr/contact",
    url: "https://screwfast.uk//fr/contact",
    name: "Nous Contacter | ScrewFast",
    description: "Vous avez des questions ou souhaitez discuter d'un projet ? Contactez-nous et \xE9laborons ensemble la solution parfaite avec nos outils et services.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr/",
      name: "ScrewFast",
      description: "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSectionFr, {})} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/contact.astro", void 0);

const $$file = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/contact.astro";
const $$url = "/fr/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { contact as a, contact$1 as c };

/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, u as unescapeHTML, j as Fragment } from '../astro_pLE7yKKW.mjs';
import 'kleur/colors';
import { a as $$Image, b as $$MainLayout, S as SITE } from './404_CfYAVDM8.mjs';
import { g as getRelativeLocaleUrl, t as tools } from './index_Cy29_nSd.mjs';
import { $ as $$PrimaryCTA } from './__BgoDntBO.mjs';
import 'clsx';
import { $ as $$AnnouncementBanner } from './about_nSTSnfQf.mjs';

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$MainSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/MainSection.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$LeftSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LeftSection;
  const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } = Astro2.props;
  return renderTemplate`<!-- The root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"> <!-- The Image component which renders the image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": img, "alt": imgAlt, "draggable": "false", "format": "avif" })} <!-- The container for title, subtitle, and optional CTA button --> <div class="mt-4 md:mt-0"> <!-- The title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- The subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditionally render the Primary CTA button if btnExists is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/LeftSection.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$RightSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RightSection;
  const {
    title,
    subTitle,
    btnExists,
    btnTitle,
    btnURL,
    single,
    imgOne,
    imgOneAlt,
    imgTwo,
    imgTwoAlt
  } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <!-- Title of the section --> <h2 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle of the section --> <p class="mb-4 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-lg"> ${subTitle} </p> <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true --> ${btnExists ? renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })}` : null} </div> <!-- Conditionally render one or two images based on 'single' property --> ${single ? renderTemplate`<div class="mt-8"> <!-- Single image --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-lg", "src": imgOne, "alt": imgOneAlt, "format": "avif" })} </div>` : renderTemplate`<div class="mt-8 grid grid-cols-2 gap-4"> <!-- First image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": imgOne, "alt": imgOneAlt, "draggable": "false", "format": "avif" })} <!-- Second image in a two-image layout --> ${renderComponent($$result, "Image", $$Image, { "class": "mt-4 w-full rounded-xl lg:mt-10", "src": imgTwo, "alt": imgTwoAlt, "draggable": "false", "format": "avif" })} </div>`} </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/RightSection.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$StatsBig = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StatsBig;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for the title and subtitle -->${maybeRenderHead()}<div class="lg:pe-6 xl:pe-12"> <p class="text-6xl font-bold leading-10 text-orange-400 dark:text-orange-300"> ${title} </p> <p class="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">${subTitle}</p> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/StatsBig.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$StatsSmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StatsSmall;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`<!-- Container for title and subtitle -->${maybeRenderHead()}<div> <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">${title}</p> <p class="mt-1 text-neutral-600 dark:text-neutral-400">${subTitle}</p> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/StatsSmall.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$FeaturesStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturesStats;
  const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Main title --> <h2 class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h2> <!-- Subtitle --> ${subTitle && renderTemplate`<p class="mb-16 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p>`} </div> <!-- Grid container for statistics --> <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12"> <!-- First grid item, showing a big statistics --> <div class="lg:col-span-4"> ${renderComponent($$result, "StatsBig", $$StatsBig, { "title": mainStatTitle, "subTitle": mainStatSubTitle })} </div> <!-- Second grid item, showing multiple small statistics --> ${stats && renderTemplate`<div class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:before:dark:bg-neutral-700"> <div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3"> <!-- Iterate over the 'stats' array and create a 'StatsSmall' component for each object in the array --> ${stats.map((stat) => renderTemplate`${renderComponent($$result, "StatsSmall", $$StatsSmall, { "title": stat.stat, "subTitle": stat.description })}`)} </div> </div>`} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/features/FeaturesStats.astro", void 0);

const blueprints = new Proxy({"src":"/_astro/blueprints-image.DxAt2gto.avif","width":1333,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/blueprints-image.avif";
							}
							
							return target[name];
						}
					});

const personWorking = new Proxy({"src":"/_astro/person-working.aUGgRiE_.avif","width":1334,"height":2000,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/person-working.avif";
							}
							
							return target[name];
						}
					});

const beforeAfter = new Proxy({"src":"/_astro/before-after.BntBToq6.avif","width":2048,"height":1366,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/before-after.avif";
							}
							
							return target[name];
						}
					});

const constructionWorkers = new Proxy({"src":"/_astro/construction-workers.XhU7Ouf4.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/construction-workers.avif";
							}
							
							return target[name];
						}
					});

const aerialView = new Proxy({"src":"/_astro/aerial-view.CeV30CXX.avif","width":1920,"height":1282,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/aerial-view.avif";
							}
							
							return target[name];
						}
					});

const usingTools = new Proxy({"src":"/_astro/using-tools.BrEE8t5H.avif","width":1920,"height":1280,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/using-tools.avif";
							}
							
							return target[name];
						}
					});

const progressBuilding = new Proxy({"src":"/_astro/progress-building.Cjca0suI.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/progress-building.avif";
							}
							
							return target[name];
						}
					});

const underConstruction = new Proxy({"src":"/_astro/under-construction.DfISh1yq.avif","width":1920,"height":2876,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/under-construction.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$Services$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services$1;
  const articles = [
    {
      isRightSection: true,
      title: "Fournir des conseils d'experts",
      subTitle: "Se lancer dans un projet de construction peut \xEAtre accablant. Avec nos services de consultation professionnelle, nous vous guidons \xE0 chaque \xE9tape, en veillant \xE0 ce que vous preniez des d\xE9cisions \xE9clair\xE9es. Que vous soyez un passionn\xE9 du bricolage ou un entrepreneur qualifi\xE9, nos experts sont l\xE0 pour vous offrir des conseils sur mesure sur la s\xE9lection de produits, l'envergure du projet et la conformit\xE9 aux r\xE9glementations locales.",
      single: false,
      imgOne: blueprints,
      imgOneAlt: "Plans et tablette num\xE9rique avec des plans de construction.",
      imgTwo: personWorking,
      imgTwoAlt: "Personne travaillant au bureau"
    },
    {
      isRightSection: false,
      title: "Transformer les conceptions en r\xE9alit\xE9",
      subTitle: "Nos artisans qualifi\xE9s apportent pr\xE9cision et excellence \xE0 chaque projet de construction. Des installations mineures aux travaux structuraux substantiels, ScrewFast offre des services de construction fiables pour concr\xE9tiser vos plans. Nous assurons les normes les plus \xE9lev\xE9es de s\xE9curit\xE9 et de savoir-faire, en utilisant des outils et des mat\xE9riaux de haute qualit\xE9 de notre vaste inventaire.",
      img: beforeAfter,
      imgAlt: "Chantier de construction avant et apr\xE8s",
      btnExists: true,
      btnTitle: "En savoir plus",
      btnURL: "#"
    },
    {
      isRightSection: true,
      title: "Naviguer dans les projets avec une supervision professionnelle",
      subTitle: "La gestion de projet efficace est au c\u0153ur de toute construction r\xE9ussie. ScrewFast offre une planification approfondie et des services de gestion solides qui maintiennent votre projet dans les d\xE9lais et dans le budget. Laissez-nous g\xE9rer les complexit\xE9s de la coordination des flux de travail, de l'allocation des ressources et de la communication avec les parties prenantes pendant que vous vous concentrez sur votre vision.",
      single: false,
      imgOne: constructionWorkers,
      imgOneAlt: "Ouvriers du b\xE2timent orchestrant un projet",
      imgTwo: aerialView,
      imgTwoAlt: "Vue a\xE9rienne d'une construction g\xE9r\xE9e"
    },
    {
      isRightSection: false,
      title: "Garantir des performances durables",
      subTitle: "Notre engagement envers votre projet ne s'arr\xEAte pas \xE0 son ach\xE8vement. ScrewFast propose des services de maintenance et de support continus pour assurer la long\xE9vit\xE9 et les performances de votre construction. Des v\xE9rifications r\xE9guli\xE8res \xE0 l'assistance en cas d'urgence, notre \xE9quipe r\xE9active est l\xE0 pour vous fournir un soutien sans faille.",
      img: usingTools,
      imgAlt: "Homme en gilet orange et noir portant un casque blanc tenant un outil \xE9lectrique jaune et noir"
    },
    {
      isRightSection: true,
      title: "\xC9laboration de strat\xE9gies sur mesure pour des d\xE9fis uniques",
      subTitle: "Pour nos clients d'entreprise de plus grande envergure, ScrewFast propose des solutions personnalis\xE9es con\xE7ues pour r\xE9pondre \xE0 des d\xE9fis sp\xE9cifiques de l'industrie. En comprenant vos besoins uniques, nous concevons des strat\xE9gies sur mesure visant \xE0 optimiser vos op\xE9rations, \xE0 am\xE9liorer l'efficacit\xE9 et \xE0 faire avancer votre entreprise.",
      single: false,
      imgOne: progressBuilding,
      imgOneAlt: "Structure de b\xE2timent en cours de construction",
      imgTwo: underConstruction,
      imgTwoAlt: "B\xE2timent marron et gris en construction",
      btnExists: true,
      btnTitle: "Lire la suite",
      btnURL: "#"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Services | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/services",
    url: "https://screwfast.uk/fr/services",
    name: "Services de Consultation d'Experts | ScrewFast",
    description: "Unissant l'expertise \xE0 votre vision, ScrewFast fournit un service exceptionnel et des solutions compl\xE8tes dans le secteur du mat\xE9riel et de la construction, de la consultation \xE0 l'ach\xE8vement du projet.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Unir l'expertise \xE0 votre vision", "subTitle": "Chez ScrewFast, nous sommes fiers de fournir des solutions compl\xE8tes et un service exceptionnel dans l'industrie du mat\xE9riel et de la construction. Notre \xE9quipe exp\xE9riment\xE9e est d\xE9di\xE9e \xE0 soutenir votre projet de sa conception \xE0 son ach\xE8vement avec une gamme de services sp\xE9cialis\xE9s.", "btnExists": true, "btnTitle": "Planifier une consultation", "btnURL": getRelativeLocaleUrl("fr", "#") })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "Par les chiffres", "subTitle": "Notre engagement envers la qualit\xE9 et la fiabilit\xE9 est \xE9vident dans chaque projet que nous entreprenons. Chez ScrewFast, nous nous engageons \xE0 fournir des services de premier plan dans l'industrie qui garantissent que vos projets de construction sont con\xE7us pour durer.", "mainStatTitle": "96%", "mainStatSubTitle": "de nos clients \xE9valuent leur exp\xE9rience avec ScrewFast comme exceptionnelle", "stats": [
    {
      stat: "99,8%",
      description: "taux de r\xE9alisation de projets"
    },
    {
      stat: "5 000+",
      description: "installations r\xE9ussies"
    },
    {
      stat: "85%",
      description: "croissance client ann\xE9e apr\xE8s ann\xE9e"
    }
  ] })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/services.astro", void 0);

const $$file$1 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/services.astro";
const $$url$1 = "/fr/services";

const services$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const instalacionDos = new Proxy({"src":"/_astro/instalacion_de_aire_servicio_2.BO-R_GvU.jpg","width":794,"height":1123,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/instalacion_de_aire_servicio_2.jpg";
							}
							
							return target[name];
						}
					});

const mantenimiento = new Proxy({"src":"/_astro/mantenimiento_aire_servicio.DgT7S645.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/mantenimiento_aire_servicio.png";
							}
							
							return target[name];
						}
					});

const reparacionUno = new Proxy({"src":"/_astro/reparacion_servicio_1.DUs2xYRq.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/reparacion_servicio_1.png";
							}
							
							return target[name];
						}
					});

const reparacionDos = new Proxy({"src":"/_astro/reparacion_servicio_2.DZd7r6HE.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/reparacion_servicio_2.png";
							}
							
							return target[name];
						}
					});

const calefaccion = new Proxy({"src":"/_astro/calefaccion_servicio_1.Bu-XlZwU.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/calefaccion_servicio_1.png";
							}
							
							return target[name];
						}
					});

const monoxidoUno = new Proxy({"src":"/_astro/monoxido_servicio_1.DMZikvGX.jpg","width":794,"height":1123,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/monoxido_servicio_1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://screwfast.uk");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const articles = [
    {
      isRightSection: true,
      title: "Instalaci\xF3n de Aire Acondicionado",
      subTitle: "Ya sea que necesite un sistema de enfriamiento de m\xFAltiples etapas o una nueva unidad que funcione m\xE1s silenciosamente que la anterior, nuestros t\xE9cnicos pueden ayudarlo a planificar, implementar y mantener su nueva unidad de aire acondicionado, todo ello basado en precios asequibles y soporte t\xE9cnico s\xF3lido.",
      single: false,
      imgOne: tools,
      imgOneAlt: "Blueprints and digital tablet with construction plans.",
      imgTwo: instalacionDos,
      imgTwoAlt: "Person working in the office"
    },
    {
      isRightSection: false,
      title: "Mantenimiento Preventivo",
      subTitle: "Para prolongar la vida \xFAtil y el rendimiento de tu sistema de aire acondicionado, ofrecemos servicios de mantenimiento preventivo peri\xF3dico. Nuestros t\xE9cnicos calificados realizar\xE1n inspecciones exhaustivas y ajustes necesarios para mantener tu equipo en condiciones \xF3ptimas.",
      img: mantenimiento,
      imgAlt: "Construction site before and after",
      btnExists: false,
      btnTitle: "Learn More",
      btnURL: "#"
    },
    {
      isRightSection: true,
      title: "Reparaciones R\xE1pidas y Efectivas",
      subTitle: "\xBFExperimentas problemas con tu sistema de aire acondicionado? No te preocupes, nuestro equipo est\xE1 disponible para proporcionarte reparaciones r\xE1pidas y efectivas. Diagn\xF3stico preciso, piezas de repuesto de calidad y atenci\xF3n profesional garantizan resultados satisfactorios.",
      single: false,
      imgOne: reparacionUno,
      imgOneAlt: "Construction workers orchestrating a project",
      imgTwo: reparacionDos,
      imgTwoAlt: "Aerial view of managed construction"
    },
    {
      isRightSection: false,
      title: "Instalaci\xF3n de Calefacci\xF3n",
      subTitle: "Oslop Telcom ofrece un equipo de t\xE9cnicos en instalaci\xF3n de calefacci\xF3n especializados y certificados para atender sus necesidades de calefacci\xF3n. Somos una empresa de calefacci\xF3n y aire acondicionado a nivel nacional que brinda estos servicios de instalaci\xF3n en todo el pa\xEDs.",
      img: calefaccion,
      imgAlt: "Man in orange and black vest wearing white helmet holding yellow and black power tool"
    },
    {
      isRightSection: true,
      title: "Extraccion de Monoxido",
      subTitle: "La extracci\xF3n de mon\xF3xido de carbono (CO2) de las playas de estacionamientos, aparcamientos, garajes y s\xF3tanos. Tiene como objetivo garantizar la no acumulaci\xF3n de mon\xF3xido de carbono en los estacionamientos, garantizar la evacuaci\xF3n en caso de incendios y mantener los gases emitidos por los veh\xEDculos a niveles m\xEDnimos.",
      single: false,
      imgOne: monoxidoUno,
      imgOneAlt: "In progress building structure",
      imgTwo: underConstruction,
      imgTwoAlt: "Brown and gray building under construction",
      btnExists: false,
      btnTitle: "Read more",
      btnURL: "#"
    }
  ];
  const pageTitle = `Servicios | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://osloptelcom.com/services",
    url: "https://osloptelcom.com/services",
    name: "Expertos en Aire Acondicionado | Oslop Telcom",
    description: "Brindamos una gran variedad de servicios de aire acondicionado de la mas alta calidad para hogar, oficina o centros comerciales.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://osloptelcom.com",
      name: "Oslop Telcom",
      description: "Oslop Telcom ofrecemos los mejores servicios de Aire Acondicionado refrigeraci\xF3n y calefacci\xF3n."
    },
    inLanguage: "es_ES"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "WhatsApp", "url": "https://github.com/mearashadowfax/ScrewFast" })}  ${renderComponent($$result2, "MainSection", $$MainSection, { "title": "Expertos en Aire Acondicionado y Calefacci\xF3n", "subTitle": "No hay nada tan agradable como contar con los expertos de la regi\xF3n trabajando en su unidad de aire acondicionado. Debido a que su sistema de calefacci\xF3n y refrigeraci\xF3n es una inversi\xF3n costosa, es imperativo que solo los t\xE9cnicos m\xE1s calificados realicen el mantenimiento de su unidad y nadie puede superar la verdadera experiencia de Oslop Telcom. Puede confiar en nosotros para sus servicios de reparaci\xF3n, instalaci\xF3n y mantenimiento de HVAC.", "btnExists": true, "btnTitle": "Contacta Ahora", "btnURL": "/contact" })}  ${articles.map((article) => {
    return article.isRightSection ? renderTemplate`${renderComponent($$result2, "RightSection", $$RightSection, { "title": article.title, "subTitle": article.subTitle, "single": article.single, "imgOne": article.imgOne, "imgOneAlt": article.imgOneAlt, "imgTwo": article.imgTwo, "imgTwoAlt": article.imgTwoAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}` : renderTemplate`${renderComponent($$result2, "LeftSection", $$LeftSection, { "title": article.title, "subTitle": article.subTitle, "img": article.img, "imgAlt": article.imgAlt, "btnExists": article.btnExists, "btnTitle": article.btnTitle, "btnURL": article.btnURL })}`;
  })} ${renderComponent($$result2, "FeaturesStats", $$FeaturesStats, { "title": "Acelere sus proyectos", "subTitle": "En Oslop Telcom, estamos listos para brindarte soluciones personalizadas y un servicio excepcional que superar\xE1 tus expectativas.", "mainStatTitle": "99%", "mainStatSubTitle": "de nuestros clientes califican su experiencia con Oslop Telcom como excepcional", "stats": [
    {
      stat: "100%",
      description: "tasa de finalizaci\xF3n del proyecto"
    },
    {
      stat: "500+",
      description: "instalaciones exitosas"
    },
    {
      stat: "85%",
      description: "Crecimiento de clientes a\xF1o tras a\xF1o"
    }
  ] })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/services.astro", void 0);

const $$file = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/services.astro";
const $$url = "/services";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { services as a, services$1 as s };

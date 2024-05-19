/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, k as renderScript, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, j as Fragment } from '../astro_pLE7yKKW.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$Icon, b as $$MainLayout, S as SITE } from './404_CfYAVDM8.mjs';
import { $ as $$PrimaryCTA } from './__BgoDntBO.mjs';
import 'clsx';

const $$Astro$a = createAstro("https://screwfast.uk");
const $$AnnouncementBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  const facebookUrl = "https://www.facebook.com/profile.php?id=100047636532038";
  const facebookTitle = "Facebook";
  const url2 = "wa.link/tigzud";
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-2xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-sm dark:bg-neutral-200"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-50 backdrop-brightness-75 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-700 dark:backdrop-brightness-100 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none sm:backdrop-brightness-100"${addAttribute(facebookUrl, "href")} target="_blank"> ${facebookTitle} <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></svg> </a> <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-50 backdrop-brightness-75 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-700 dark:backdrop-brightness-100 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none sm:backdrop-brightness-100"${addAttribute(url2, "href")} target="_blank"> ${btnTitle} <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"> <path style="fill:#EDEDED;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
	S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"></path> <path style="fill:#55CD6C;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
	c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
	c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"></path> <path style="fill:#FEFEFE;" d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
	c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
	c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
	c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
	c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
	l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"></path> </svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/banners/AnnouncementBanner.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$SecondaryCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800", "src": src, "alt": alt, "inferSize": true, "loading": "eager" })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/avatars/Avatar.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$FullStar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FullStar;
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/stars/FullStar.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$HalfStar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HalfStar;
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/stars/HalfStar.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$ReviewComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5"> <!-- Avatar Group --> <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs font-medium uppercase leading-none text-white">7k+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div> <!-- Review Ratings --> <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1"> <!-- Your star ratings --> ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)} <!-- Adding additional half-star --> ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/ReviewComponent.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-5xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews })}` : ""} </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-100 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/landing/HeroSection.astro", void 0);

const heroAboutImage = new Proxy({"src":"/_astro/feature_about.DQIRYJRm.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/feature_about.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$SectionContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionContent;
  const { title, content, contentTwo } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-2 px-4 py-5 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto max-w-screen-lg"> <!-- Section title --> <h1 class="mb-8 text-balance text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> <!-- Section subtitle --> <p class="mb-8 text-justify font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </p> <p class="mb-8 text-justify font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(contentTwo)}` })} </p> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/SectionContent.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$GithubBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-green-400 dark:focus:outline-none";
  const hoverClasses = "hover:shadow-2xl hover:shadow-green-500";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp" })} ${title} </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$HeroSectionAlt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Contacta por WhatsApp";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-3xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = `Sobre Nosotros | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://osloptelcom.com/about",
    url: "https://osloptelcom.com/about",
    name: "Sobre Nosotros | Oslop Telcom",
    description: "Conoce acerca de los servicios de aire acondicionado mas populares en Per\xFA.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://osloptelcom.com",
      name: "Oslop Telcom",
      description: "Oslop Telcom ofrecemos los mejores servicios de Aire Acondicionado refrigeraci\xF3n y calefacci\xF3n."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "WhatsApp", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `<span class="text-orange-500 dark:text-orange-400">Oslop Telcom</span> Expertos en Refrigeraci\xF3n y Calefacci\xF3n`, "subTitle": "En Oslop Telcom, somos una Empresa de Aire Acondicionado que cuenta con m\xE1s de 15 a\xF1os de experiencia  laboral enfocada en brindar servicios y soluciones integrales en Sistemas de Ventilaci\xF3n Mec\xE1nica, Sistemas de Climatizaci\xF3n, Refrigeraci\xF3n, etc. Como objetivo base sabemos que, nuestra prioridad es la buena atenci\xF3n puesto que, sabemos que son ustedes nuestros pilares para alcanzar nuestras metas.", "primaryBtn": "Contancta Ahora", "primaryBtnURL": "/contact", "src": heroAboutImage, "alt": "Instalando un aire acondicionado en un hogar u oficina" })} ${renderComponent($$result2, "SectionContent", $$SectionContent, { "title": `\xBFPor qu\xE9 elegirnos como su contratista de HVAC en <span class="text-orange-500 dark:text-orange-400">Oslop Telcom</span>?`, "content": "Le ofrecemos soluciones integrales para climatizaci\xF3n las 24 Hrs. del d\xEDa, con soluciones de aplicaci\xF3n avanzada y fiable. No s\xF3lo brindamos el desarrollo del proyecto y su implementaci\xF3n, sino que tenemos como objetivo mantener a los equipos completamente operativos y en buenas condiciones durante todos los d\xEDas del a\xF1o. Para ello se contempla realizar peri\xF3dicamente mantenimientos preventivos y atender servicios correctivos en base a las necesidades de los equipos.", "contentTwo": "Contamos con experimentados ingenieros y t\xE9cnicos, cuya trayectoria en sistemas de instalaci\xF3n de aire acondicionado y ventilaci\xF3n permite suministrar y regular el ambiente de los espacios en diversas variantes de climatizaci\xF3n, humidificaci\xF3n, deshumidificaci\xF3n y calefacci\xF3n." })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "\xA1No esperes m\xE1s para disfrutar del confort que te mereces!", "subTitle": "No dejes que el calor te agobie ni que el aire viciado afecte tu bienestar. En Oslop Telcom, estamos listos para brindarte soluciones de aire acondicionado que transformar\xE1n tu espacio en un refugio de frescura y comodidad.", "url": "https://wa.me:+51958826413" })} ${maybeRenderHead()}<h5 class="mb-10 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
Nuestra Misión y Visión
</h5> <div class="mx-auto mb-10 grid max-w-screen-lg grid-cols-2 gap-4"> <a class="bg-neutral block max-w-md rounded-lg border border-gray-200 p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"> <h5 class="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
Misión
</h5> <p class="text-justify font-normal text-gray-700 dark:text-gray-400">
En Oslop Telcom, nuestra misión es proporcionar soluciones integrales de
        aire acondicionado y calefacción que mejoren la calidad de vida de
        nuestros clientes. Nos dedicamos a ofrecer servicios de instalación,
        mantenimiento y reparación con un compromiso inquebrantable con la
        excelencia, la eficiencia energética y la satisfacción del cliente.
        Nuestro objetivo es crear ambientes confortables y saludables en hogares
        y oficinas, combinando tecnología de punta con un servicio personalizado
        y profesional.
</p> </a> <a class="bg-neutral block max-w-md rounded-lg border border-gray-200 p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"> <h5 class="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
Visión
</h5> <p class="text-justify font-normal text-gray-700 dark:text-gray-400">
Nuestra visión en Oslop Telcom es ser la empresa líder en el sector de
        climatización, reconocida por nuestra innovación, calidad y
        responsabilidad ambiental. Aspiramos a expandir nuestras operaciones,
        ofreciendo soluciones sostenibles y eficientes que contribuyan al
        bienestar de nuestras comunidades y al cuidado del planeta. Nos
        esforzamos por mantenernos a la vanguardia de la tecnología y el
        servicio al cliente, estableciendo nuevos estándares de excelencia en la
        industria del aire acondicionado y calefacción.
</p> </a> </div> ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/about.astro", void 0);

const $$file = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AnnouncementBanner as $, $$SecondaryCTA as a, $$HeroSection as b, $$HeroSectionAlt as c, about as d };

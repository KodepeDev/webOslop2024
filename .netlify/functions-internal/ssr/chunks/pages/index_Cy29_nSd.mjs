/* empty css                          */
import { A as AstroError, v as MissingLocale, e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute, u as unescapeHTML, j as Fragment, l as renderSlot } from '../astro_pLE7yKKW.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$Icon, b as $$MainLayout, S as SITE, h as heroImage$1 } from './404_CfYAVDM8.mjs';
import { f as formatDate, $ as $$PrimaryCTA, a as $$AvatarBlogLarge, g as getCollection } from './__BgoDntBO.mjs';
import { a as $$SecondaryCTA, $ as $$AnnouncementBanner, b as $$HeroSection, c as $$HeroSectionAlt } from './about_nSTSnfQf.mjs';
import { e as appendForwardSlash, j as joinPaths } from '../astro/assets-service_BaQWmCOp.mjs';
import 'clsx';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    return appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    return joinPaths(...pathsToJoin);
  }
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

const $$Astro$q = createAstro("https://screwfast.uk");
const $$AvatarBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$AvatarBlog;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "size-[46px] rounded-full border-2 border-neutral-50", "src": blogEntry.data.authorImage, "alt": blogEntry.data.authorImageAlt, "draggable": "false", "format": "avif" })} </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/avatars/AvatarBlog.astro", void 0);

const $$Astro$p = createAstro("https://screwfast.uk");
const $$CardBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$CardBlog;
  const { blogEntry, blogLocale = "" } = Astro2.props;
  return renderTemplate`<!-- The following anchor tag is the main container for the card.
     It's a link to the blog post detailed page.
     The data-astro-prefetch is an Astro specific Dynamic HTML feature,
     which automatically prefetches the linked page to speed up navigation. -->${maybeRenderHead()}<a class="group relative block rounded-xl outline-none ring-zinc-500 transition duration-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(blogLocale !== "" ? `/${blogLocale}/blog/${blogEntry.slug}/` : `/blog/${blogEntry.slug}/`, "href")} data-astro-prefetch> <!-- The container for the blog post's cover image. Uses astro:assets' Image for image source --> <div class="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-neutral-900/[.7]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "loading": "eager", "format": "avif" })} </div> <!-- The container for the blog author's avatar and associated metadata (author name and publication date) --> <div class="absolute inset-x-0 top-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <div class="flex items-center"> ${renderComponent($$result, "AvatarBlog", $$AvatarBlog, { "blogEntry": blogEntry })} <div class="ms-2.5 sm:ms-4"> <h4 class="font-bold text-neutral-50"> ${blogEntry.data.author} </h4> <p class="text-xs text-neutral-50/[.8]"> ${formatDate(blogEntry.data.pubDate)} </p> </div> </div> </div> </div> <!-- The container for the blog post's title and description --> <div class="absolute inset-x-0 bottom-0 z-10"> <div class="flex h-full flex-col p-4 sm:p-6"> <h3 class="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl"> ${blogEntry.data.title} </h3> <p class="mt-2 text-pretty text-neutral-50/[.8]"> ${blogEntry.data.description} </p> </div> </div> </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardBlog.astro", void 0);

const $$Astro$o = createAstro("https://screwfast.uk");
const $$CardBlogRecent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$CardBlogRecent;
  const { blogEntry, recentBlogLocale = "" } = Astro2.props;
  return renderTemplate`<!-- Root container, which is divided into 2 grid column layout for larger screens -->${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 sm:items-center"> <!-- Container for the blog post's cover image --> <div class="sm:order-2"> <div class="relative rounded-lg pt-[50%] sm:pt-[100%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "loading": "eager", "format": "avif" })} </div> </div> <!-- Container for the blog post's heading, author avatar, author's role, and read more button --> <div class="sm:order-1"> <!-- Blog title which is also a hyperlink to the blog detail page  --> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight"> <a class="outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 focus-visible:ring dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(recentBlogLocale !== "" ? `/${recentBlogLocale}/blog/${blogEntry.slug}/` : `/blog/${blogEntry.slug}/`, "href")}> ${blogEntry.data.description} </a> </h2> <!-- Container for the author's avatar and metadata --> <div class="mt-6 flex items-center sm:mt-10"> ${renderComponent($$result, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": blogEntry })} <div class="ms-3 sm:ms-4"> <p class="font-bold text-neutral-800 dark:text-neutral-200 sm:mb-1"> ${blogEntry.data.author} </p> <p class="text-xs text-neutral-500"> ${blogEntry.data.role} </p> </div> </div> <!-- Read More button which is a link to the blog post detailed page --> <div class="mt-5"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "url": recentBlogLocale !== "" ? `/${recentBlogLocale}/blog/${blogEntry.slug}/` : `/blog/${blogEntry.slug}/`, "title": "Read More", "data-astro-prefetch": true })} </div> </div> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardBlogRecent.astro", void 0);

const $$Astro$n = createAstro("https://screwfast.uk");
const $$CardInsight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$CardInsight;
  const { insightEntry } = Astro2.props;
  return renderTemplate`<!-- The anchor tag is the root container for the "Insight" card. It links to the insight detail page. -->${maybeRenderHead()}<a class="group outline-none rounded-xl ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(`/insights/${insightEntry.slug}/`, "href")}> <!-- This is the container for the insight's cover image. --> <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105", "src": insightEntry.data.cardImage, "alt": insightEntry.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <!-- This is the container for the insight's title and description. --> <div class="mt-7"> <!-- The title of the insight --> <h3 class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"> ${insightEntry.data.title} </h3> <!-- The description of the insight --> <p class="mt-3 text-neutral-600 dark:text-neutral-400"> ${insightEntry.data.description} </p> <!-- The "Read More" hyperlink going to the full insight. With an arrow icon --> <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300">
Read more
${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRightStatic" })} </p> </div> </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardInsight.astro", void 0);

const $$Astro$m = createAstro("https://screwfast.uk");
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Index$5;
  const englishBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  const blogPosts = englishBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = await getCollection("insights");
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Your Gateway to Construction Excellence";
  const subTitle = "Explore the latest news, tips, and insights from ScrewFast to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.";
  const secondTitle = "Insights";
  const secondSubTitle = "Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts. ";
  const pageTitle = `Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/blog",
    url: "https://screwfast.uk/blog",
    name: "Blog | ScrewFast",
    description: "Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!--Blog posts grid--> <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry })}`)} </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost })} </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry })}`)} </div> </section> ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/blog/index.astro", void 0);

const $$file$5 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/blog/index.astro";
const $$url$5 = "/blog";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$l = createAstro("https://screwfast.uk");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Index$4;
  const frenchBlogEntries = await getCollection("blog", ({ id }) => {
    return id.startsWith("fr/");
  });
  const blogPosts = frenchBlogEntries.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const insightPosts = await getCollection("insights");
  const mostRecentPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const title = "Votre Passerelle vers l'Excellence en Construction";
  const subTitle = "Explorez les derni\xE8res actualit\xE9s, astuces et analyses de ScrewFast pour am\xE9liorer vos projets de construction. Des mises en avant de produits aux strat\xE9gies de gestion de projet, notre blog est votre ressource incontournable pour tout ce qui concerne les outils et la construction.";
  const secondTitle = "Insights";
  const secondSubTitle = "Restez \xE0 jour avec les derni\xE8res tendances et \xE9volutions de l'industrie de la construction gr\xE2ce aux analyses de l'\xE9quipe d'experts de ScrewFast.";
  const pageTitle = `Blog | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/blog",
    "url": "https://screwfast.uk/fr/blog",
    "name": "Blog | ScrewFast",
    "description": "Restez inform\xE9 des derni\xE8res tendances et \xE9volutions dans le secteur de la construction avec les analyses de l'\xE9quipe d'experts de ScrewFast.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk/fr",
      "name": "ScrewFast",
      "description": "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    "inLanguage": "fr"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!--Blog posts grid--> <div class="grid gap-6 lg:grid-cols-2"> ${otherPosts.map((blogEntry) => renderTemplate`${renderComponent($$result2, "CardBlog", $$CardBlog, { "blogEntry": blogEntry, "blogLocale": "fr" })}`)} </div> </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> ${renderComponent($$result2, "CardBlogRecent", $$CardBlogRecent, { "blogEntry": mostRecentPost, "recentBlogLocale": "fr" })} </section>  <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${secondTitle} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${secondSubTitle} </p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${insightPosts.map((insightEntry) => renderTemplate`${renderComponent($$result2, "CardInsight", $$CardInsight, { "insightEntry": insightEntry })}`)} </div> </section> ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/blog/index.astro", void 0);

const $$file$4 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/blog/index.astro";
const $$url$4 = "/fr/blog";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$k = createAstro("https://screwfast.uk");
const $$CardSmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- A clickable card that leads to the details of the product-->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardSmall.astro", void 0);

const $$Astro$j = createAstro("https://screwfast.uk");
const $$CardWide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:col-span-2 md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardWide.astro", void 0);

const featureImage = new Proxy({"src":"/_astro/feature_image.Dqbv84jT.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/feature_image.png";
							}
							
							return target[name];
						}
					});

const $$Astro$i = createAstro("https://screwfast.uk");
const $$FeaturesStatsAlt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$FeaturesStatsAlt;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": featureImage, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/features/FeaturesStatsAlt.astro", void 0);

const $$Astro$h = createAstro("https://screwfast.uk");
const $$AvatarTestimonialSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AvatarTestimonialSection;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/avatars/AvatarTestimonialSection.astro", void 0);

const $$Astro$g = createAstro("https://screwfast.uk");
const $$TestimonialsSectionAlt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> ${renderComponent($$result, "AvatarTestimonialSection", $$AvatarTestimonialSection, { "src": testimonial.avatarSrc, "alt": testimonial.avatarAlt })} <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Astro$f = createAstro("https://screwfast.uk");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$3;
  const product = (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Produits";
  const subTitle = "Explorez la durabilit\xE9 et la pr\xE9cision des outils ScrewFast, con\xE7us aussi bien pour les professionnels que pour les amateurs. Chacun de nos produits est fabriqu\xE9 avec pr\xE9cision et con\xE7u pour durer, garantissant que vous disposez du bon outil pour chaque t\xE2che.";
  const testimonials = [
    {
      content: "Depuis que nous avons adopt\xE9 les outils mat\xE9riels de ScrewFast, l'efficacit\xE9 sur nos chantiers de construction a explos\xE9. La durabilit\xE9 des boulons hexagonaux et la pr\xE9cision des vis machine sont tout simplement in\xE9gal\xE9es. C'est rafra\xEEchissant de travailler avec une entreprise qui comprend vraiment les exigences quotidiennes de l'industrie.",
      author: "Jason Clark",
      role: "Contrema\xEEtre de chantier | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "En tant que designer d'int\xE9rieur, je suis toujours \xE0 la recherche de mat\xE9riaux et d'outils de haute qualit\xE9 qui m'aident \xE0 donner vie \xE0 mes visions. L'assortiment de vis mixtes de ScrewFast a r\xE9volutionn\xE9 mes projets, offrant le m\xE9lange parfait de qualit\xE9 et de vari\xE9t\xE9. Le support client exceptionnel \xE9tait la cerise sur le g\xE2teau !",
      author: "Maria Gonzalez",
      role: "Designer d'int\xE9rieur | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "Je suis menuisier professionnel depuis plus de 15 ans, et je peux sinc\xE8rement dire que les boulons et \xE9crous \xE0 tarauder de ScrewFast sont parmi les meilleurs que j'ai utilis\xE9s. Ils adh\xE8rent comme aucun autre, et j'ai une confiance totale dans chaque joint et \xE9l\xE9ment. De plus, le service est impeccable - ils se soucient vraiment du succ\xE8s de mon projet.",
      author: "Richard Kim",
      role: "Menuisier-Ma\xEEtre | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Produits | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/products",
    url: "https://screwfast.uk/fr/products",
    name: "Outils Mat\xE9riels | ScrewFast",
    description: "Explorez la durabilit\xE9 et la pr\xE9cision des outils ScrewFast, con\xE7us aussi bien pour les professionnels que pour les passionn\xE9s.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Histoires de clients", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Pourquoi choisir ScrewFast ?", "subTitle": "Transformez vos id\xE9es en r\xE9sultats tangibles avec les outils ScrewFast. Que vous commenciez par un croquis sur un coin de table ou plongiez dans un projet de construction complet, nos outils sont con\xE7us pour vous aider \xE0 construire en toute confiance.", "benefits": [
    "Outils robustes et fiables pour des performances durables.",
    "Solutions innovantes adapt\xE9es aux besoins de construction modernes.",
    "Support client d\xE9di\xE9 au succ\xE8s de votre projet."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce que disent nos clients", "testimonials": testimonials })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/products/index.astro", void 0);

const $$file$3 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/products/index.astro";
const $$url$3 = "/fr/products";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", site: "https://screwfast.uk", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "fr"], fallback: { fr: "en" }, routing: { prefixDefaultLocale: false, redirectToDefaultLocale: true } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
const strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  domains,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

const $$Astro$e = createAstro("https://screwfast.uk");
const $$ClientsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 2xl:max-w-full"> <!-- Title and description --> <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/2"> <h2 class="mb-6 text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty leading-tight text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$IconBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$FeaturesGeneral = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, src, alt, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <div class="relative mb-6 overflow-hidden md:mb-8"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })}`} </div> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$TabNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-orange-400 dark:text-neutral-200 dark:hs-tab-active:text-orange-300">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$TabContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "hidden";
  const secondClass = second ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/TabContent.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro("https://screwfast.uk");
const $$FeaturesNavs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> `, ` </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> `, ` </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> `, ' </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> <script src="/scripts/vendor/preline/tabs/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`), tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`));
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$TestimonialItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$StatsGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$TestimonialsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$PricingSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Section heading and sub-heading --> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${pricing.title} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${pricing.subTitle} </p> </div> <!-- Contains two main product blocks --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0"> <!-- Starter Kit product details --> <div class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"> <div class="mb-4"> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.starterKit.name} </h3> <p class="text-indigo-300">${pricing.starterKit.description}</p> </div> <div class="mb-4"> <span class="text-4xl font-bold text-neutral-200">${pricing.starterKit.price}</span> <span class="text-lg font-bold text-neutral-300">${pricing.starterKit.cents}</span> <span class="ms-3 text-sm text-indigo-200">${pricing.starterKit.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-neutral-300"> ${pricing.starterKit.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.starterKit.purchaseLink, "href")} class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">${pricing.starterKit.purchaseBtnTitle}</a> </div> <!-- Professional Toolbox product details --> <div class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"> <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"> <div> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.professionalToolbox.name} </h3> <p class="text-orange-200">${pricing.professionalToolbox.description}</p> </div> <span class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none">${pricing.badge}</span> </div> <div class="mb-4"> <span class="text-6xl font-bold text-neutral-200">${pricing.professionalToolbox.price}</span> <span class="text-lg font-bold text-orange-100">${pricing.professionalToolbox.cents}</span> <span class="ms-3 text-orange-200">${pricing.professionalToolbox.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-orange-100"> ${pricing.professionalToolbox.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.professionalToolbox.purchaseLink, "href")} class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base">${pricing.professionalToolbox.purchaseBtnTitle}</a> </div> </div> <!-- Call to action for Enterprise Solutions --> <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${pricing.thirdOption} </p> ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": pricing.btnText, "url": "#" })} </div> </section>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/pricing/PricingSection.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(answer)}` })} </p> </div> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/blocks/AccordionItem.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://screwfast.uk");
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate(_a || (_a = __template(["<!-- Main container that holds all content. Customized for different viewport sizes. -->", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ', ' </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ', ' </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ', ' </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> <script src="/scripts/vendor/preline/accordion/index.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` }), faqs.subTitle, faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  }));
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/sections/FAQ.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const subTitle$2 = "Posez-nous toutes vos questions sur notre marque et nos produits, et obtenez des réponses factuelles.";
const faqs$2 = [
	{
		question: "Quels types d'outils sont inclus dans le Kit de Démarrage?",
		answer: "Le Kit de Démarrage comprend des outils à main et électriques essentiels pour différents projets de bricolage, notamment des marteaux, des perceuses, des tournevis et une variété de fixations. C'est une sélection soigneusement élaborée pour aider les débutants et les bricoleurs expérimentés à aborder la plupart des tâches d'amélioration de l'habitat."
	},
	{
		question: "Puis-je passer du Kit de Démarrage à la Boîte à Outils Professionnelle?",
		answer: "Absolument ! Vous pouvez passer à la Boîte à Outils Professionnelle à tout moment pour accéder à une gamme plus large d'outils de haute qualité, bénéficier d'un support client prioritaire et recevoir un contenu exclusif. Contactez notre équipe de support pour une transition sans problème."
	},
	{
		question: "Quels sont les rabais disponibles pour les commandes en gros via le plan Boîte à Outils Professionnelle?",
		answer: "Les membres de la Boîte à Outils Professionnelle ont droit à des rabais exclusifs sur les commandes en gros, dont le pourcentage peut varier en fonction du volume de la commande. Contactez-nous pour discuter de vos besoins, et nous vous fournirons une structure de rabais personnalisée."
	},
	{
		question: "À quoi puis-je m'attendre en termes de support client?",
		answer: "Tous nos clients bénéficient d'un support par e-mail dédié. Avec le Kit de Démarrage, vous recevrez notre support standard, tandis que le plan Boîte à Outils Professionnelle vous mettra à niveau vers un support prioritaire, ce qui signifie des temps de réponse plus rapides et une assistance spécialisée."
	},
	{
		question: "À quelle fréquence sont mises à jour les ressources en ligne et les tutoriels?",
		answer: "Nous mettons régulièrement à jour nos ressources en ligne et nos tutoriels pour refléter les dernières tendances en matière de bricolage et de construction, ainsi que les introductions de nouveaux outils et techniques. Notre matériel vise à être complet et convivial pour tous les niveaux de compétence."
	},
	{
		question: "ScrewFast propose-t-il des services pour les grands projets de construction?",
		answer: "Oui, nos Solutions Entreprise sont conçues pour les grandes entreprises ayant besoin de services complets. Nous fournissons des consultations, de la planification et de l'approvisionnement en outils et matériaux de haute qualité, ainsi que des solutions de personnel pour des besoins de construction importants. Contactez-nous pour un devis personnalisé."
	}
];
const faqs$3 = {
	subTitle: subTitle$2,
	faqs: faqs$2
};

const features$1 = [
	{
		heading: "Équipes dédiées",
		content: "Bénéficiez de nos équipes engagées qui veillent à ce que votre réussite soit personnelle. Comptez sur un accompagnement expert et des résultats exceptionnels tout au long de votre parcours de projet.",
		svg: "groups"
	},
	{
		heading: "Simplicité et accessibilité",
		content: "Trouvez des solutions faciles à utiliser et abordables avec la gamme d'outils et d'équipements de ScrewFast. Nos produits simplifient l'approvisionnement et permettent de respecter les budgets de projet.",
		svg: "verified"
	},
	{
		heading: "Documentation complète",
		content: "Intégrez facilement grâce aux guides exhaustifs et aux bibliothèques de ScrewFast. Réalisez une adoption de produit sans faille avec notre ensemble complet de documentation conçu pour votre succès.",
		svg: "books"
	},
	{
		heading: "Conception centrée sur l'utilisateur",
		content: "Faites l'expérience de la différence avec la conception axée sur l'utilisateur de ScrewFast, où la fonctionnalité rencontre la praticité pour une expérience de travail améliorée.",
		svg: "frame"
	}
];

const title = "Tarification Simple et Transparente";
const subTitle$1 = "Augmentez l'efficacité avec les plans clairs et axés sur la valeur de ScrewFast.";
const badge = "Meilleure valeur";
const thirdOption = "Solutions Entreprise?";
const btnText = "Obtenez un Devis Personnalisé";
const starterKit = {
	name: "Kit de Démarrage",
	description: "Meilleure option pour les projets de bricolage",
	price: "$49",
	cents: ".00",
	billingFrequency: "USD / mensuel",
	features: [
		"Outils matériels essentiels",
		"Accès aux guides et tutoriels",
		"Support standard"
	],
	purchaseBtnTitle: "Obtenez le Kit de Démarrage",
	purchaseLink: "#"
};
const professionalToolbox = {
	name: "Boîte à Outils Professionnelle",
	description: "Idéale pour les utilisations à grande échelle",
	price: "$89",
	cents: ".00",
	billingFrequency: "USD / mensuel",
	features: [
		"Sélection d'outils premium",
		"Support prioritaire",
		"Contenu et offres exclusifs",
		"Remises sur les commandes en gros"
	],
	purchaseBtnTitle: "Obtenez la Boîte à Outils Professionnelle",
	purchaseLink: "#"
};
const pricing = {
	title: title,
	subTitle: subTitle$1,
	badge: badge,
	thirdOption: thirdOption,
	btnText: btnText,
	starterKit: starterKit,
	professionalToolbox: professionalToolbox
};

const construction$1 = new Proxy({"src":"/_astro/construction-image.6K-xbeL4.avif","width":1600,"height":2400,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/construction-image.avif";
							}
							
							return target[name];
						}
					});

const tools$1 = new Proxy({"src":"/_astro/automated-tools.NvGNhe84.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/automated-tools.avif";
							}
							
							return target[name];
						}
					});

const dashboard$1 = new Proxy({"src":"/_astro/dashboard-image.DUm-YPUR.avif","width":1920,"height":1920,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/dashboard-image.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "D\xE9couvrez ScrewFast sur GitHub", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `\xC9quipez vos projets avec <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>`, "subTitle": "Outils mat\xE9riels de haute qualit\xE9 et services de construction experts pour tous les besoins en projet.", "primaryBtn": "Commencez \xE0 explorer", "primaryBtnURL": getRelativeLocaleUrl("fr", "products"), "secondaryBtn": "Contacter l'\xE9quipe commerciale", "secondaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `\xC0 partir de plus de <span class="font-bold">12,8k</span> avis`, "src": heroImage, "alt": "Pile de bo\xEEtes de produits ScrewFast contenant des outils mat\xE9riels assortis" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Faites confiance aux leaders de l'industrie", "subTitle": "D\xE9couvrez la fiabilit\xE9 choisie par les g\xE9ants de l'industrie." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "R\xE9pondre aux exigences de l'industrie", "subTitle": "Chez ScrewFast, nous relevons les d\xE9fis uniques rencontr\xE9s dans les secteurs du mat\xE9riel et de la construction. Des outils de pointe aux services experts, nous sommes d\xE9termin\xE9s \xE0 vous aider \xE0 surmonter les obstacles et \xE0 atteindre vos objectifs.", "src": featureImage, "alt": "Produits ScrewFast dans des bo\xEEtes flottantes", "features": features$1 })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Personnalisez les offres de <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> pour r\xE9pondre parfaitement \xE0 vos besoins en mat\xE9riel et en construction.`, "tabs": [
    {
      heading: "Outils de pointe",
      content: "Optimisez vos projets avec les outils de pointe de ScrewFast. Faites l'exp\xE9rience d'une efficacit\xE9 accrue dans la gestion de la construction avec nos solutions automatis\xE9es sophistiqu\xE9es.",
      svg: "tools",
      src: tools$1,
      alt: "\xC9quipement lourd jaune et noir sur un champ d'herbe brune",
      first: true
    },
    {
      heading: "Tableaux de bord intuitifs",
      content: "Naviguez facilement avec les tableaux de bord intuitifs de ScrewFast. Configurez et supervisez vos projets de mani\xE8re transparente, avec des interfaces conviviales con\xE7ues pour une gestion efficace des flux de travail rapide et efficace.",
      svg: "dashboard",
      src: dashboard$1,
      alt: "Capture d'\xE9cran ou repr\xE9sentation graphique du tableau de bord intuitif",
      second: true
    },
    {
      heading: "Fonctionnalit\xE9s robustes",
      content: "Minimisez la complexit\xE9, maximisez la productivit\xE9. Les fonctionnalit\xE9s robustes de ScrewFast sont con\xE7ues pour rationaliser votre processus de construction, offrant des r\xE9sultats qui se distinguent par leur excellence.",
      svg: "house",
      src: construction$1,
      alt: "Structure m\xE9tallique grise d'un b\xE2timent pr\xE8s d'une grue \xE0 tour pendant la journ\xE9e"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Acc\xE9l\xE9rez vos projets", "subTitle": "Chez ScrewFast, nous assurons un d\xE9marrage rapide avec une configuration de compte instantan\xE9e. D\xE9couvrez la vitesse de la construction red\xE9finie.", "testimonials": [
    {
      content: "ScrewFast a consid\xE9rablement augment\xE9 l'efficacit\xE9 de notre projet. La configuration a \xE9t\xE9 instantan\xE9e et leurs temps de r\xE9ponse rapides sont ph\xE9nom\xE9naux. Vraiment un changement de jeu dans le support mat\xE9riel et de construction !",
      author: "Samantha Ruiz",
      role: "Directrice des op\xE9rations | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "clients \xE9quip\xE9s \u2014 des bricoleurs aux grandes entreprises de construction"
    },
    {
      count: "35%",
      description: "hausse de l'efficacit\xE9 des projets avec les outils et services de ScrewFast"
    },
    {
      count: "15,3%",
      description: "r\xE9duction des co\xFBts de maintenance rapport\xE9e par des clients \xE0 long terme"
    },
    {
      count: "2x",
      description: "assemblage plus rapide gr\xE2ce \xE0 des solutions de fixation innovantes"
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Questions<br />fr\xE9quemment pos\xE9es", "faqs": faqs$3 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Construisons ensemble", "subTitle": "ScrewFast est un mod\xE8le open source, m\xE9ticuleusement con\xE7u avec les frameworks Astro, Tailwind CSS et Preline UI.", "url": "https://github.com/mearashadowfax/ScrewFast" })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/index.astro", void 0);

const $$file$2 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/index.astro";
const $$url$2 = "/fr";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const product = (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Products";
  const subTitle = "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.";
  const testimonials = [
    // First testimonial data
    {
      content: ` "Since switching to ScrewFast's hardware tools, the efficiency on our construction sites has skyrocketed. The durability of the hex bolts and precision of the machine screws are simply unmatched. It's refreshing to work with a company that truly understands the daily demands of the industry." `,
      author: "Jason Clark",
      role: "Site Foreman | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Second testimonial data
    {
      content: ` "As an interior designer, I'm always looking for high-quality materials and tools that help bring my visions to life. ScrewFast's mixed screws assortment has been a game-changer for my projects, providing the perfect blend of quality and variety. The outstanding customer support was just the cherry on top!" `,
      author: "Maria Gonzalez",
      role: "Interior Designer | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Third testimonial data
    {
      content: ` "I\u2019ve been a professional carpenter for over 15 years, and I can sincerely say that ScrewFast\u2019s tap bolts and nuts are some of the best I've used. They grip like no other, and I have full confidence in every joint and fixture. Plus, the service is impeccable \u2013 they truly care about my project's success." `,
      author: "Richard Kim",
      role: "Master Carpenter | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    }
  ];
  const pageTitle = `Products | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Hardware Tools | ScrewFast",
    "description": "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Customer Stories", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Why Choose ScrewFast?", "subTitle": "Transform your ideas into tangible results with ScrewFast tools. Whether you're starting with a sketch on a napkin or diving into a comprehensive construction project, our tools are engineered to help you build with confidence.", "benefits": [
    "Robust and reliable tools for long-lasting performance.",
    "Innovative solutions tailored to modern construction needs.",
    "Customer support dedicated to your project's success."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "What Our Customers Say", "testimonials": testimonials })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/index.astro", void 0);

const $$file$1 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/index.astro";
const $$url$1 = "/products";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const tools = new Proxy({"src":"/_astro/instalacion_de_aire.BzPle4bQ.jpg","width":794,"height":1123,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/instalacion_de_aire.jpg";
							}
							
							return target[name];
						}
					});

const subTitle = "Pregúntenos cualquier cosa sobre nuestros productos y/o servicios, y obtenga respuestas objetivas.";
const faqs = [
	{
		question: "¿Qué es el mantenimiento de aire acondicionado?",
		answer: "El mantenimiento de aire acondicionado es el conjunto de actividades que se realizan para asegurar que un sistema de aire acondicionado funcione correctamente y de manera eficiente. Esto puede incluir tareas como limpieza y cambio de filtros, revisión y lubricación de componentes mecánicos, y comprobación de la refrigeración y el calentamiento del sistema. <br> Realizar el mantenimiento adecuado del aire acondicionado puede ayudar a prolongar su vida útil y a mejorar su eficiencia energética, lo que puede resultar en un ahorro significativo en las facturas de energía."
	},
	{
		question: "¿Cuánto tiempo hay que darle mantenimiento al aire acondicionado?",
		answer: "La frecuencia del mantenimiento del aire acondicionado depende del tipo de sistema que tengas y de las condiciones en las que se utilice. En general, se recomienda realizar un mantenimiento completo del sistema al menos una vez al año, preferiblemente antes de la temporada de mayor uso. Además, es importante realizar tareas de mantenimiento preventivo más frecuentes, como cambiar o limpiar los filtros de aire, para asegurar un correcto funcionamiento del sistema y evitar problemas."
	},
	{
		question: "¿Cómo saber si el aire acondicionado necesita mantenimiento?",
		answer: "Hay algunas señales que pueden indicar que el aire acondicionado necesita mantenimiento. Algunas de ellas son:<br> <ul class='text-pretty text-neutral-600 dark:text-neutral-400'><li>El aire acondicionado tarda más en enfriar o calentar el ambiente.</li><li>El aire acondicionado produce un ruido anormal.</li><li>El aire acondicionado tiene mal olor.</li><li>El aire acondicionado está obstruido por polvo o suciedad.</li><li>El aire acondicionado no está enfriando o calentando como debería.</li><li>Si observas alguna de estas señales, es posible que tu aire acondicionado necesite mantenimiento.</li></ul>"
	},
	{
		question: "¿Cuánto cuesta el mantenimiento del aire acondicionado?",
		answer: "El costo del mantenimiento del aire acondicionado puede variar dependiendo de factores como el tipo de sistema que tengas, la ubicación geográfica, la complejidad de la tarea y el técnico que realice el mantenimiento. Los precios pueden variar mucho más dependiendo de las circunstancias. Algunos técnicos pueden ofrecer paquetes de mantenimiento a precios más bajos si contratas varias visitas de mantenimiento al año. Es importante comparar precios y obtener varias cotizaciones antes de tomar una decisión sobre quién debe realizar el mantenimiento de tu aire acondicionado."
	}
];
const faqs$1 = {
	subTitle: subTitle,
	faqs: faqs
};

const features = [
	{
		heading: "Experiencia y Profesionalismo",
		content: "Con años de experiencia en la industria, nuestro equipo está altamente capacitado y cuenta con el conocimiento necesario para ofrecer servicios de primera calidad.",
		svg: "groups"
	},
	{
		heading: "Compromiso con la Calidad",
		content: "Nos comprometemos a utilizar equipos y materiales de la más alta calidad en todos nuestros proyectos, asegurando resultados duraderos y confiables.",
		svg: "verified"
	},
	{
		heading: "Satisfacción del Cliente",
		content: "La satisfacción del cliente es nuestra máxima prioridad. Nos esforzamos por superar tus expectativas en cada paso del proceso, desde la consulta inicial hasta la finalización del proyecto.",
		svg: "books"
	},
	{
		heading: "Atención Personalizada",
		content: "Entendemos que cada cliente es único, por lo que nos tomamos el tiempo para comprender tus necesidades específicas y ofrecerte soluciones personalizadas que se ajusten a tu presupuesto y horario.",
		svg: "frame"
	}
];

const featureImage2 = new Proxy({"src":"/_astro/oslop_feature.CNIlWREH.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/oslop_feature.png";
							}
							
							return target[name];
						}
					});

const construction = new Proxy({"src":"/_astro/reparacion_de_aire.D9tPko_A.png","width":794,"height":1123,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/reparacion_de_aire.png";
							}
							
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/mantenimiento_de_aire.CE-ShyO9.jpg","width":794,"height":1123,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/PROYECTOS ASTRO/oslopWebPage/src/images/servicios/mantenimiento_de_aire.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "WhatsApp", "url": "https://github.com/mearashadowfax/ScrewFast" })} ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `Refrigeraci\xF3n y Calefacci\xF3n <span class="text-orange-500 dark:text-orange-400">Oslop Telcom</span>`, "subTitle": "En Oslop Telcom, nos especializamos en ofrecer una amplia gama de servicios de aire acondicionado para satisfacer todas tus necesidades de climatizaci\xF3n. Desde la instalaci\xF3n hasta el mantenimiento y la reparaci\xF3n, estamos aqu\xED para garantizar que disfrutes de un ambiente fresco y confortable en tu hogar, oficina o cualquier otro espacio.", "primaryBtn": "Con\xF3cenos", "primaryBtnURL": "/products", "secondaryBtn": "Contacta Ahora", "secondaryBtnURL": "/contact", "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `Mas de <span class="font-bold">12.8k</span> Reviews`, "src": heroImage$1, "alt": "Stack of ScrewFast product boxes containing assorted hardware tools" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Oslop Telcom Tu Destino para Soluciones de Aire Acondicionado", "subTitle": "Entendemos que el confort en tu hogar u oficina es fundamental para tu bienestar y productividad. Es por eso que nos dedicamos a proporcionarte soluciones de aire acondicionado que no solo te mantengan fresco en los d\xEDas calurosos, sino que tambi\xE9n mejoren la calidad del aire que respiras." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "Servicios de Aire Acondicionado", "subTitle": "Con nuestro equipo altamente capacitado y una atenci\xF3n meticulosa al detalle, te garantizamos un servicio excepcional en cada paso del camino. Desde la planificaci\xF3n inicial hasta la instalaci\xF3n y el mantenimiento continuo, estamos aqu\xED para asegurarnos de que obtengas el m\xE1ximo rendimiento de tu sistema de aire acondicionado y disfrutes de un ambiente interior \xF3ptimo en todo momento.", "src": featureImage2, "alt": "ScrewFast products in floating boxes", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Nuestros Servicios de Aire Acondicionado`, "tabs": [
    {
      heading: "Instalaci\xF3n de Aire Acondicionado",
      content: "Conf\xEDa en nuestro equipo experto para la instalaci\xF3n de sistemas de aire acondicionado de alta calidad. Nos aseguramos de que tu sistema est\xE9 correctamente instalado y funcionando de manera \xF3ptima para brindarte el m\xE1ximo confort.",
      svg: "tools",
      src: tools,
      alt: "instalaciond e aire acondicionado",
      first: true
    },
    {
      heading: "Mantenimiento Preventivo",
      content: "Para prolongar la vida \xFAtil y el rendimiento de tu sistema de aire acondicionado, ofrecemos servicios de mantenimiento preventivo peri\xF3dico. Nuestros t\xE9cnicos calificados realizar\xE1n inspecciones exhaustivas y ajustes necesarios para mantener tu equipo en condiciones \xF3ptimas.",
      svg: "dashboard",
      src: dashboard,
      alt: "Haciendo mantenimiento de aire acondicionado",
      second: true
    },
    {
      heading: "Reparaciones R\xE1pidas y Efectivas",
      content: "\xBFExperimentas problemas con tu sistema de aire acondicionado? No te preocupes, nuestro equipo est\xE1 disponible para proporcionarte reparaciones r\xE1pidas y efectivas. Diagn\xF3stico preciso, piezas de repuesto de calidad y atenci\xF3n profesional garantizan resultados satisfactorios.",
      svg: "house",
      src: construction,
      second: true,
      alt: "Haciendo reparaciones de aire acondicionado"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Acelere sus proyectos", "subTitle": "En Oslop Telcom, estamos listos para brindarte soluciones personalizadas y un servicio excepcional que superar\xE1 tus expectativas.", ";": true, "testimonials": [
    {
      content: "Estoy realmente impresionado con el servicio de aire acondicionado de Oslop Telcom. Desde el primer contacto hasta la instalaci\xF3n final, su equipo demostr\xF3 un nivel excepcional de profesionalismo y dedicaci\xF3n. Ahora, gracias a ellos, mi hogar se siente fresco y confortable en cualquier momento del d\xEDa. Recomiendo encarecidamente a Oslop Telcom a cualquiera que busque soluciones confiables y de calidad para su aire acondicionado.",
      author: "Ana Rodr\xEDguez",
      role: "Cliente Satisfecha",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "500+",
      description: "Hemos brindado soluciones de aire acondicionado a m\xE1s de 500 clientes satisfechos"
    },
    {
      count: "1000+",
      description: "Nuestro equipo ha realizado mantenimiento preventivo en m\xE1s de 1000 sistemas de aire acondicionado"
    },
    {
      count: "300+",
      description: "Con una respuesta r\xE1pida y soluciones efectivas, hemos resuelto con \xE9xito m\xE1s de 300 casos de problemas de aire acondicionado"
    },
    {
      count: "10 A\xF1os +",
      description: "Con m\xE1s de una d\xE9cada en el negocio, en Oslop Telcom contamos con un equipo experto que acumula un amplio conocimiento y experiencia en la industria del aire acondicionado"
    }
  ] })}  ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Preguntas <br />solicitadas frecuentemente", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "\xA1No esperes m\xE1s para disfrutar del confort que te mereces!", "subTitle": "No dejes que el calor te agobie ni que el aire viciado afecte tu bienestar. En Oslop Telcom, estamos listos para brindarte soluciones de aire acondicionado que transformar\xE1n tu espacio en un refugio de frescura y comodidad.", "url": "https://wa.me:+51958826413" })} ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/index.astro", void 0);

const $$file = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, getRelativeLocaleUrl as g, index$5 as i, tools as t };

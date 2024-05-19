/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, A as AstroError, o as UnknownContentCollectionError, p as renderUniqueStylesheet, q as renderScriptElement, t as createHeadAndContent, u as unescapeHTML, k as renderScript, j as Fragment } from '../astro_pLE7yKKW.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Image, S as SITE, b as $$MainLayout } from './404_CfYAVDM8.mjs';
import 'clsx';
/* empty css                           */
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_BaQWmCOp.mjs';

const $$Astro$a = createAstro("https://screwfast.uk");
const $$PrimaryCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PrimaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/PrimaryCTA.astro", void 0);

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$AvatarBlogLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$AvatarBlogLarge;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "size-10 rounded-full sm:h-14 sm:w-14", "src": blogEntry.data.authorImage, "alt": blogEntry.data.authorImageAlt, "draggable": "false", "format": "avif" })} </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/avatars/AvatarBlogLarge.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('../post-1_DtTDkzwT.mjs'),"/src/content/blog/en/post-2.md": () => import('../post-2_BYyCYyy5.mjs'),"/src/content/blog/en/post-3.md": () => import('../post-3_u5lkrzNk.mjs'),"/src/content/blog/fr/post-1.md": () => import('../post-1_9ZP6YvnJ.mjs'),"/src/content/blog/fr/post-2.md": () => import('../post-2_GeQhZSPU.mjs'),"/src/content/blog/fr/post-3.md": () => import('../post-3_CDop7IWf.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('../technical-specifications_CmbwhCgP.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('../custom-solutions_D7e2Sn-j.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('../project-planning_BpX6LW6Y.mjs'),"/src/content/docs/construction/safety.mdx": () => import('../safety_DzFyY6ZB.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('../service-overview_D8h-PPcA.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('../first-project-checklist_Blz0ffbu.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('../getting-started_DhP-u46y.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('../intro_4rls7qIn.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('../welcome-to-docs_D5PAO-W6.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('../first-project-checklist_Cr5FuyQW.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('../getting-started_-SaqaxtN.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('../intro_DG89zcUq.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('../welcome-to-docs_wO0pWY9x.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('../first-project-checklist_CVNrTkVs.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('../getting-started_ZZM8NkNJ.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('../intro_DR8zHFbO.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('../welcome-to-docs_D5VBHNGo.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('../first-project-checklist_DDW4fuF_.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('../getting-started_DcEjVecZ.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('../intro_BkFnKASv.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('../welcome-to-docs_DS0S9rHd.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('../first-project-checklist_BLoHd-yk.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('../getting-started_B2vZ9r1r.mjs'),"/src/content/docs/guides/intro.mdx": () => import('../intro_Bydt9nJF.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('../first-project-checklist_B-QfJj3J.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('../getting-started_DwM3q670.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('../intro_CCIryLpd.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('../welcome-to-docs_D794gi7_.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('../equipment-care_DTOyrtbA.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('../tool-guides_D0vW-APR.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('../welcome-to-docs_qpoKr9ii.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('../first-project-checklist_DrI9zHno.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('../getting-started_B8_erWEk.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('../intro_Dqk3gXlD.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('../welcome-to-docs_vKgokmzQ.mjs'),"/src/content/insights/insight-1.md": () => import('../insight-1_-wxNoY--.mjs'),"/src/content/insights/insight-2.md": () => import('../insight-2_BlXDrY7w.mjs'),"/src/content/insights/insight-3.md": () => import('../insight-3_xAmd-INU.mjs'),"/src/content/products/a765.md": () => import('../a765_DSi2gpJT.mjs'),"/src/content/products/b203.md": () => import('../b203_KO8BFVd-.mjs'),"/src/content/products/f303.md": () => import('../f303_CWlLL2Is.mjs'),"/src/content/products/t845.md": () => import('../t845_361sSD3v.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}},"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md"}},"products":{"type":"content","entries":{"a765":"/src/content/products/a765.md","b203":"/src/content/products/b203.md","f303":"/src/content/products/f303.md","t845":"/src/content/products/t845.md"}},"blog":{"type":"content","entries":{"fr/post-1":"/src/content/blog/fr/post-1.md","fr/post-2":"/src/content/blog/fr/post-2.md","en/post-2":"/src/content/blog/en/post-2.md","en/post-3":"/src/content/blog/en/post-3.md","en/post-1":"/src/content/blog/en/post-1.md","fr/post-3":"/src/content/blog/fr/post-3.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('../post-1_C4vCeeUk.mjs'),"/src/content/blog/en/post-2.md": () => import('../post-2_C_l1__5C.mjs'),"/src/content/blog/en/post-3.md": () => import('../post-3_Dni4_1OP.mjs'),"/src/content/blog/fr/post-1.md": () => import('../post-1_BeR-lLXU.mjs'),"/src/content/blog/fr/post-2.md": () => import('../post-2_BMv7NU8O.mjs'),"/src/content/blog/fr/post-3.md": () => import('../post-3_BFD-Ch_5.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('../technical-specifications_CRlkYTQ6.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('../custom-solutions_CQDRizaZ.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('../project-planning_BCRmI-jY.mjs'),"/src/content/docs/construction/safety.mdx": () => import('../safety_CedH1-DJ.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('../service-overview_DFCTG-5N.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('../first-project-checklist_iclFFNyt.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('../getting-started_DZOdGfkD.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('../intro_gxeAp5y3.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('../welcome-to-docs_Cx44xIVL.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('../first-project-checklist_C-ej7Nfa.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('../getting-started_DiufrQre.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('../intro_B1PekcrR.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('../welcome-to-docs_Daozaz-1.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('../first-project-checklist_DslTEW3m.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('../getting-started_botNYjOg.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('../intro_CnM0CxFT.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('../welcome-to-docs_D-8WCJxP.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('../first-project-checklist_4F-mNynJ.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('../getting-started_CPxGHe9c.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('../intro_ptIVpWRZ.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('../welcome-to-docs_FW40myUL.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('../first-project-checklist_B8pQSLMe.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('../getting-started_CqUBNy5x.mjs'),"/src/content/docs/guides/intro.mdx": () => import('../intro_CGZKYeSc.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('../first-project-checklist_CWDZuihX.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('../getting-started_BYk5X7XY.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('../intro_CCNGneWF.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('../welcome-to-docs_eJKrXFAU.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('../equipment-care_Cgxm1JQH.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('../tool-guides_-dt5c-Ca.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('../welcome-to-docs_D7NwJVgC.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('../first-project-checklist_pijZ-_03.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('../getting-started_B3RKYFfG.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('../intro_RkOgrCi0.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('../welcome-to-docs_B6SMqFtP.mjs'),"/src/content/insights/insight-1.md": () => import('../insight-1_CU3CWFJy.mjs'),"/src/content/insights/insight-2.md": () => import('../insight-2_CPagaGEU.mjs'),"/src/content/insights/insight-3.md": () => import('../insight-3_BwxZVF1L.mjs'),"/src/content/products/a765.md": () => import('../a765_KFKJs7lE.mjs'),"/src/content/products/b203.md": () => import('../b203_BRgsbkXz.mjs'),"/src/content/products/f303.md": () => import('../f303_Bko3yEWX.mjs'),"/src/content/products/t845.md": () => import('../t845_BVGMNW4j.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$CardRelated = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardRelated;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group block rounded-xl outline-none ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"${addAttribute(`/blog/${blogEntry.slug}/`, "href")} data-astro-prefetch> <div> ${renderComponent($$result, "Image", $$Image, { "class": "aspect-video rounded-xl", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "format": "avif" })} <!-- The title of the blog post --> <h3 class="mt-2 text-balance text-lg font-medium text-neutral-800 group-hover:text-orange-400 dark:text-neutral-300 dark:group-hover:text-neutral-50"> ${blogEntry.data.title} </h3> <!-- The formatted publication date of the blog post --> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"> ${formatDate(blogEntry.data.pubDate)} </p> </div></a>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/cards/CardRelated.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$Bookmark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Bookmark;
  return renderTemplate`${maybeRenderHead()}<button type="button" class="focus-visible:ring-secondary group inline-flex items-center rounded-lg p-2.5 text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700" data-bookmark-button="bookmark-button"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bookmark" })} </button> ${renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/Bookmark.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/Bookmark.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://screwfast.uk");
const $$SocialShare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { pageTitle, title = Astro2.currentLocale === "fr" ? "Partager" : "Share" } = Astro2.props;
  const socialPlatforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/share.php?u=${Astro2.url}&title=${pageTitle}`,
      svg: "facebook"
    },
    {
      name: "X",
      url: `https://twitter.com/home/?status=${pageTitle}${Astro2.url}`,
      svg: "x"
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${Astro2.url}&title=${pageTitle}`,
      svg: "linkedIn"
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:top-left]"> <button id="hs-dropup" type="button" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:outline-none"> ', " ", ' </button> <div class="hs-dropdown-menu duration z-10 hidden w-72 divide-y divide-neutral-200 rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800" aria-labelledby="hs-dropup"> <div class="py-2 first:pt-0 last:pb-0"> ', ' </div> <div class="py-2 first:pt-0 last:pb-0"> <button type="button" class="js-clipboard hover:text-dark focus-visible:ring-secondary group inline-flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" data-clipboard-success-text="Copied"> <svg class="js-clipboard-default h-4 w-4 transition group-hover:rotate-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path> </svg> <svg class="js-clipboard-success text-neutral-700 dark:text-neutral-300 hidden h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="js-clipboard-success-text">Copy link</span> </button> </div> </div> </div> <!--Import the necessary Dropdown and Clipboard plugins--> <!--https://preline.co/plugins/html/dropdown.html--> <script src="/scripts/vendor/preline/dropdown/index.js"><\/script> <!-- https://clipboardjs.com/ --> <script src="/scripts/vendor/clipboard.min.js"><\/script> <script>\n  // Initialization of Clipboard\n  (function () {\n    window.addEventListener("load", () => {\n      const $clipboards = document.querySelectorAll(".js-clipboard");\n      $clipboards.forEach((el) => {\n        const clipboard = new ClipboardJS(el, {\n          text: () => {\n            return window.location.href;\n          },\n        });\n        clipboard.on("success", () => {\n          const $default = el.querySelector(".js-clipboard-default");\n          const $success = el.querySelector(".js-clipboard-success");\n          const $successText = el.querySelector(".js-clipboard-success-text");\n          const successText = el.dataset.clipboardSuccessText || "";\n          let oldSuccessText;\n\n          if ($successText) {\n            oldSuccessText = $successText.textContent;\n            $successText.textContent = successText;\n          }\n          if ($default && $success) {\n            $default.style.display = "none";\n            $success.style.display = "block";\n          }\n\n          setTimeout(function () {\n            if ($successText && oldSuccessText)\n              $successText.textContent = oldSuccessText;\n            if ($default && $success) {\n              $success.style.display = "";\n              $default.style.display = "";\n            }\n          }, 800);\n        });\n      });\n    });\n  })();\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "share" }), title, socialPlatforms.map((platform) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100  focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 "${addAttribute(platform.url, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": platform.svg })}
Share on ${platform.name} </a>`));
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/SocialShare.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$PostFeedback = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PostFeedback;
  const { title, firstChoice, secondChoice } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-12 flex items-center justify-center gap-x-2"> <h3 class="text-neutral-700 dark:text-neutral-300">${title}</h3> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-yellow-500 dark:hover:text-neutral-700 dark:hover:border-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg> ${firstChoice} </button> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-400/30 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-700/60 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-y-1 group-focus-visible:translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path></svg> ${secondChoice} </button> </div>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/feedback/PostFeedback.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
async function getStaticPaths$3() {
  const blogPosts = await getCollection("blog", ({ id }) => {
    return id.startsWith("en/");
  });
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$3;
  const { post } = Astro2.props;
  const blogPosts = await getCollection(
    "blog",
    ({ id }) => {
      return id.startsWith("en/");
    }
  );
  const relatedPosts = blogPosts.filter(
    (blogEntry) => blogEntry.slug !== post.slug
  );
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10"> <div class="max-w-2xl"> <div class="mb-6 flex items-center justify-between"> <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3"> ${renderComponent($$result2, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": post })} <div class="grow"> <div class="flex items-center justify-between gap-x-2"> <div> <div class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]"> <!--Post metadata and author info--> <span class="font-bold text-neutral-700 dark:text-neutral-300"> ${post.data.author} </span> </div> <ul class="text-xs text-neutral-500"> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${formatDate(post.data.pubDate)} </li> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${post.data.readTime} min read
</li> </ul> </div> </div> </div> </div> </div> <!--Blog post title--> <h2 class="mb-3 text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${post.data.title} </h2> <!--Blog post contents--> <div class="mb-5 space-y-5 md:mb-8 md:space-y-8"> ${post.data.contents.map(
    (content, index) => index === 1 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${content} </p> ${renderComponent($$result3, "Image", $$Image, { "class": "w-full rounded-xl object-cover", "src": post.data.cardImage, "alt": post.data.cardImageAlt, "draggable": "false", "format": "avif" })} ` })}` : renderTemplate`<p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${content} </p>`
  )} </div> <div class="mx-auto grid max-w-screen-lg gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <!--Blog post tags--> <div class="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0"> ${post.data.tags?.map((tag, index) => renderTemplate`<span class="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring dark:bg-neutral-700/60 dark:text-neutral-300"> ${capitalize(tag)} </span>`)} </div> <!--Bookmark and Share buttons--> <div class="flex items-center justify-end gap-x-1.5"> ${renderComponent($$result2, "Bookmark", $$Bookmark, {})} <div class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div> <div class="inline-flex"> ${renderComponent($$result2, "SocialShare", $$SocialShare, { "pageTitle": post.data.title })} </div> </div> </div> </div> ${renderComponent($$result2, "PostFeedback", $$PostFeedback, { "title": "Was this post helpful?", "firstChoice": "Yes", "secondChoice": "No" })} </section>  <section class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mb-10 max-w-2xl"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
Related articles
</h2> </div> <div class="grid grid-cols-2 gap-6"> ${relatedPosts.map((entry) => renderTemplate`${renderComponent($$result2, "CardRelated", $$CardRelated, { "blogEntry": entry })}`)} </div> </section> ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/blog/[...slug].astro", void 0);

const $$file$3 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/blog/[...slug].astro";
const $$url$3 = "/blog/[...slug]";

const ____slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://screwfast.uk");
async function getStaticPaths$2() {
  const blogPosts = await getCollection("blog", ({ id }) => {
    return id.startsWith("fr/");
  });
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$2;
  const { post } = Astro2.props;
  const blogPosts = await getCollection(
    "blog",
    ({ id }) => {
      return id.startsWith("fr/");
    }
  );
  const relatedPosts = blogPosts.filter(
    (blogEntry) => blogEntry.slug !== post.slug
  );
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10"> <div class="max-w-2xl"> <div class="mb-6 flex items-center justify-between"> <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3"> ${renderComponent($$result2, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": post })} <div class="grow"> <div class="flex items-center justify-between gap-x-2"> <div> <div class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]"> <!--Post metadata and author info--> <span class="font-bold text-neutral-700 dark:text-neutral-300"> ${post.data.author} </span> </div> <ul class="text-xs text-neutral-500"> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${formatDate(post.data.pubDate)} </li> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${post.data.readTime} min read
</li> </ul> </div> </div> </div> </div> </div> <!--Blog post title--> <h2 class="mb-3 text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${post.data.title} </h2> <!--Blog post contents--> <div class="mb-5 space-y-5 md:mb-8 md:space-y-8"> ${post.data.contents.map(
    (content, index) => index === 1 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${content} </p> ${renderComponent($$result3, "Image", $$Image, { "class": "w-full rounded-xl object-cover", "src": post.data.cardImage, "alt": post.data.cardImageAlt, "draggable": "false", "format": "avif" })} ` })}` : renderTemplate`<p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${content} </p>`
  )} </div> <div class="mx-auto grid max-w-screen-lg gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <!--Blog post tags--> <div class="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0"> ${post.data.tags?.map((tag, index) => renderTemplate`<span class="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring dark:bg-neutral-700/60 dark:text-neutral-300"> ${capitalize(tag)} </span>`)} </div> <!--Bookmark and Share buttons--> <div class="flex items-center justify-end gap-x-1.5"> ${renderComponent($$result2, "Bookmark", $$Bookmark, {})} <div class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div> <div class="inline-flex"> ${renderComponent($$result2, "SocialShare", $$SocialShare, { "pageTitle": post.data.title })} </div> </div> </div> </div> ${renderComponent($$result2, "PostFeedback", $$PostFeedback, { "title": "Cet article \xE9tait-il utile?", "firstChoice": "Oui", "secondChoice": "Non" })} </section>  <section class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mb-10 max-w-2xl"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
Articles connexes
</h2> </div> <div class="grid grid-cols-2 gap-6"> ${relatedPosts.map((entry) => renderTemplate`${renderComponent($$result2, "CardRelated", $$CardRelated, { "blogEntry": entry })}`)} </div> </section> ` })}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/blog/[...slug].astro", void 0);

const $$file$2 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/fr/blog/[...slug].astro";
const $$url$2 = "/fr/blog/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://screwfast.uk");
async function getStaticPaths$1() {
  const insightPosts = await getCollection("insights");
  return insightPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const pageTitle = `${post.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-6 sm:py-8 lg:py-12"> <div class="mx-auto max-w-screen-xl px-4 md:px-8"> <div class="grid gap-8 md:grid-cols-2 lg:gap-12"> <div> <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-full object-cover object-center", "src": post.data.cardImage, "alt": post.data.cardImageAlt, "draggable": "false", "format": "avif" })} </div> <div id="progress-mobile" class="fixed left-0 top-0 h-2 w-full bg-gradient-to-r from-orange-400/30 to-orange-400 md:hidden"></div> <div id="pin" class="mt-10 hidden space-y-4 md:block"> <div class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"> <div id="progress" class="h-px w-full bg-gradient-to-r from-orange-400/30 to-orange-400"></div> </div> <p class="text-pretty text-sm font-light text-neutral-500">
Table of Contents:
</p> <div id="toc" class=""> <ul class="space-y-2 text-pretty text-base text-neutral-700 transition duration-300 dark:text-neutral-400"></ul> </div> </div> </div> <div class="md:pt-8"> <h1 class="mb-4 text-balance text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl md:mb-6 md:text-left"> ${post.data.title} </h1> <article class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> </div> </div> </section> ` })}  ${renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/insights/[...slug].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/insights/[...slug].astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/insights/[...slug].astro", void 0);

const $$file$1 = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/insights/[...slug].astro";
const $$url$1 = "/insights/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$ProductTabBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductTabBtn;
  const { id, dataTab, title, first } = Astro2.props;
  const BUTTON_CLASS = "flex w-full justify-center rounded-xl border border-transparent p-3 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus-visible:ring dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none md:p-5";
  const HEADING_CLASS = "block text-center font-bold";
  const INACTIVE_HEADING_CLASS = "text-neutral-800 dark:text-neutral-200";
  return renderTemplate`<!-- Tab button element -->${maybeRenderHead()}<button type="button"${addAttribute(`${BUTTON_CLASS} ${first ? "active bg-neutral-100 hover:border-transparent dark:bg-white/[.05]" : ""}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-target")} role="tab"> <!-- Tab text --> <span${addAttribute(`${HEADING_CLASS} ${first ? "text-orange-400 dark:text-orange-300" : INACTIVE_HEADING_CLASS}`, "class")}> ${title} </span> </button>`;
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/components/ui/buttons/ProductTabBtn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
async function getStaticPaths() {
  const productEntries = await getCollection("products");
  return productEntries.map((product) => ({
    params: { slug: product.slug },
    props: { product }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { product } = Astro2.props;
  const pageTitle = `${product.data.title} | ${SITE.title}`;
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", ""])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="overlay" class="fixed inset-0 bg-neutral-200 dark:bg-neutral-800"></div> <section class="mx-auto flex max-w-[85rem] flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <p id="fadeText" class="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl"> ${product.data.main.content} </p> </div> <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"> <div id="fadeInUp"> <h1 class="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl"> ${product.data.title} </h1> <p class="text-lg text-neutral-600 dark:text-neutral-400"> ${product.data.description} </p> </div> <div> ${renderComponent($$result2, "Image", $$Image, { "id": "fadeInMoveRight", "src": product.data.main.imgMain, "class": "w-[600px]", "alt": product.data.main.imgAlt, "format": "avif", "loading": "eager" })} </div> </div> </section> <div class="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14"> <nav class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0" aria-label="Tabs" role="tablist"> ${product.data.tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "ProductTabBtn", $$ProductTabBtn, { "title": tab.title, "id": tab.id, "dataTab": tab.dataTab, "first": index === 0 })}`)} </nav> <div class="mt-12 md:mt-16"> <div id="tabs-with-card-1" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid gap-12 md:grid-cols-2"> <div class="lg:w-3/4"> <h2 class="text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:leading-tight lg:text-4xl"> ${product.data.longDescription.title} </h2> <p class="mt-3 text-pretty text-neutral-600 dark:text-neutral-400"> ${product.data.longDescription.subTitle} </p> <p class="mt-5"> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": product.data.longDescription.btnTitle, "url": product.data.longDescription.btnURL })} </p> </div> <div class="space-y-6 lg:space-y-10"> ${product.data.descriptionList.map((list) => renderTemplate`<div class="flex"> <div> <h3 class="text-base font-bold text-neutral-800 dark:text-neutral-200 sm:text-lg"> ${list.title} </h3> <p class="mt-1 text-neutral-600 dark:text-neutral-400"> ${list.subTitle} </p> </div> </div>`)} </div> </div> </div> </div> <div id="tabs-with-card-2" class="hidden" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid w-full grid-cols-1 gap-x-16 md:grid-cols-2"> <div class="max-w-md space-y-6"> ${product.data.specificationsLeft.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`)} </div> ${product.data.specificationsRight ? renderTemplate`<div class="mt-6 max-w-md space-y-6 md:ml-auto md:mt-0"> ${product.data.specificationsRight?.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`)} </div>` : product.data.tableData ? renderTemplate`<div class="mt-6 space-y-6 md:ml-auto md:mt-0"> <div class="flex flex-col"> <div class="-m-1.5 overflow-x-auto"> <div class="inline-block min-w-full p-1.5 align-middle"> <div class="overflow-hidden"> <table class="min-w-full divide-y divide-neutral-300 dark:divide-neutral-700"> <thead> <tr> ${product.data.tableData?.[0].feature?.map(
    (header) => renderTemplate`<th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-500 dark:text-neutral-500"> ${header} </th>`
  )} </tr> </thead> <tbody class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${product.data.tableData?.map(
    (row) => (
      // Wrap each row's content in a separate <tr> element
      row.description.map((rowData) => renderTemplate`<tr>  ${rowData.map((cellValue) => (
        // Render each cell value in its own <td> element
        renderTemplate`<td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-600 dark:text-neutral-400"> ${cellValue} </td>`
      ))} </tr>`)
    )
  )} </tbody> </table> </div> </div> </div> </div> </div>` : null} </div> </div> </div> </div> </div> <div id="tabs-with-card-3" class="hidden" role="tabpanel"> <div class="mx-auto mb-20 flex w-full md:mb-28 2xl:w-4/5"> <div class="relative left-12 top-12 z-10 overflow-hidden rounded-xl shadow-lg md:left-12 md:top-16 md:-ml-12 lg:ml-0"> ${product.data.blueprints.first && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.first, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`} </div> <div class="relative right-12 overflow-hidden rounded-xl shadow-xl"> ${product.data.blueprints.second && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.second, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`} </div> </div> </div> ` }), renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/[...slug].astro?astro&type=script&index=1&lang.ts"));
}, "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/[...slug].astro", void 0);

const $$file = "D:/PROYECTOS ASTRO/oslopWebPage/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PrimaryCTA as $, ____slug_$3 as _, $$AvatarBlogLarge as a, ____slug_$2 as b, ____slug_$1 as c, ____slug_ as d, formatDate as f, getCollection as g };

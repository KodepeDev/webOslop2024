import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BSHvf1Mr.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/styles_P0EeONYh.mjs');
const _page1 = () => import('./chunks/scripts_CF4VFUXN.mjs');
const _page2 = () => import('./chunks/generic_DZsah-IP.mjs');
const _page3 = () => import('./chunks/404_Dv1VtOdt.mjs');
const _page4 = () => import('./chunks/about_CoO-IGxn.mjs');
const _page5 = () => import('./chunks/index_D1qsUVvp.mjs');
const _page6 = () => import('./chunks/_.._CAEIhE66.mjs');
const _page7 = () => import('./chunks/contact_BYDyrkza.mjs');
const _page8 = () => import('./chunks/favicon_BplcEb35.mjs');
const _page9 = () => import('./chunks/404_RSuu8iki.mjs');
const _page10 = () => import('./chunks/index_D-l7lZQ1.mjs');
const _page11 = () => import('./chunks/_.._CcnMS4NJ.mjs');
const _page12 = () => import('./chunks/contact_C7dg5rUi.mjs');
const _page13 = () => import('./chunks/index_DgJK6BAA.mjs');
const _page14 = () => import('./chunks/services_mWS5tayf.mjs');
const _page15 = () => import('./chunks/index_Cor0uQO8.mjs');
const _page16 = () => import('./chunks/_..__wTVGhPY.mjs');
const _page17 = () => import('./chunks/manifest_BVBfz6_A.mjs');
const _page18 = () => import('./chunks/index_BZ7Sz_Sz.mjs');
const _page19 = () => import('./chunks/_.._CTSJnXyw.mjs');
const _page20 = () => import('./chunks/robots_Da9IFifo.mjs');
const _page21 = () => import('./chunks/services_Cii4acFo.mjs');
const _page22 = () => import('./chunks/index_Br-hkOhX.mjs');
const _page23 = () => import('./chunks/index_D0y0-K9z.mjs');
const pageMap = new Map([
    ["node_modules/astro-expressive-code/routes/styles.ts", _page0],
    ["node_modules/astro-expressive-code/routes/scripts.ts", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/about.astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...slug].astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/favicon.ico.ts", _page8],
    ["src/pages/fr/404.astro", _page9],
    ["src/pages/fr/blog/index.astro", _page10],
    ["src/pages/fr/blog/[...slug].astro", _page11],
    ["src/pages/fr/contact.astro", _page12],
    ["src/pages/fr/products/index.astro", _page13],
    ["src/pages/fr/services.astro", _page14],
    ["src/pages/fr/index.astro", _page15],
    ["src/pages/insights/[...slug].astro", _page16],
    ["src/pages/manifest.json.ts", _page17],
    ["src/pages/products/index.astro", _page18],
    ["src/pages/products/[...slug].astro", _page19],
    ["src/pages/robots.txt.ts", _page20],
    ["src/pages/services.astro", _page21],
    ["src/pages/index.astro", _page22],
    ["node_modules/@astrojs/starlight/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c7432fa3-2072-4207-a95e-3df0c137d7fe"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DWfii9TP.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_1hxpEOQX.mjs');
const _page1 = () => import('./chunks/about_igzHASDp.mjs');
const _page2 = () => import('./chunks/acceptable-use_CGLpoLhq.mjs');
const _page3 = () => import('./chunks/index_uUUY8QgI.mjs');
const _page4 = () => import('./chunks/_.._XGlVyfgW.mjs');
const _page5 = () => import('./chunks/control-panel_9nMUE587.mjs');
const _page6 = () => import('./chunks/domain-fees_BfTm_UyW.mjs');
const _page7 = () => import('./chunks/factorio_DNg0YVQm.mjs');
const _page8 = () => import('./chunks/minecraft_NkzC2sfR.mjs');
const _page9 = () => import('./chunks/palworld_CJBNMP9a.mjs');
const _page10 = () => import('./chunks/valheim_6oUaGww1.mjs');
const _page11 = () => import('./chunks/gameservers_BV4kW_iW.mjs');
const _page12 = () => import('./chunks/privacy-policy_B28ns2da.mjs');
const _page13 = () => import('./chunks/refund-policy_CXvh3J8Z.mjs');
const _page14 = () => import('./chunks/rss_D2XXfCYZ.mjs');
const _page15 = () => import('./chunks/terms-of-service_bzZ1ScV0.mjs');
const _page16 = () => import('./chunks/web-hosting_DJfFBxik.mjs');
const _page17 = () => import('./chunks/index_ufKgKvD5.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/acceptable-use.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/control-panel.astro", _page5],
    ["src/pages/domain-fees.astro", _page6],
    ["src/pages/games/factorio.astro", _page7],
    ["src/pages/games/minecraft.astro", _page8],
    ["src/pages/games/palworld.astro", _page9],
    ["src/pages/games/valheim.astro", _page10],
    ["src/pages/gameservers.astro", _page11],
    ["src/pages/privacy-policy.astro", _page12],
    ["src/pages/refund-policy.astro", _page13],
    ["src/pages/rss.xml.js", _page14],
    ["src/pages/terms-of-service.astro", _page15],
    ["src/pages/web-hosting.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ef072437-ae07-4f44-a870-b9982b9f4663"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, A as AstroError, f as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderComponent, u as unescapeHTML, k as renderSlot, l as renderHead } from '../astro_Dj1lkFpt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                           */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/images/favicon.webp"><meta name="generator"', '><!-- Font preloads --><!--\n<link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />\n<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin />\n --><!-- Canonical URL --><link rel="canonical"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"><script src="/js/jquery.min.js" type="text/javascript"><\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"));
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!--  <HeaderLink href="/blog">Blog</HeaderLink> -->${maybeRenderHead()}<header class="header"> <div id="top-head"> <div class="container"> <div class="row"> <div class="col"> <ul class="mnav float-none left-ul"> <li><a href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1"><img src="/images/email-us.svg" class="va-mid mr-1" alt=""> sales@aleforge.net</a></li> <li><a href="https://www.tidio.com/talk/ngvrd3qge3zp6wonytswsxmor747esrj"><img src="/images/live-chat.svg" class="va-mid mr-1" alt=""> Live Chat (7AM-9PM EST)</a></li> </ul> </div> <div class="col ml-auto text-right"> <ul class="mnav"> <li><a href="/blog/">Blog</a></li> <li><a href="https://billing.aleforge.net/submitticket.php">Contact</a></li> <li class="button-dropdown"> <a href="#" class="dropdown dropdown-toggle" id="supportDropdown" data-bs-toggle="dropdown" aria-expanded="false">Support <img src="/images/drop-hover.svg" class="va-mid ml-1 drop" alt=""></a> <div class="dropdown-menu single-links-dropdown" aria-labelledby="supportDropdown"> <a class="dropdown-item" href="https://billing.aleforge.net/knowledgebase.php">Knowlegebase</a> <a class="dropdown-item" href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1">Open Ticket</a> </div> </li> <li class="button-dropdown"> <a href="#" class="dropdown dropdown-toggle" id="panelsDropdown" data-bs-toggle="dropdown" aria-expanded="false">Control Panels <img src="/images/drop-hover.svg" class="va-mid ml-1 drop" alt=""></a> <div class="dropdown-menu single-links-dropdown" aria-labelledby="panelsDropdown"> <a href="https://billing.aleforge.net/">Client Area</a> <a href="#">Game Panel</a> </div> </li> </ul> </div> </div> </div> </div> <div class="container" id="header"> <div class="row"> <div class="col col-logo"> <a href="/" class="logo"><img src="/images/logo.webp" alt="AleForge"></a> </div> <div class="col"> <ul class="mnav main-nav"> <li><a href="/gameservers">Game Servers</a></li> <li><a href="/games/minecraft">Minecraft Servers</a></li> <li class="button-dropdown"> <a href="#" class="dropdown-toggle dropdown" id="solutionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">Hosting <img src="/images/drop-hover.svg" alt="" class="va-mid ml-1 drop"></a> <div class="dropdown-menu" aria-labelledby="solutionsDropdown"> <a class="dropdown-item" href="/web-hosting/"> <div class="nav-icon"><img src="/images/web-hosting.webp" srcset="/images/web-hosting.webp 1x, /images/web-hosting@2x.webp 2x" alt="" class="width-20"></div> <strong>Web Hosting</strong> <span>A small one liner about the service.</span> </a> <a class="dropdown-item" href="https://moonqube.com/virtual-machines" target="_blank"> <div class="nav-icon qube-icon"><img src="/images/moo-qubes.webp" srcset="/images/moo-qubes.webp 1x, /images/moo-qubes@2x.webp 2x" alt="" class="width-20"><span class="is-external"><img src="/images/external.svg" class="va-mid"></span></div> <strong>Virtual Machines</strong> <span>A small one liner about the service.</span> </a> <a class="dropdown-item" href="https://moonqube.com/kubernetes" target="_blank"> <div class="nav-icon qube-icon"><img src="/images/moo-kubernetes.svg" class="width-20"><span class="is-external"><img src="/images/external.svg" alt="" class="va-mid"></span></div> <strong>Kubernetes</strong> <span>A small one liner about the service.</span> </a> <a class="dropdown-item" href="https://moonqube.com/block-storage" target="_blank"> <div class="nav-icon qube-icon"><img src="/images/moo-block.webp" srcset="/images/moo-block.webp 1x, /images/moo-block@2x.webp 2x" class="width-20" alt=""><span class="is-external"><img src="/images/external.svg" class="va-mid"></span></div> <strong>Block Storage</strong> <span>A small one liner about the service.</span> </a> <a class="dropdown-item" href="https://moonqube.com/object-storage" target="_blank"> <div class="nav-icon qube-icon"><img src="/images/moo-object.webp" srcset="/images/moo-object.webp 1x, /images/moo-object@2x.webp 2x" class="height-20" alt=""><span class="is-external"><img src="/images/external.svg" class="va-mid"></span></div> <strong>Object Storage</strong> <span>A small one liner about the service.</span> </a> </div> </li> <li class="button-dropdown"> <a href="#" class="dropdown dropdown-toggle" id="resourcesDropdown" data-bs-toggle="dropdown" aria-expanded="false">Company <img src="/images/drop-hover.svg" class="va-mid ml-1 drop"></a> <div class="dropdown-menu single-links-dropdown" aria-labelledby="resourcesDropdown"> <a class="dropdown-item" href="/about/">About Us</a> <a class="dropdown-item" href="/blog/">Blog</a> <a class="dropdown-item" href="/control-panel/">Control Panel</a> <a class="dropdown-item" href="/terms-of-service/">Terms of Service</a> </div> </li> <li class="hide-mobile">&bull;</li> <li><a href="#">Login</a></li> <li><a href="/about.html" class="button">Sign Up</a></li> </ul> <div class="button_container" id="toggle"> <img src="/images/nav-open.svg" class="nav-open"> <img src="/images/nav-close.svg" class="nav-close" < div> </div> </div> </div> </div> </header>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Bootstrap --><script src="/js/bootstrap.min.js" type="text/javascript"><\/script>  <script type="text/javascript">\n	jQuery(document).ready(function (e) {\n		function t(t) {\n			e(t).bind("click", function (t) {\n				t.preventDefault();\n				e(this).parent().fadeOut();\n			});\n		}\n		e(".dropdown-toggle").click(function () {\n			var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");\n			e(".button-dropdown .dropdown-menu").hide();\n			e(".button-dropdown .dropdown-toggle").removeClass("active");\n			if (t) {\n				e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active");\n			}\n		});\n		e(document).bind("click", function (t) {\n			var n = e(t.target);\n			if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();\n		});\n		e(document).bind("click", function (t) {\n			var n = e(t.target);\n			if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");\n		});\n\n		$(".button_container").click(function () {\n			$(".main-nav").slideToggle("fast");\n			$(".main-nav").toggleClass("active");\n			$(".button_container").toggleClass("active");\n		});\n\n		if ($(window).width() < 768 || $(window).height() < 480) {\n			$(".footer-links h5").click(function () {\n				$(this).next("ul").slideToggle("fast");\n				$(this).toggleClass("active");\n			});\n		}\n\n		setInterval(function time() {\n			var d = new Date();\n			var hours = 24 - d.getHours();\n			var min = 60 - d.getMinutes();\n			if ((min + "").length == 1) {\n				min = "0" + min;\n			}\n			var sec = 60 - d.getSeconds();\n			if ((sec + "").length == 1) {\n				sec = "0" + sec;\n			}\n			if ((hours + "").length == 1) {\n				hours = "0" + hours;\n			}\n			jQuery("#clock").html("<h2>0<small>days</small></h2><h2>" + hours + "<small>hours</small></h2><h2>" + min + "<small>mins</small></h2><h2>" + sec + "<small>secs</small></h2>");\n		}, 1000);\n\n		if (jQuery(".toggle .toggle-title").hasClass("active")) {\n			jQuery(".toggle .toggle-title.active").closest(".toggle").find(".toggle-inner").show();\n		}\n		jQuery(".toggle .toggle-title").click(function () {\n			if (jQuery(this).hasClass("active")) {\n				jQuery(this).removeClass("active").closest(".toggle").find(".toggle-inner").slideUp(200);\n			} else {\n				jQuery(this).addClass("active").closest(".toggle").find(".toggle-inner").slideDown(200);\n			}\n		});\n\n		if (jQuery(".toggle .toggle-title").hasClass("active")) {\n			jQuery(".toggle .toggle-title.active").closest(".toggle").find(".toggle-inner").show();\n		}\n	});\n<\/script> ', `<footer id="footer"> <div class="cta"> <div class="container"> <div class="row text-left"> <div class="col"> <h2>Ready to Order?</h2> <p class="pb-0">AleForge provides quality game hosting services protected by cutting-edge security systems.</p> </div> <div class="col ml-auto text-right pt-4 mt-2"> <a href="/about" class="button outline mr-2">Learn More</a> <a href="https://billing.aleforge.net/cart.php" class="button">Get Started</a> </div> </div> </div> </div> <div class="footer-bottom"> <div class="footer-links"> <div class="container"> <div class="flex-grid five"> <div class="col"> <h5>Top Game Servers</h5> <ul> <li><a href="/games/minecraft">Minecraft</a></li> <li><a href="/games/terraria">Terraria</a></li> <li><a href="/games/factorio">Factorio</a></li> <li><a href="/games/garrysmod">Garry's Mod</a></li> <li><a href="/games/rust">Rust</a></li> <li><a href="/games/starbound">Starbound</a></li> </ul> </div> <div class="col"> <h5>Support</h5> <ul> <li><a href="https://billing.aleforge.net/knowledgebase.php">Knowledgebase</a></li> <li><a href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1">Open a Ticket</a></li> <li><a href="https://www.tidio.com/talk/ngvrd3qge3zp6wonytswsxmor747esrj">Live Chat</a></li> <li><a href="https://discord.gg/e5aRjKJ">Discord</a></li> <li><a href="https://status.aleforge.net/">Status</a></li> </ul> </div> <div class="col"> <h5>Company</h5> <ul> <li><a href="/about">About Us</a></li> <li><a href="/about">Datacenters</a></li> <li><a href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1">Contact Us</a></li> <li><a href="/blog">Blog</a></li> <li><a href="https://billing.aleforge.net/knowledgebase/25/AleForge-Affiliate-Program.html">Affiliate Program</a></li> </ul> </div> <div class="col"> <h5>Social</h5> <ul> <li><a href="https://www.facebook.com/AleForgeHosting">Facebook</a></li> <li><a href="https://twitter.com/aleforgehosting">Twitter</a></li> <li><a href="https://discord.gg/e5aRjKJ">Discord</a></li> <li><a href="https://www.linkedin.com/company/28660323">LinkedIn</a></li> </ul> </div> <div class="col"> <h5>Legal Resources</h5> <ul> <li><a href="/terms-of-service">Terms of Service</a></li> <li><a href="/acceptable-use">Acceptable Use Policy</a></li> <li><a href="/privacy-policy">Privacy Policy</a></li> <li><a href="/refund-policy">Refund Policy</a></li> </ul> </div> </div> </div> </div> <div class="footer-divider"> <div class="container"> <div class="row" id="fdiv"> <div class="col"> <div class="footer-logo"><a href="#"><img src="/images/logo.webp" alt=""></a></div> </div> </div> </div> </div> <div class="footer-copyright"> <div class="container"> <div class="row"> <div class="col"> <p>&copy; Copyright `, ` Ale Forge Ltd. All Rights Reserved.</p> <div class="mute-links"> <a href="/terms-of-service">Terms of Service</a> &nbsp;|&nbsp; <a href="/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp; <a href="https://billing.aleforge.net/submitticket.php">Report Abuse</a> </div> <div class="block mt-3 font-13"> <span class="font-12 block mt-2">
We're rated <strong>Excellent</strong> on <a href="https://www.trustpilot.com/review/aleforge.net" target="_blank"><img src="/images/trustpilot.svg" class="va-mid ml-1 mb-2" alt=""></a> <strong><a href="https://www.trustpilot.com/review/aleforge.net" target="_blank" rel="noopener noreferrer">Read Reviews &raquo;</a></strong> </span> </div> </div> </div> </div> </div> </div> </footer>`])), maybeRenderHead(), today.getFullYear());
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/Footer.astro", void 0);

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
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/10-terraria-tips-and-tricks-for-new-players.md": () => import('../10-terraria-tips-and-tricks-for-new-players_DhrO5V1N.mjs'),"/src/content/blog/11-tricks-for-holdfast-beginners.md": () => import('../11-tricks-for-holdfast-beginners_CvfJcCQa.mjs'),"/src/content/blog/3-tips-for-starting-and-maintaining-your-minecraft-server.md": () => import('../3-tips-for-starting-and-maintaining-your-minecraft-server_DHijAYdJ.mjs'),"/src/content/blog/5-secrets-for-not-looking-like-a-noob-tf2.md": () => import('../5-secrets-for-not-looking-like-a-noob-tf2_7baqd9Xu.mjs'),"/src/content/blog/5-things-to-look-for-a-factorio-server.md": () => import('../5-things-to-look-for-a-factorio-server_BcuvJCyc.mjs'),"/src/content/blog/6-key-benefits-of-vps-hosting.md": () => import('../6-key-benefits-of-vps-hosting_DDnxR7CM.mjs'),"/src/content/blog/6_tips_for_mastering_necesse.md": () => import('../6_tips_for_mastering_necesse_Bn-iMWhf.mjs'),"/src/content/blog/7-major-benefits-of-having-your-own-game-server.md": () => import('../7-major-benefits-of-having-your-own-game-server_B1NGxBKl.mjs'),"/src/content/blog/7-tips-for-choosing-your-valheim-server.md": () => import('../7-tips-for-choosing-your-valheim-server_D8rvUc88.mjs'),"/src/content/blog/9-minecraft-tips.md": () => import('../9-minecraft-tips_CgJi51wV.mjs'),"/src/content/blog/a-guide-to-pci-compliant-hosting-why-is-it-important.md": () => import('../a-guide-to-pci-compliant-hosting-why-is-it-important_BkQgK-G4.mjs'),"/src/content/blog/aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay.md": () => import('../aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay_C0qsKp9F.mjs'),"/src/content/blog/aleforges-new-look.md": () => import('../aleforges-new-look_BZkJLpgW.mjs'),"/src/content/blog/avorion-dedicated-server.md": () => import('../avorion-dedicated-server_CzujDAS_.mjs'),"/src/content/blog/battle-for-supremancy-starbound-vs-terraria.md": () => import('../battle-for-supremancy-starbound-vs-terraria_c4djlM_k.mjs'),"/src/content/blog/beginners-guide-to-learning-how-to-play-factorio.md": () => import('../beginners-guide-to-learning-how-to-play-factorio_DryB2lF3.mjs'),"/src/content/blog/best-starbound-mods-for-your-server.md": () => import('../best-starbound-mods-for-your-server_JJT7Lg0f.mjs'),"/src/content/blog/clever-minecraft-easter-eggs-every-minecrafter-should-know-about.md": () => import('../clever-minecraft-easter-eggs-every-minecrafter-should-know-about_D7Bfj0rO.mjs'),"/src/content/blog/crack-the-code-of-modded-games.md": () => import('../crack-the-code-of-modded-games_uO1qhacL.mjs'),"/src/content/blog/dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues.md": () => import('../dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues_DEawhAD8.mjs'),"/src/content/blog/debunking-website-security-myths-are-you-falling-for-these.md": () => import('../debunking-website-security-myths-are-you-falling-for-these_Bs5Wk1bU.mjs'),"/src/content/blog/dont-starve-together-6-things-to-know.md": () => import('../dont-starve-together-6-things-to-know_D2GdsVpy.mjs'),"/src/content/blog/dos-and-don'ts-of-playing-core-keeper.md": () => import('../dos-and-don\'ts-of-playing-core-keeper_DstSAzSR.mjs'),"/src/content/blog/emergence_video_game_art.md": () => import('../emergence_video_game_art_DbNVSc5P.mjs'),"/src/content/blog/everything-to-know-about-modded-minecraft.md": () => import('../everything-to-know-about-modded-minecraft_HdL8q62q.mjs'),"/src/content/blog/everything-you-need-to-know-about-project-zomboid-build-42.md": () => import('../everything-you-need-to-know-about-project-zomboid-build-42_BzM32z51.mjs'),"/src/content/blog/exploring-your-options-for-a-terraria-server.md": () => import('../exploring-your-options-for-a-terraria-server_DOdM6A85.mjs'),"/src/content/blog/february-game-server-giveaway.md": () => import('../february-game-server-giveaway_CwEd2UMC.mjs'),"/src/content/blog/first-post.md": () => import('../first-post_CgM28Ad0.mjs'),"/src/content/blog/five-tips-for-picking-the-right-game-server.md": () => import('../five-tips-for-picking-the-right-game-server_C_Crq1pN.mjs'),"/src/content/blog/free-factorio-steam-key.md": () => import('../free-factorio-steam-key_CJZu8tiJ.mjs'),"/src/content/blog/guide-to-add-mods-to-factorio-server.md": () => import('../guide-to-add-mods-to-factorio-server_BS71wJb5.mjs'),"/src/content/blog/how-a-csgo-game-server-ups-your-gamplay-experience.md": () => import('../how-a-csgo-game-server-ups-your-gamplay-experience_Kt4e2cO5.mjs'),"/src/content/blog/how-can-i-improve-latency-when-im-playing-minecraft.md": () => import('../how-can-i-improve-latency-when-im-playing-minecraft_D94Y9fgQ.mjs'),"/src/content/blog/how-can-you-improve-your-gaming-experience.md": () => import('../how-can-you-improve-your-gaming-experience_BAB62Z21.mjs'),"/src/content/blog/how-mobile-gaming-has-taken-over-pc-and-console-gaming.md": () => import('../how-mobile-gaming-has-taken-over-pc-and-console-gaming_BJ-3Ay1y.mjs'),"/src/content/blog/how-to-choose-between-minecraft-java-and-bedrock-editions.md": () => import('../how-to-choose-between-minecraft-java-and-bedrock-editions_DedpDgBQ.mjs'),"/src/content/blog/how-to-choose-the-right-game-server-hosting.md": () => import('../how-to-choose-the-right-game-server-hosting_t03RFwUr.mjs'),"/src/content/blog/how-to-find-the-best-minecraft-hosting-services-for-you.md": () => import('../how-to-find-the-best-minecraft-hosting-services-for-you_0j7rpce9.mjs'),"/src/content/blog/how-to-find-the-best-minecraft-servers.md": () => import('../how-to-find-the-best-minecraft-servers_B9ZYPtlk.mjs'),"/src/content/blog/how-to-fix-common-minecraft-issues.md": () => import('../how-to-fix-common-minecraft-issues_7z9CyFLB.mjs'),"/src/content/blog/how-to-have-the-best-play-experience-using-a-server-host.md": () => import('../how-to-have-the-best-play-experience-using-a-server-host_COaaVQnE.mjs'),"/src/content/blog/how-to-increase-fps-in-minecraft.md": () => import('../how-to-increase-fps-in-minecraft_emF8iDAz.mjs'),"/src/content/blog/how-to-make-a-minecraft-server-with-mods.md": () => import('../how-to-make-a-minecraft-server-with-mods_BgcZpxHY.mjs'),"/src/content/blog/how-to-make-jaw-dropping-minecraft-skins.md": () => import('../how-to-make-jaw-dropping-minecraft-skins_dCJhCa2D.mjs'),"/src/content/blog/how-to-protect-your-eyes-as-a-gamer.md": () => import('../how-to-protect-your-eyes-as-a-gamer_BZgh5TZb.mjs'),"/src/content/blog/how-to-setup-your-minecraft-bedrock-server.md": () => import('../how-to-setup-your-minecraft-bedrock-server_D199GABm.mjs'),"/src/content/blog/how-to-speed-up-your-internet-connection-for-games.md": () => import('../how-to-speed-up-your-internet-connection-for-games_HiEkwxYP.mjs'),"/src/content/blog/how-to-survive-in-valheim.md": () => import('../how-to-survive-in-valheim_D6q62AjR.mjs'),"/src/content/blog/how-to-survive-the-first-7-days-in-7-days-to-die.md": () => import('../how-to-survive-the-first-7-days-in-7-days-to-die_Z00i_5lJ.mjs'),"/src/content/blog/how-using-a-server-will-enhance-your-gaming-experience.md": () => import('../how-using-a-server-will-enhance-your-gaming-experience_Dwt8aCYC.mjs'),"/src/content/blog/markdown-style-guide copy.md": () => import('../markdown-style-guide copy_CpNFL56o.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_D6mL96md.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_DrwvwnMy.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_DdVANB6z.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_D61987XQ.mjs')});
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
lookupMap = {"blog":{"type":"content","entries":{"10-terraria-tips-and-tricks-for-new-players":"/src/content/blog/10-terraria-tips-and-tricks-for-new-players.md","3-tips-for-starting-and-maintaining-your-minecraft-server":"/src/content/blog/3-tips-for-starting-and-maintaining-your-minecraft-server.md","5-things-to-look-for-a-factorio-server":"/src/content/blog/5-things-to-look-for-a-factorio-server.md","5-secrets-for-not-looking-like-a-noob-tf2":"/src/content/blog/5-secrets-for-not-looking-like-a-noob-tf2.md","6_tips_for_mastering_necesse":"/src/content/blog/6_tips_for_mastering_necesse.md","11-tricks-for-holdfast-beginners":"/src/content/blog/11-tricks-for-holdfast-beginners.md","6-key-benefits-of-vps-hosting":"/src/content/blog/6-key-benefits-of-vps-hosting.md","7-tips-for-choosing-your-valheim-server":"/src/content/blog/7-tips-for-choosing-your-valheim-server.md","9-minecraft-tips":"/src/content/blog/9-minecraft-tips.md","7-major-benefits-of-having-your-own-game-server":"/src/content/blog/7-major-benefits-of-having-your-own-game-server.md","a-guide-to-pci-compliant-hosting-why-is-it-important":"/src/content/blog/a-guide-to-pci-compliant-hosting-why-is-it-important.md","aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay":"/src/content/blog/aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay.md","avorion-dedicated-server":"/src/content/blog/avorion-dedicated-server.md","beginners-guide-to-learning-how-to-play-factorio":"/src/content/blog/beginners-guide-to-learning-how-to-play-factorio.md","battle-for-supremancy-starbound-vs-terraria":"/src/content/blog/battle-for-supremancy-starbound-vs-terraria.md","best-starbound-mods-for-your-server":"/src/content/blog/best-starbound-mods-for-your-server.md","clever-minecraft-easter-eggs-every-minecrafter-should-know-about":"/src/content/blog/clever-minecraft-easter-eggs-every-minecrafter-should-know-about.md","aleforges-new-look":"/src/content/blog/aleforges-new-look.md","crack-the-code-of-modded-games":"/src/content/blog/crack-the-code-of-modded-games.md","dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues":"/src/content/blog/dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues.md","debunking-website-security-myths-are-you-falling-for-these":"/src/content/blog/debunking-website-security-myths-are-you-falling-for-these.md","dont-starve-together-6-things-to-know":"/src/content/blog/dont-starve-together-6-things-to-know.md","dos-and-donts-of-playing-core-keeper":"/src/content/blog/dos-and-don'ts-of-playing-core-keeper.md","everything-to-know-about-modded-minecraft":"/src/content/blog/everything-to-know-about-modded-minecraft.md","emergence_video_game_art":"/src/content/blog/emergence_video_game_art.md","everything-you-need-to-know-about-project-zomboid-build-42":"/src/content/blog/everything-you-need-to-know-about-project-zomboid-build-42.md","exploring-your-options-for-a-terraria-server":"/src/content/blog/exploring-your-options-for-a-terraria-server.md","february-game-server-giveaway":"/src/content/blog/february-game-server-giveaway.md","first-post":"/src/content/blog/first-post.md","five-tips-for-picking-the-right-game-server":"/src/content/blog/five-tips-for-picking-the-right-game-server.md","free-factorio-steam-key":"/src/content/blog/free-factorio-steam-key.md","guide-to-add-mods-to-factorio-server":"/src/content/blog/guide-to-add-mods-to-factorio-server.md","how-a-csgo-game-server-ups-your-gamplay-experience":"/src/content/blog/how-a-csgo-game-server-ups-your-gamplay-experience.md","how-can-i-improve-latency-when-im-playing-minecraft":"/src/content/blog/how-can-i-improve-latency-when-im-playing-minecraft.md","how-can-you-improve-your-gaming-experience":"/src/content/blog/how-can-you-improve-your-gaming-experience.md","how-mobile-gaming-has-taken-over-pc-and-console-gaming":"/src/content/blog/how-mobile-gaming-has-taken-over-pc-and-console-gaming.md","how-to-choose-between-minecraft-java-and-bedrock-editions":"/src/content/blog/how-to-choose-between-minecraft-java-and-bedrock-editions.md","how-to-choose-the-right-game-server-hosting":"/src/content/blog/how-to-choose-the-right-game-server-hosting.md","how-to-find-the-best-minecraft-hosting-services-for-you":"/src/content/blog/how-to-find-the-best-minecraft-hosting-services-for-you.md","how-to-find-the-best-minecraft-servers":"/src/content/blog/how-to-find-the-best-minecraft-servers.md","how-to-fix-common-minecraft-issues":"/src/content/blog/how-to-fix-common-minecraft-issues.md","how-to-have-the-best-play-experience-using-a-server-host":"/src/content/blog/how-to-have-the-best-play-experience-using-a-server-host.md","how-to-increase-fps-in-minecraft":"/src/content/blog/how-to-increase-fps-in-minecraft.md","how-to-make-a-minecraft-server-with-mods":"/src/content/blog/how-to-make-a-minecraft-server-with-mods.md","how-to-protect-your-eyes-as-a-gamer":"/src/content/blog/how-to-protect-your-eyes-as-a-gamer.md","how-to-setup-your-minecraft-bedrock-server":"/src/content/blog/how-to-setup-your-minecraft-bedrock-server.md","how-to-make-jaw-dropping-minecraft-skins":"/src/content/blog/how-to-make-jaw-dropping-minecraft-skins.md","how-to-survive-in-valheim":"/src/content/blog/how-to-survive-in-valheim.md","how-to-speed-up-your-internet-connection-for-games":"/src/content/blog/how-to-speed-up-your-internet-connection-for-games.md","how-to-survive-the-first-7-days-in-7-days-to-die":"/src/content/blog/how-to-survive-the-first-7-days-in-7-days-to-die.md","markdown-style-guide-copy":"/src/content/blog/markdown-style-guide copy.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx","how-using-a-server-will-enhance-your-gaming-experience":"/src/content/blog/how-using-a-server-will-enhance-your-gaming-experience.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/10-terraria-tips-and-tricks-for-new-players.md": () => import('../10-terraria-tips-and-tricks-for-new-players_0hrDUWW4.mjs'),"/src/content/blog/11-tricks-for-holdfast-beginners.md": () => import('../11-tricks-for-holdfast-beginners_DLUOVIIq.mjs'),"/src/content/blog/3-tips-for-starting-and-maintaining-your-minecraft-server.md": () => import('../3-tips-for-starting-and-maintaining-your-minecraft-server_DeKDPZyI.mjs'),"/src/content/blog/5-secrets-for-not-looking-like-a-noob-tf2.md": () => import('../5-secrets-for-not-looking-like-a-noob-tf2_CaTVp5Wq.mjs'),"/src/content/blog/5-things-to-look-for-a-factorio-server.md": () => import('../5-things-to-look-for-a-factorio-server_tH1Y_oHL.mjs'),"/src/content/blog/6-key-benefits-of-vps-hosting.md": () => import('../6-key-benefits-of-vps-hosting_CbOx8jPB.mjs'),"/src/content/blog/6_tips_for_mastering_necesse.md": () => import('../6_tips_for_mastering_necesse_CctcQmEb.mjs'),"/src/content/blog/7-major-benefits-of-having-your-own-game-server.md": () => import('../7-major-benefits-of-having-your-own-game-server_BALnFd-T.mjs'),"/src/content/blog/7-tips-for-choosing-your-valheim-server.md": () => import('../7-tips-for-choosing-your-valheim-server_DF6hk81x.mjs'),"/src/content/blog/9-minecraft-tips.md": () => import('../9-minecraft-tips_CK3xk-9-.mjs'),"/src/content/blog/a-guide-to-pci-compliant-hosting-why-is-it-important.md": () => import('../a-guide-to-pci-compliant-hosting-why-is-it-important_BDCjKqRu.mjs'),"/src/content/blog/aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay.md": () => import('../aleforge-accepts-cryptocurrency-for-global-payments-through-bitpay_4ZjJ6yuf.mjs'),"/src/content/blog/aleforges-new-look.md": () => import('../aleforges-new-look_Gzf3nZYN.mjs'),"/src/content/blog/avorion-dedicated-server.md": () => import('../avorion-dedicated-server_BY7bAtWL.mjs'),"/src/content/blog/battle-for-supremancy-starbound-vs-terraria.md": () => import('../battle-for-supremancy-starbound-vs-terraria_CCahBxF8.mjs'),"/src/content/blog/beginners-guide-to-learning-how-to-play-factorio.md": () => import('../beginners-guide-to-learning-how-to-play-factorio_dMEhBgLv.mjs'),"/src/content/blog/best-starbound-mods-for-your-server.md": () => import('../best-starbound-mods-for-your-server_D61J7k6Q.mjs'),"/src/content/blog/clever-minecraft-easter-eggs-every-minecrafter-should-know-about.md": () => import('../clever-minecraft-easter-eggs-every-minecrafter-should-know-about_B5keeSHa.mjs'),"/src/content/blog/crack-the-code-of-modded-games.md": () => import('../crack-the-code-of-modded-games_toXaqKBM.mjs'),"/src/content/blog/dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues.md": () => import('../dealing-with-high-capacity-ways-to-handle-minecraft-lag-issues_2KTZwV_p.mjs'),"/src/content/blog/debunking-website-security-myths-are-you-falling-for-these.md": () => import('../debunking-website-security-myths-are-you-falling-for-these_HOSoUABf.mjs'),"/src/content/blog/dont-starve-together-6-things-to-know.md": () => import('../dont-starve-together-6-things-to-know_D5jy3SxM.mjs'),"/src/content/blog/dos-and-don'ts-of-playing-core-keeper.md": () => import('../dos-and-don\'ts-of-playing-core-keeper_BSJR9tWt.mjs'),"/src/content/blog/emergence_video_game_art.md": () => import('../emergence_video_game_art_CQN-vVBR.mjs'),"/src/content/blog/everything-to-know-about-modded-minecraft.md": () => import('../everything-to-know-about-modded-minecraft_Bvm47gCh.mjs'),"/src/content/blog/everything-you-need-to-know-about-project-zomboid-build-42.md": () => import('../everything-you-need-to-know-about-project-zomboid-build-42_D8t28kXg.mjs'),"/src/content/blog/exploring-your-options-for-a-terraria-server.md": () => import('../exploring-your-options-for-a-terraria-server_esUL0cxh.mjs'),"/src/content/blog/february-game-server-giveaway.md": () => import('../february-game-server-giveaway_BAvJeIYT.mjs'),"/src/content/blog/first-post.md": () => import('../first-post_BhVMiZUf.mjs'),"/src/content/blog/five-tips-for-picking-the-right-game-server.md": () => import('../five-tips-for-picking-the-right-game-server_BypYCvb0.mjs'),"/src/content/blog/free-factorio-steam-key.md": () => import('../free-factorio-steam-key_DH8mAvkE.mjs'),"/src/content/blog/guide-to-add-mods-to-factorio-server.md": () => import('../guide-to-add-mods-to-factorio-server_B55LjXaF.mjs'),"/src/content/blog/how-a-csgo-game-server-ups-your-gamplay-experience.md": () => import('../how-a-csgo-game-server-ups-your-gamplay-experience_CV0NJMDc.mjs'),"/src/content/blog/how-can-i-improve-latency-when-im-playing-minecraft.md": () => import('../how-can-i-improve-latency-when-im-playing-minecraft_emE40Jkf.mjs'),"/src/content/blog/how-can-you-improve-your-gaming-experience.md": () => import('../how-can-you-improve-your-gaming-experience_CIisHOje.mjs'),"/src/content/blog/how-mobile-gaming-has-taken-over-pc-and-console-gaming.md": () => import('../how-mobile-gaming-has-taken-over-pc-and-console-gaming_E8lEcauk.mjs'),"/src/content/blog/how-to-choose-between-minecraft-java-and-bedrock-editions.md": () => import('../how-to-choose-between-minecraft-java-and-bedrock-editions_d4izgBBR.mjs'),"/src/content/blog/how-to-choose-the-right-game-server-hosting.md": () => import('../how-to-choose-the-right-game-server-hosting_BQcsPTls.mjs'),"/src/content/blog/how-to-find-the-best-minecraft-hosting-services-for-you.md": () => import('../how-to-find-the-best-minecraft-hosting-services-for-you_B8d_1x24.mjs'),"/src/content/blog/how-to-find-the-best-minecraft-servers.md": () => import('../how-to-find-the-best-minecraft-servers_DuSFNG-B.mjs'),"/src/content/blog/how-to-fix-common-minecraft-issues.md": () => import('../how-to-fix-common-minecraft-issues_DF3n_KMt.mjs'),"/src/content/blog/how-to-have-the-best-play-experience-using-a-server-host.md": () => import('../how-to-have-the-best-play-experience-using-a-server-host_CAV_Z5py.mjs'),"/src/content/blog/how-to-increase-fps-in-minecraft.md": () => import('../how-to-increase-fps-in-minecraft_D_7-20ZY.mjs'),"/src/content/blog/how-to-make-a-minecraft-server-with-mods.md": () => import('../how-to-make-a-minecraft-server-with-mods_kCm2U0Dr.mjs'),"/src/content/blog/how-to-make-jaw-dropping-minecraft-skins.md": () => import('../how-to-make-jaw-dropping-minecraft-skins_CNndQtU8.mjs'),"/src/content/blog/how-to-protect-your-eyes-as-a-gamer.md": () => import('../how-to-protect-your-eyes-as-a-gamer_vB9Aap7k.mjs'),"/src/content/blog/how-to-setup-your-minecraft-bedrock-server.md": () => import('../how-to-setup-your-minecraft-bedrock-server_DN7OIPzJ.mjs'),"/src/content/blog/how-to-speed-up-your-internet-connection-for-games.md": () => import('../how-to-speed-up-your-internet-connection-for-games_DlLV11Td.mjs'),"/src/content/blog/how-to-survive-in-valheim.md": () => import('../how-to-survive-in-valheim_BxT1hSaO.mjs'),"/src/content/blog/how-to-survive-the-first-7-days-in-7-days-to-die.md": () => import('../how-to-survive-the-first-7-days-in-7-days-to-die_CkInO_BF.mjs'),"/src/content/blog/how-using-a-server-will-enhance-your-gaming-experience.md": () => import('../how-using-a-server-will-enhance-your-gaming-experience_Bmvm18lk.mjs'),"/src/content/blog/markdown-style-guide copy.md": () => import('../markdown-style-guide copy_CdiE2r2f.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_BLiYQEmS.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_C6MLzXWa.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_gD62E8FY.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_CSriwQZy.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/FormattedDate.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const currentPath = Astro2.url.pathname;
  const { title, description, pubDate, updatedDate, heroImage, categories, articleSection, articleTag } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-bvzihdzo> <head>', "<title>", ' | AleForge</title><meta name="description"', '><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:locale" content="en_US"><meta name="keywords"', '><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Twitter Card data --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@AleForgeHosting"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:creator" content="@AleForgeHosting"><!-- Twitter summary card with large image must be at least 280x150px --><meta name="twitter:image:src"', '><!-- Open Graph data --><meta property="og:title"', '><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:image"', '><meta property="og:description"', '><meta property="og:site_name" content="AleForge"><meta property="article:published_time"', '><meta property="article:modified_time"', '><meta property="article:section"', '><meta property="article:tag"', '><meta property="fb:app_id" content="2877703308935482"><!-- Schema --><script type="application/ld+json">', "<\/script>", '</head> <body data-astro-cid-bvzihdzo> <div class="top-bg" data-astro-cid-bvzihdzo> ', ' </div> <section id="blog-post" data-astro-cid-bvzihdzo> <div class="container" data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ', ' </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ', " ", " </div> <h1 data-astro-cid-bvzihdzo>", "</h1> <hr data-astro-cid-bvzihdzo> </div> </div> ", ' <a href="/blog" class="button tiny mt-5" data-astro-cid-bvzihdzo>\xAB Back to Blog</a> </article> </div> </section> ', " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "data-astro-cid-bvzihdzo": true }), title, addAttribute(description, "content"), addAttribute(categories, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute("https://aleforge.net" + heroImage, "content"), addAttribute(title, "content"), addAttribute("https://aleforge.net" + currentPath, "content"), addAttribute("https://aleforge.net" + heroImage, "content"), addAttribute(description, "content"), addAttribute(pubDate, "content"), addAttribute(updatedDate, "content"), addAttribute(articleSection, "content"), addAttribute(articleTag, "content"), unescapeHTML(`
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://aleforge.net${currentPath}" },
    "headline": "${title}",
    "author": {
      "@type": "Organization",
      "name": "AleForge",
      "url": "https://aleforge.net/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AleForge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aleforge.net/images/logo.webp"
      }
    },
    "datePublished": "${pubDate}",
    "dateModified": "${updatedDate ? updatedDate : ""}"
  }
`), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true }), heroImage && renderTemplate`<img${addAttribute(960, "width")}${addAttribute(240, "height")}${addAttribute(heroImage, "src")} alt="" class="responsive-img" data-astro-cid-bvzihdzo>`, renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true }), updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`, title, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  console.log("Current Post:", post);
  const relatedPosts = posts.filter(
    (otherPost) => otherPost.data.categories && // Ensure categories exist
    otherPost.data.categories.some((category) => post.data.categories && post.data.categories.includes(category)) && otherPost.slug !== post.data.slug
  ).slice(0, 3);
  console.log("Related Posts:", relatedPosts);
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "data-astro-cid-7jjqptxk": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="prose" data-astro-cid-7jjqptxk><h1 data-astro-cid-7jjqptxk>${post.data.title}</h1>${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })}</div><div class="related-posts" data-astro-cid-7jjqptxk><h2 data-astro-cid-7jjqptxk>Related Posts</h2><div class="row" data-astro-cid-7jjqptxk>${relatedPosts.map((relatedPost) => renderTemplate`<div class="col col-lg-4"${addAttribute(relatedPost.slug, "key")} data-astro-cid-7jjqptxk><a${addAttribute(`/blog/${relatedPost.slug}/`, "href")} class="blog-box" data-astro-cid-7jjqptxk><div class="blog-box-img" data-astro-cid-7jjqptxk><img${addAttribute(relatedPost.data.heroImage, "src")} alt="" class="responsive-img" data-astro-cid-7jjqptxk></div><div class="blog-box-inner" data-astro-cid-7jjqptxk><p class="blog-date" data-astro-cid-7jjqptxk>${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": relatedPost.data.pubDate, "data-astro-cid-7jjqptxk": true })}</p><h4 class="blog-title" data-astro-cid-7jjqptxk>${relatedPost.data.title}</h4><strong class="blue" data-astro-cid-7jjqptxk>Read More &raquo;</strong></div></a></div>`)}</div></div>` })}`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, ____slug_ as _, $$Header as a, $$BaseHead as b, $$FormattedDate as c, getCollection as g };

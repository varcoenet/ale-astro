import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, j as renderComponent, l as renderHead } from '../astro_Dj1lkFpt.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$BaseHead } from './__fq41kliT.mjs';
import { $ as $$SupportLinks, a as $$Map } from './about_0H_EvWZ9.mjs';
import { a as $$FAQ, b as $$CompareTable, c as $$GamePanel, d as $$ThreeGuarantees, $ as $$TPWidget } from './factorio_Bni6SCbu.mjs';
import 'clsx';

const $$Astro$3 = createAstro("https://example.com");
const $$MinecraftPlan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MinecraftPlan;
  const { img, title, ram, ssd, price, link, cores } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="mc-bg"> <span class="label redbg mc-popular">Popular</span> <h4>${title}</h4> <img${addAttribute(img, "src")}> <h2>${price}</h2> <ul> <li><strong>${cores}</strong> CPU Cores</li> <li><strong>${ram}</strong> Memory</li> <li><strong>${ssd}</strong> SSD Storage</li> </ul> <strong class="blue block mt-3">Order Now &raquo;</strong> </a>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/MinecraftPlan.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$MineCraftBedrockPlans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MineCraftBedrockPlans;
  return renderTemplate`${maybeRenderHead()}<div class="tab-pane" id="type-tab-2"> <div class="text-center relative type-wrap"> <strong class="choose-type">Choose server type:</strong> <ul class="nav nav-tabs newgs-tabs" role="tablist"> <li> <a href="javascript:void(0)" id="newgs-tab3" data-bs-toggle="tab" data-bs-target="#newgs-tabs-3" role="tab" aria-controls="newgs-tabs-3" aria-selected="true" class="active" tabindex="-1">Standard</a> </li> <li> <a href="javascript:void(0)" id="newgs-tab4" data-bs-toggle="tab" data-bs-target="#newgs-tabs-4" role="tab" aria-controls="newgs-tabs-4" aria-selected="false" class="" tabindex="-1"> <div class="more-performance"><div class="more-label">Better Hardware & Network!</div></div> Premium<strong class="block font-12 green">30% Faster</strong> </a> </li> </ul> </div> <div class="tab-content" id="minecraft-tabs-new"> <div class="tab-pane active" id="newgs-tabs-3" role="tabpanel"> <div class="row"> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-slime", "title": "Slime", "img": "/images/mc-1.webp", "price": "$1.99", "cores": "2", "ram": "1 GB", "ssd": "10 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-wither", "title": "Wither", "img": "/images/mc-2.webp", "price": "$3.99", "cores": "2", "ram": "2 GB", "ssd": "15 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-skeleton", "title": "Skeleton", "img": "/images/mc-3.webp", "price": "$5.99", "cores": "2", "ram": "3 GB", "ssd": "20 GB" })} </div> <div class="col col-lg-25 has-popular"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-creeper", "title": "Creeper", "img": "/images/mc-4.webp", "price": "$7.99", "cores": "2", "ram": "4 GB", "ssd": "25 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-ghast", "title": "Ghast", "img": "/images/mc-5.webp", "price": "$11.99", "cores": "2", "ram": "6 GB", "ssd": "30 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-zombie", "title": "Zombie", "img": "/images/mc-6.webp", "price": "$15.99", "cores": "2", "ram": "8 GB", "ssd": "35 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-spider", "title": "Spider", "img": "/images/mc-7.webp", "price": "$19.99", "cores": "2", "ram": "10 GB", "ssd": "40 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-zombie-pigman", "title": "Zombie Pigman", "img": "/images/mc-8.webp", "price": "$23.99", "cores": "2", "ram": "12 GB", "ssd": "45 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-enderman", "title": "Enderman", "img": "/images/mc-9.webp", "price": "$28.99", "cores": "2", "ram": "14 GB", "ssd": "50 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-bedrock-ender-dragon-custom-to-order", "title": "Custom to Order", "img": "/images/mc-10.webp", "price": "$11.99+", "cores": "2-4", "ram": "~64 GB", "ssd": "~500 GB" })} </div> </div> </div> <div class="tab-pane" id="newgs-tabs-4" role="tabpanel"> <div class="row"> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-slime", "title": "Slime", "img": "/images/mc-1.webp", "price": "$2.99", "cores": "4", "ram": "1 GB", "ssd": "15 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-wither", "title": "Wither", "img": "/images/mc-2.webp", "price": "$5.99", "cores": "4", "ram": "2 GB", "ssd": "20 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-skeleton", "title": "Skeleton", "img": "/images/mc-3.webp", "price": "$8.99", "cores": "4", "ram": "3 GB", "ssd": "25 GB" })} </div> <div class="col col-lg-25 has-popular"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-creeper", "title": "Creeper", "img": "/images/mc-4.webp", "price": "$11.99", "cores": "4", "ram": "4 GB", "ssd": "30 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-ghast", "title": "Ghast", "img": "/images/mc-5.webp", "price": "$17.99", "cores": "4", "ram": "6 GB", "ssd": "35 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-zombie", "title": "Zombie", "img": "/images/mc-6.webp", "price": "$23.99", "cores": "4", "ram": "8 GB", "ssd": "40 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-spider", "title": "Spider", "img": "/images/mc-7.webp", "price": "$29.99", "cores": "4", "ram": "10 GB", "ssd": "45 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-zombie-pigman", "title": "Zombie Pigman", "img": "/images/mc-8.webp", "price": "$35.99", "cores": "4", "ram": "12 GB", "ssd": "50 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-enderman", "title": "Enderman", "img": "/images/mc-9.webp", "price": "$41.99", "cores": "4", "ram": "14 GB", "ssd": "55 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-bedrock-ender-dragon-custom-to-order", "title": "Custom to Order", "img": "/images/mc-10.webp", "price": "$17.99+", "cores": "4-6", "ram": "~64 GB", "ssd": "~500 GB" })} </div> </div> </div> </div> </div>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/MineCraftBedrockPlans.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$MineCraftJavaPlans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MineCraftJavaPlans;
  return renderTemplate`${maybeRenderHead()}<div class="tab-pane active show" id="type-tab-1"> <div class="text-center relative type-wrap"> <strong class="choose-type">Choose server type:</strong> <ul class="nav nav-tabs newgs-tabs" role="tablist"> <li> <a href="javascript:void(0)" id="newgs-tab1" data-bs-toggle="tab" data-bs-target="#newgs-tabs-1" role="tab" aria-controls="newgs-tabs-1" aria-selected="true" class="active" tabindex="-1">Standard</a> </li> <li> <a href="javascript:void(0)" id="newgs-tab2" data-bs-toggle="tab" data-bs-target="#newgs-tabs-2" role="tab" aria-controls="newgs-tabs-2" aria-selected="false" class="" tabindex="-1">
Premium<strong class="block font-12 green">30% Faster</strong> </a> </li> </ul> </div> <div class="tab-content" id="minecraft-tabs-new"> <div class="tab-pane active" id="newgs-tabs-1" role="tabpanel"> <div class="row"> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-slime", "title": "Slime", "img": "/images/mc-1.webp", "price": "$1.99", "cores": "2", "ram": "1 GB", "ssd": "10 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-wither", "title": "Wither", "img": "/images/mc-2.webp", "price": "$3.99", "cores": "2", "ram": "2 GB", "ssd": "15 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-skeleton", "title": "Skeleton", "img": "/images/mc-3.webp", "price": "$5.99", "cores": "2", "ram": "3 GB", "ssd": "20 GB" })} </div> <div class="col col-lg-25 has-popular"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-creeper", "title": "Creeper", "img": "/images/mc-4.webp", "price": "$7.99", "cores": "2", "ram": "4 GB", "ssd": "25 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-ghast", "title": "Ghast", "img": "/images/mc-5.webp", "price": "$11.99", "cores": "2", "ram": "6 GB", "ssd": "30 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-zombie", "title": "Zombie", "img": "/images/mc-6.webp", "price": "$15.99", "cores": "2", "ram": "8 GB", "ssd": "35 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-spider", "title": "Spider", "img": "/images/mc-7.webp", "price": "$19.99", "cores": "2", "ram": "10 GB", "ssd": "40 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-zombie-pigman", "title": "Zombie Pigman", "img": "/images/mc-8.webp", "price": "$23.99", "cores": "2", "ram": "12 GB", "ssd": "45 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-enderman", "title": "Enderman", "img": "/images/mc-9.webp", "price": "$28.99", "cores": "2", "ram": "14 GB", "ssd": "50 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/standard/minecraft-java-ender-dragon-cto", "title": "Custom to Order", "img": "/images/mc-10.webp", "price": "$11.99+", "cores": "2-4", "ram": "~64 GB", "ssd": "~500 GB" })} </div> </div> </div> <div class="tab-pane" id="newgs-tabs-2" role="tabpanel"> <div class="row"> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-slime", "title": "Slime", "img": "/images/mc-1.webp", "price": "$2.99", "cores": "4", "ram": "1 GB", "ssd": "15 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-wither", "title": "Wither", "img": "/images/mc-2.webp", "price": "$5.99", "cores": "4", "ram": "2 GB", "ssd": "20 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-skeleton", "title": "Skeleton", "img": "/images/mc-3.webp", "price": "$8.99", "cores": "4", "ram": "3 GB", "ssd": "25 GB" })} </div> <div class="col col-lg-25 has-popular"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-creeper", "title": "Creeper", "img": "/images/mc-4.webp", "price": "$11.99", "cores": "4", "ram": "4 GB", "ssd": "30 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-ghast", "title": "Ghast", "img": "/images/mc-5.webp", "price": "$17.99", "cores": "4", "ram": "6 GB", "ssd": "35 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-zombie", "title": "Zombie", "img": "/images/mc-6.webp", "price": "$23.99", "cores": "4", "ram": "8 GB", "ssd": "40 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-spider", "title": "Spider", "img": "/images/mc-7.webp", "price": "$29.99", "cores": "4", "ram": "10 GB", "ssd": "45 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-zombie-pigman", "title": "Zombie Pigman", "img": "/images/mc-8.webp", "price": "$35.99", "cores": "4", "ram": "12 GB", "ssd": "50 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-enderman", "title": "Enderman", "img": "/images/mc-9.webp", "price": "$41.99", "cores": "4", "ram": "14 GB", "ssd": "55 GB" })} </div> <div class="col col-lg-25"> ${renderComponent($$result, "MinecraftPlan", $$MinecraftPlan, { "link": "https://billing.aleforge.net/store/premium/minecraft-java-ender-dragon-custom-to-order", "title": "Custom to Order", "img": "/images/mc-10.webp", "price": "$17.99+", "cores": "4-6", "ram": "~64 GB", "ssd": "~500 GB" })} </div> </div> </div> </div> </div>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/MineCraftJavaPlans.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Minecraft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Minecraft;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', `<title>Minecraft Server Hosting | AleForge</title><meta name="description" content="Extreme performance Minecraft server hosting for only $2.00/GB. Affordable, 99.9% uptime, and DDoS Protection. Fewer issues, more fun."><meta name="keywords" content="minecraft server hosting, minecraft servers, minecraft server, mc server host, game server hosting"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:locale" content="en_US"><meta name="viewport" content="width=device-width, initial-scale=1"><meta itemprop="name" content="Minecraft Server Hosting | AleForge"><meta itemprop="description" content="Create your own lag free Minecraft server for only $1.50/GB. Affordable, 99.9% uptime, and DDoS Protection. Fewer issues, more fun."><meta itemprop="image" content="https://aleforge.net/images/game-minecraft.webp"><link rel="canonical" href="https://aleforge.net/games/minecraft"><!-- Twitter Card data --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@AleForgeHosting"><meta name="twitter:title" content="Minecraft Server Hosting | AleForge"><meta name="twitter:description" content="Create your own lag free Minecraft server for only $1.50/GB. Affordable, 99.9% uptime, and DDoS Protection. Fewer issues, more fun."><meta name="twitter:creator" content="@AleForgeHosting"><meta name="twitter:image" content="https://aleforge.net/images/game-minecraft.webp"><!-- Open Graph data --><meta property="og:title" content="Minecraft Server Hosting | AleForge"><meta property="og:type" content="website"><meta property="og:url" content="https://aleforge.net/games/minecraft"><meta property="og:description" content="Create your own lag free Minecraft server for only $1.50/GB. Affordable, 99.9% uptime, and DDoS Protection. Fewer issues, more fun."><meta property="og:site_name" content="AleForge"><meta property="og:image" content="https://aleforge.net/images/game-minecraft.webp"><meta property="fb:app_id" content="2877703308935482"><!-- schema --><script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "Product",
				"name": "Minecraft Server Hosting",
				"image": "https://aleforge.net/images/logo.webp",
				"description": "High performing Minecraft servers with NvME SSD Storage, High Clock speed processors, Extreme Connection Speeds. Your players won't play on a laggy server, so purchase an AleForge server.",
				"brand": {
					"@type": "Brand",
					"name": "AleForge"
				},
				"aggregateRating": {
					"@type": "AggregateRating",
					"ratingValue": 4.8,
					"reviewCount": 121
				}
			}
		<\/script>`, '</head> <body> <div class="top-bg" id="gamebg-minecraft"> ', ` <div id="banner" class="subbanner"> <div class="container"> <ul class="nav nav-tabs" id="minecraft-type-changer" role="tablist"> <li> <a href="javascript:void(0)" id="tab1" data-bs-toggle="tab" data-bs-target="#type-tab-1" role="tab" aria-controls="type-tab-1" aria-selected="true" class="active" tabindex="-1"><img src="/images/minecraft-java.webp"><img src="/images/minecraft-java-active.webp"></a> </li> <li> <a href="javascript:void(0)" id="tab2" data-bs-toggle="tab" data-bs-target="#type-tab-2" role="tab" aria-controls="type-tab-2" aria-selected="false" class="" tabindex="-1"><img src="/images/minecraft-bedrock.webp"><img src="/images/minecraft-bedrock-active.webp"></a> </li> </ul> <h1 class="font-48 mt-4 pt-3">Minecraft Server Hosting</h1> <p class="wide-p">High performing Minecraft servers with NvME SSD Storage, High Clock speed processors, Extreme Connection Speeds. Your players won't play on a laggy server, so purchase an AleForge server.</p> <!-- JAVA PLANS --> <div class="tab-content relative" id="gs-row"> <div id="newgs-tabs-more"><img src="/images/newgs-tabs-arrow.webp"><p>Premium offers better hardware<br>and network performance<br><a href="#comparetables">Learn More</a></p></div> `, " <!-- BEDROCK PLANS --> ", " </div> </div> </div> ", ` </div> <section class="three-feats"> <div class="container"> <div class="title"> <h2><small>Included Features</small>What's Included?</h2> <p>All the latest industry-standard features and more are here, ready for you and your friends to enjoy. Experience luxury gaming at budget prices on our extreme-performance hardware.</p> </div> <div class="row"> <div class="col col-lg-4"> <img src="/images/newgs-icon-ddos.svg" alt="" class="height-50"> <h4>DDoS Protection</h4> <p>Sophisticated protection services mean you never have to worry about a distributed denial-of-service attack.</p> </div> <div class="col col-lg-4"> <img src="/images/modpack.svg" alt="" class="height-50"> <h4>Automatic Modpack Installer</h4> <p>Automatically install modpacks of your choosing such as FTB, CurseForge, Tekkit, and more.</p> </div> <div class="col col-lg-4"> <img src="/images/scheduled-backups.svg" alt="" class="height-50"> <h4>Scheduled Backups</h4> <p>To protect against any world corruption and to keep your progress your worlds are saved automatically on a schedule you define.</p> </div> <div class="col col-lg-4"> <img src="/images/newgs-icon-support.svg" alt="" class="height-50"> <h4>24/7 Support</h4> <p>Our support engineers are waiting to assist with your every need to get your server set up and solve your problems.</p> </div> <div class="col col-lg-4"> <img src="/images/ssd.svg" alt="" class="height-50"> <h4>NVMe SSD Storage</h4> <p>The fastest drives aviabale so you will not be waiting on your worlds to load.</p> </div> <div class="col col-lg-4"> <img src="/images/sftp-access.svg" alt="" class="height-50"> <h4>MySQL/SFTP Access</h4> <p>For advanced users that prefer self-manage, we provide MySQL databases and SFTP access to your server.</p> </div> </div> </div> </section> <section class="grey-bg" id="newgs-rows"> <div class="container"> <div class="row"> <div class="col col-lg-6"> <h2><small>ABOUT MINECRAFT</small>About The Game</h2> <p>Freedom, Adventure, Creativity. Explore an infinite world filled with dangers, hidden gems, and locations to explore. If this gets stale, install mods to keep the game fresh, such as Twilight Forest, Chisel, and Decorative items.</p> <p>If creativity is more your aim, then set up a creative mode server to design, build and create something unique. You may make the next trendy Minecraft Lobby map.</p> <strong>In Minecraft, the choice is yours!</strong> </div> <div class="col col-lg-5 ml-auto"> <div class="newgs-game-feature check-feature mt-0"> <img src="/images/game-check.svg"> <h5>Gather Resources</h5> <p>Gather, transform, and utilize raw materials as you explore an assortment of distinct biomes and structures.</p> </div> <div class="newgs-game-feature check-feature"> <img src="/images/game-check.svg"> <h5>Fight Nefarious Armies</h5> <p>Protect yourself from Zombies, Skeletons, Spiders, and more.</p> </div> <div class="newgs-game-feature check-feature"> <img src="/images/game-check.svg"> <h5>Build Your Own World</h5> <p>Design and build your home or fortress to house your community of villages and friends.</p> </div> </div> </div> </div> <div class="grey-dark-bg" id="newgs-video-row"> <div class="container"> <div class="row"> <div class="col col-lg-6"> <div class="youtube-embed"> <div id="embed-google-map" style="height:100%; width:100%;max-width:100%;"> <iframe allowFullScreen="allowFullScreen" src="https://www.youtube.com/embed/MmB9b5njVbA?ecver=1&iv_load_policy=1&yt:stretch=16:9&autohide=1&color=red&width=560&width=560" width="560" height="320" allowtransparency="true" frameborder="0"></iframe> </div> </div> </div> <div class="col col-lg-5 ml-auto"> <h2 class="pt-4"> <small>MOD SUPPORT</small>Support For All Mods
</h2> <p>We support all the mods for Minecraft. Find your favorite platforms, such as Forge or Fabric, and install every mod you want. Want to pick a mod pack instead, then choose any mod pack and install it with our installer.</p> <a href="https://www.curseforge.com/minecraft/modpacks" target="_blank" class="button">View All Mods</a> </div> </div> </div> </div> <div class="modpacks-wrap" id="modpacks"> <div class="container"> <div class="title"> <h2>All of Your Favorite Modpacks</h2> </div> <div class="row"> <div class="col"> <div class="box"> <img src="/images/spigot-hover.webp" alt=""> <strong>Spigot</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/atl-hover.webp" alt=""> <strong>ATLauncher</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/ftb-hover.webp" alt=""> <strong>Feed The Beast</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/bukkit-hover.webp" alt=""> <strong>Bukkit</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/tekkit-hover.webp" alt=""> <strong>Tekkit</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/forge-hover.webp" alt=""> <strong>Forge</strong> </div> </div> <div class="col"> <div class="box"> <img src="/images/pixelmon-hover.webp" alt=""> <strong>Pixelmon</strong> </div> </div> </div> <div class="flex-grid one"> <div class="col" id="moremp"> <p>Looking for a different modpack? <a href="https://www.curseforge.com/minecraft/modpacks" target="_blank">View them all</a></p> </div> </div> </div> </div> </section> `, " ", " ", " ", ' <section class="faq grey-bg" id="newgs-faq"> <div class="container"> <div class="flex-grid one"> <div class="col"> <h2>FAQ</h2>\nHave your own question? <a href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1">Ask us here &raquo;</a> </div> </div> <div class="row mt-4 pt-2"> <div class="col col-lg-6"> ', " ", " ", " ", ' </div> <div class="col col-lg-6"> ', " ", " ", " ", " </div> </div> </div> </section> ", " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "MineCraftJavaPlans", $$MineCraftJavaPlans, {}), renderComponent($$result, "MineCraftBedrockPlans", $$MineCraftBedrockPlans, {}), renderComponent($$result, "TPWidget", $$TPWidget, {}), renderComponent($$result, "Map", $$Map, {}), renderComponent($$result, "ThreeGuarantees", $$ThreeGuarantees, {}), renderComponent($$result, "GamePanel", $$GamePanel, {}), renderComponent($$result, "CompareTable", $$CompareTable, {}), renderComponent($$result, "FAQ", $$FAQ, { "q": "What is the difference between Standard and Premium?", "a": "Standard was designed cost-effectively for a small group of friends who want to play together. Premium is the best hardware we can source that runs at the fastest speeds, so your server will never lag or slow down. Each has its advantages and disadvantages." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "How do I know the best location to pick?", "a": "You can use the map on this page above to show your real-time pings to each of our locations. Just refresh the page to recalculate your live latency." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "Can I use mods, workshop content, or other custom resources on my server?", "a": "Of course. For Factorio, you will just need to upload the mods from your computer to the server. You can install whole mod packs with a click for other games, such as Minecraft." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "Are the player slots adjustable?", "a": "All Valheim plans are unlimited, and you can change your slots via our control panel. We can recommend a number of slots based on your plan's resources." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "When will my server be set up?", "a": "Once your order payment has been processed, the server will start installing and should be ready within a few minutes. If there are any unusual delays, don't hesitate to contact us with the details so we can correct any issues at once." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "Do you provide DDoS protection?", "a": "Yes, of course! Our automated systems tackle the brunt of these attackers, but if you find yourself under attack, let our staff know and they will make sure additional mitigators are put in place for your server." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "Can I upgrade or downgrade my server?", "a": "Yes. You can change your plan/resources at any time, and your server will automatically have resources added or removed based on your choice." }), renderComponent($$result, "FAQ", $$FAQ, { "q": "Do you offer dedicated IPs?", "a": "Yes, we have dedicated IPs available at checkout. Dedicated IPs are now an additional cost due to the increasing cost due to the IPV4 address shortage." }), renderComponent($$result, "SupportLinks", $$SupportLinks, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/games/minecraft.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/games/minecraft.astro";
const $$url = "/games/minecraft";

export { $$Minecraft as default, $$file as file, $$url as url };

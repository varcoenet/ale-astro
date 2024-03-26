import { c as createAstro, d as createComponent, r as renderTemplate, j as renderComponent, l as renderHead, e as addAttribute, m as maybeRenderHead } from '../astro_Dj1lkFpt.mjs';
import 'kleur/colors';
import { g as getCollection, c as $$FormattedDate, b as $$BaseHead, a as $$Header, $ as $$Footer } from './__fq41kliT.mjs';
import 'clsx';
import { $ as $$TPWidget } from './factorio_Bni6SCbu.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}<title>Blog | AleForge</title>${renderHead()}</head> <body> <div class="top-bg"> ${renderComponent($$result, "Header", $$Header, {})} </div> <section class="blog" id="blog-home"> <div class="container"> <div class="row"> ${posts.map((post) => renderTemplate`<div class="col col-lg-4"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="blog-box"> <div class="blog-box-img"> <img${addAttribute(post.data.heroImage, "src")} alt="" class="responsive-img"> </div> <div class="blog-box-inner"> <p class="blog-date"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> <h4 class="blog-title">${post.data.title}</h4> <strong class="blue">Read More &raquo;</strong> </div> </a> </div>`)} </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://example.com");
const $$Mapsmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mapsmall;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-map small-map"> <div class="pin" id="loc-ca"> <div class="pin-hover"> <strong class="block">San Jose, CA</strong> Test IP: <a href="#">ca1.aleforge.net</a> </div> </div> <div class="pin" id="loc-chi"> <div class="pin-hover"> <strong class="block">Chicago, IL</strong> Test IP: <a href="#">il2.aleforge.net</a> </div> </div> <div class="pin" id="loc-org"> <div class="pin-hover"> <strong class="block">Bend, OR</strong> Test IP: <a href="#">org.aleforge.net</a> </div> </div> <div class="pin" id="loc-tx"> <div class="pin-hover"> <strong class="block">Dallas, TX</strong> Test IP: <a href="#">tx1.aleforge.net</a> </div> </div> <div class="pin active" id="loc-va"> <div class="pin-hover"> <strong class="block">Vint Hill, VA</strong> Test IP: <a href="#">va1.aleforge.net</a> </div> </div> <div class="pin" id="loc-gr"> <div class="pin-hover"> <strong class="block">Frankfurt, GR</strong> Test IP: <a href="#">fr1.aleforge.net</a> </div> </div> <div class="pin" id="loc-au"> <div class="pin-hover"> <strong class="block">Sydney, AU</strong> Test IP: <a href="#">sy1.aleforge.net</a> </div> </div> <div class="pin" id="loc-sg"> <div class="pin-hover"> <strong class="block">Singapore, SG</strong> Test IP: <a href="#">sg1.aleforge.net</a> </div> </div> </div> `;
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/components/mapsmall.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html class="page-homepage" lang="en"> <head>', '<title>Game Server, Discord Bot, and Web Hosting Provider | AleForge</title><meta name="keywords" content="aleforge, game server hosting"><meta name="description" content="Stop paying for slots. Join us on our next gen game server hosting where security and your experience are our priority and gaming is your only concern."><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta property="og:locale" content="en_US"><meta property="og:type" content="website"><meta property="og:title" content="Game Server, Discord Bot, and Web Hosting Provider | AleForge"><link rel="canonical" href="https://aleforge.net/"><!-- Twitter Card data --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@AleForgeHosting"><meta name="twitter:title" content="Game Server, Discord Bot, and Web Hosting Provider | AleForge"><meta name="twitter:description" content="Stop paying for slots. Join us on our next gen game server hosting where security and your experience are our priority and gaming is your only concern."><meta name="twitter:creator" content="@AleForgeHosting"><!-- Open Graph data --><meta property="og:title" content="Game Server, Discord Bot, and Web Hosting Provider | AleForge"><meta property="og:type" content="website"><meta property="og:url" content="https://aleforge.net/"><meta property="og:description" content="Stop paying for slots. Join us on our next gen game server hosting where security and your experience are our priority and gaming is your only concern."><meta property="og:site_name" content="AleForge"><meta property="fb:app_id" content="2877703308935482"><!-- Schema --><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "Corporation",\n				"name": "AleForge",\n				"url": "https://aleforge.net/",\n				"logo": "https://aleforge.net/images/logo.webp",\n				"sameAs": ["https://www.facebook.com/AleForgeHosting", "https://twitter.com/aleforgehosting", "https://www.linkedin.com/company/aleforge/"],\n				"aggregateRating": {\n					"@type": "AggregateRating",\n					"ratingValue": 4.8,\n					"reviewCount": 121\n				}\n			}\n		<\/script>', '</head> <body> <div class="top-bg"> ', ' <div id="banner" class="home-slide"> <div class="container"> <div class="relative"> <div id="carouselGames" class="carousel slide mt-4 pt-2 ptfix" data-bs-ride="carousel" data-bs-interval="25000"> <div class="carousel-inner"> <div class="carousel-item" id="hb-cstwo"> <img src="images/logo-cstwo.svg" alt="" class="mb-3"> <h1>Order a Counter-Strike 2 Server</h1> <p>Starting at just <span>$0.50</span> per slot.</p> <a href="/games/csgo-counter-strike-global-offensive/" class="button">Order CS2 Server</a> </div> <div class="carousel-item active" id="hb-minecraft"> <img src="images/logo-minecraft.svg" alt="" class="mb-3"> <h1>Order a Minecraft Server</h1> <p>Starting at just <span>$1.99</span> per GB.</p> <a href="/games/minecraft/" class="button">Order Minecraft Server</a> </div> <div class="carousel-item" id="hb-valheim"> <img src="images/logo-valheim.webp" srcset="images/logo-valheim@2x.webp 2x" alt="" class="mb-3"> <h1>Order a Terraria Server</h1> <p>Starting at just <span>$0.60</span> per slot.</p> <a href="/games/valheim/" class="button">Order Valheim Server</a> </div> <div class="carousel-item" id="hb-palworld"> <img src="images/logo-palworld.svg" alt="" class="mb-3"> <h1>Order a Palworld Server</h1> <p>Starting at just <span>$1.99</span> per GB.</p> <a href="/games/palworld" class="button">Order Palworld Server</a> </div> <div class="carousel-item" id="hb-terraria"> <img src="images/logo-terraria.webp" srcset="images/logo-terraria@2x.webp 2x" alt="" class="mb-3"> <h1>Order a Terraria Server</h1> <p>Starting at just <span>$0.60</span> per slot.</p> <a href="/games/terraria/" class="button">Order Terraria Server</a> </div> </div> </div> <span class="carousel-control-prev prev" data-bs-target="#carouselGames" data-bs-slide="prev" aria-label="Previous"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </span> <span class="carousel-control-next next" data-bs-target="#carouselGames" data-bs-slide="next" aria-label="Next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </span> </div> <!-- Game Boxes --> <div class="game-boxes-nav"> <div class="row"> <div class="col col-lg-25 home-game-box"> <div class="home-game" id="home-game-cstwo" data-bs-target="#carouselGames" data-bs-slide-to="0"> <div class="gametitle"> <h3>Counter Strike 2</h3> </div> </div> </div> <div class="col col-lg-25 home-game-box active"> <div class="home-game" id="home-game-minecraft" data-bs-target="#carouselGames" data-bs-slide-to="1"> <div class="gametitle"> <h3>Minecraft</h3> </div> </div> </div> <div class="col col-lg-25 home-game-box"> <div class="home-game" id="home-game-valheim" data-bs-target="#carouselGames" data-bs-slide-to="2"> <div class="gametitle"> <h3>Valheim</h3> </div> </div> </div> <div class="col col-lg-25 home-game-box game-is-new"> <div class="home-game" id="home-game-palworld" data-bs-target="#carouselGames" data-bs-slide-to="3"> <div class="gametitle"> <h3>Palworld</h3> <span class="label tiny new">New<span class="hide-mobile">Game</span></span> </div> </div> </div> <div class="col col-lg-25 home-game-box"> <div class="home-game" id="home-game-terraria" data-bs-target="#carouselGames" data-bs-slide-to="4"> <div class="gametitle"> <h3>Terraria</h3> </div> </div> </div> </div> </div> </div> ', ' </div> </div>  <section id="home-services"> <div class="container"> <div class="title"> <h2><small>Services</small>Hosting Related Services</h2> <p>Web hosting designed to provide cutting edge performance with the certificate.</p> </div> <div class="row"> <div class="col col-lg-4 border-right"> <div class="service-box"> <img src="/images/server.svg" class="block mx-auto mb-4" alt=""> <h4 class="pb-2">Shared Hosting</h4> <p class="pb-0">Web hosting designed to provide cutting edge performance with free SSL certificates, and daily backups included by default.</p> <div class="block pb-3 mt-n1"> <span class="starting-at">Starting at</span> <h2>$9.95<span class="font-15">/mo</span></h2> </div> <a href="#" class="button mt-n1">Learn More</a> </div> </div> <div class="col col-lg-4 border-right"> <div class="service-box"> <img src="/images/server.svg" class="block mx-auto mb-4" alt=""> <h4 class="pb-2">WordPress Hosting</h4> <p class="pb-0">Web hosting designed to provide cutting edge performance with free SSL certificates, and daily backups included by default.</p> <div class="block pb-3 mt-n1"> <span class="starting-at">Starting at</span> <h2>$9.95<span class="font-15">/mo</span></h2> </div> <a href="#" class="button mt-n1">Learn More</a> </div> </div> <div class="col col-lg-4"> <div class="service-box"> <img src="/images/server.svg" class="block mx-auto mb-4" alt=""> <h4 class="pb-2">Dedicated Servers</h4> <p class="pb-0">Web hosting designed to provide cutting edge performance with free SSL certificates, and daily backups included by default.</p> <div class="block pb-3 mt-n1"> <span class="starting-at">Starting at</span> <h2>$9.95<span class="font-15">/mo</span></h2> </div> <a href="#" class="button mt-n1">Learn More</a> </div> </div> </div> </div> </section> <section class="grey-bg-small text-center mt-3" id="home-two-features"> <div class="container"> <div class="flex-grid two"> <div class="col col-lg-6"> <div class="min-height-map"> <img src="/images/game-swapping-light.webp" class="responsive-img pb-2" srcset="/images/game-swapping-light.webp 1x, /images/game-swapping-light@2x.webp 2x"> </div> <div class="block pt-4"> <h3 class="font-26 py-1">Swap & Save Games</h3> <p class="pt-1">The few fate this of implemented with title sign of in easier find be left at years, get help only was know for answer small proceeded random intention concept.</p> <a href="#">Learn More &raquo;</a> </div> </div> <div class="col col-lg-6"> <div class="min-height-map pt-2 ptfix"> ', ` </div> <div class="block pt-4"> <h3 class="font-26 py-1">9 Locations Globally</h3> <p class="pt-1">The few fate this of implemented with title sign of in easier find be left at years, get help only was know for answer small proceeded random intention concept.</p> <a href="#">Learn More &raquo;</a> </div> </div> </div> </div> </section> <section class="four-feats" id="home-feats"> <div class="container"> <div class="title"> <h2><small>Included Features</small>Affordable Game Hosting</h2> <p>We did the math. By renting a dedicated game server on AleForge, you can have the best of both worlds: inexpensive game hosting services combined with intuitive defense systems and phenomenal performance.</p> </div> <div class="row"> <div class="col col-lg-3"> <img src="/images/newgs-icon-locations.svg" alt="" class="height-50"> <h4>99.9% Uptime</h4> <p>High-availability means our gamer servers remain fully operational with our guaranteed SLA of 99.9%.</p> </div> <div class="col col-lg-3"> <img src="/images/stats.svg" alt="" class="height-50"> <h4>Public Stats</h4> <p>We go the extra mile and prove our service by publicly showing our <a href="https://status.aleforge.net">server statistics</a> for everyone to view.</p> </div> <div class="col col-lg-3"> <img src="/images/never.svg" alt="" class="height-50"> <h4>Never Oversold</h4> <p>We never over provision our servers so our customers never have to deal with the noisy neighbor issues you have with other providers.</p> </div> <div class="col col-lg-3"> <img src="/images/reverse-proxy.svg" alt="" class="height-50"> <h4>Free DDoS Protection</h4> <p>Our smart protection services keep you safe from all distributed denial-of-service threats.</p> </div> <div class="col col-lg-3"> <img src="/images/server.svg" alt="" class="height-50"> <h4>Dwarven Machines</h4> <p>Top of the line AMD and Intel hardware so you can game with without fear of lag.</p> </div> <div class="col col-lg-3"> <img src="/images/newgs-icon-network.svg" alt="" class="height-50"> <h4>Dwarven Tunneling</h4> <p>All game servers come with gigabit networking standard.</p> </div> <div class="col col-lg-3"> <img src="/images/wallet.svg" alt="" class="height-50"> <h4>Affordable Pricing</h4> <p>Get stable hosting and rapid technical support for an exceptional deal. Our pricing starts at $2.99 per GB of ram.</p> </div> <div class="col col-lg-3"> <img src="/images/ssd.svg" alt="" class="height-50"> <h4>Unlimited Players</h4> <p>No restrictions on your players slots. You determine how many players will be able to join your server simultaneously.</p> </div> </div> <div class="flex-grid one"> <div class="col"> <h5>Are we missing something?</h5> <a href="https://billing.aleforge.net/submitticket.php?step=2&deptid=1" class="button">Contact Us</a> </div> </div> </div> </section> <section class="dark-bg-small text-center" id="panel-reviews"> <div class="container"> <div class="row"> <div class="col col-lg-3 pt-3"> <h4 class="mt-0">Excellent</h4> <a href="https://www.trustpilot.com/review/aleforge.net" target="_blank"> <img src="/images/trustpilot-stars.svg" class="mt-1 mb-2" alt=""> </a> <span class="block pt-3 ptfix">
Based on over <strong>100+ reviews</strong> at
<a href="https://www.trustpilot.com/review/aleforge.net" target="_blank"> <img src="/images/tp-logo.svg" class="va-mid tp-logo-home" alt=""> </a> </span> </div> <div class="col col-lg-9"> <div class="block testimonials-has-left-info pt-2"> <div id="carousel-testimonials" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item"> <div class="flex-grid one"> <div class="col slider"> <p>"Was off to a rough start at first since I know nothing about server hosting, but the support team is really great and the server performs great as well. Definitely worth the subscription if you need a gaming server or web domain.\u201D</p> <h4>Chloe</h4> </div> </div> </div> <div class="carousel-item active"> <div class="flex-grid one"> <div class="col slider"> <p>"Servers had great connection, and the UI was easy to navigate. If I ever had trouble with it, the customer support was phenomenal, with quick responses and great advice/instructions.\u201D</p> <h4>Andrew</h4> </div> </div> </div> <div class="carousel-item"> <div class="flex-grid one"> <div class="col slider"> <p>"The online chat was well manned, a human being got back to me right away, and stayed on until my problem was solved - jumping in and making sure my Terraria game was set up properly. Top notch.\u201D</p> <h4>Rivers</h4> </div> </div> </div> <div class="carousel-item"> <div class="flex-grid one"> <div class="col slider"> <p>"The signup process is fast and easy, and the pricing is very competitive. I had an issue with my server, and support took care of it within literal seconds. I would highly recommend AleForge to anyone.\u201D</p> <h4>Domantas</h4> </div> </div> </div> <div class="carousel-item"> <div class="flex-grid one"> <div class="col slider"> <p>"Absolutely in love with the clean aesthetic of this host. Every other host I've used has seemed cluttered and messy, this is definitely a breath of fresh air. Support is great as well, always a bonus!\u201D</p> <h4>Brandon</h4> </div> </div> </div> <!-- Add more carousel items for other testimonials --> </div> <button class="carousel-control-prev" type="button" data-bs-target="#carousel-testimonials" data-bs-slide="prev" name="previous testimonial"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#carousel-testimonials" data-bs-slide="next" name="next testimonial"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button> <ol class="carousel-indicators bullet-indicators"> <li data-bs-target="#carousel-testimonials" data-bs-slide-to="0" class=""></li> <li data-bs-target="#carousel-testimonials" data-bs-slide-to="1" class="active"></li> <li data-bs-target="#carousel-testimonials" data-bs-slide-to="2" class=""></li> <li data-bs-target="#carousel-testimonials" data-bs-slide-to="3" class=""></li> <li data-bs-target="#carousel-testimonials" data-bs-slide-to="4" class=""></li> <!-- Add more carousel indicators for other testimonials --> </ol> </div> </div> </div> </div> </div> </section> <section class="text-center" id="home-cta"> <div class="container"> <div class="title pb-4"> <h3 class="font-22 pb-2">Grab an Ale and pull up a stool</h3> <h2>Your favorite games are waiting!</h2> <p class="pt-2">Join the thousand of gamers who choose Aleforge everyday as <br>their tavern for whatever gameserver they desire.</p> </div> <a href="/about" class="button outline-grey mr-2">Learn More</a> <a href="https://billing.aleforge.net/cart.php" class="button">Get Started</a> </div> </section> `, " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "TPWidget", $$TPWidget, {}), renderComponent($$result, "Map", $$Mapsmall, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/index.astro", void 0);

const $$file = "/Applications/MAMP/htdocs/ale-astro/astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
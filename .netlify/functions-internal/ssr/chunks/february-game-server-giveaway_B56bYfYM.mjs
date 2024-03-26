import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dj1lkFpt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>div class=“blog-text”></p>\n<p>We are excited to start a new giveaway to prove to you our customer that our service is as good as we say it is. We are giving away a 2 GB game server for two months absolutely free. See below for the details and to enter the giveaway.</p>\n<p><a href=\"https://gleam.io/nRbZT/aleforge-game-server-giveaway\">AleForge Game Server Giveaway</a></p>";

				const frontmatter = {"title":"February Game Server Giveaway","description":"We are excited to start a new giveaway to prove to you our customer that our service is as good as we say it is.","pubDate":"February 5, 2019","heroImage":"/images/blog/TeamSpeak 3.jpeg","categories":["update"],"articleSection":"Update","articleTag":"giveaway"};
				const file = "/Applications/MAMP/htdocs/ale-astro/astro/src/content/blog/february-game-server-giveaway.md";
				const url = undefined;
				function rawContent() {
					return "\ndiv class=\"blog-text\">\n\nWe are excited to start a new giveaway to prove to you our customer that our service is as good as we say it is. We are giving away a 2 GB game server for two months absolutely free. See below for the details and to enter the giveaway.\n\n[AleForge Game Server Giveaway](https://gleam.io/nRbZT/aleforge-game-server-giveaway)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

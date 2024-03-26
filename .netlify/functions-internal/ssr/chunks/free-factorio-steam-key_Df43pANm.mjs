import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_Dj1lkFpt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We are excited to be giving away a Steam key for Factorio as part of our Giveaways. Our first Factorio giveaway was such a success we are doing it again. To enter the contest please use the widget below and good luck to everyone.</p>\n<p><a href=\"https://gleam.io/zyvfd/aleforge-factorio-giveaway\">AleForge Factorio Giveaway</a></p>";

				const frontmatter = {"title":"Free Factorio Steam Key","description":"We are excited to be giving away a Steam key for Factorio as part of our Giveaways. ","pubDate":"May 1, 2019","heroImage":"/images/blog/TeamSpeak 3.jpeg","categories":["factorio","gaming"],"articleSection":"Gaming","articleTag":"giveaway"};
				const file = "/Applications/MAMP/htdocs/ale-astro/astro/src/content/blog/free-factorio-steam-key.md";
				const url = undefined;
				function rawContent() {
					return "\nWe are excited to be giving away a Steam key for Factorio as part of our Giveaways. Our first Factorio giveaway was such a success we are doing it again. To enter the contest please use the widget below and good luck to everyone.\n\n[AleForge Factorio Giveaway](https://gleam.io/zyvfd/aleforge-factorio-giveaway)\n";
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

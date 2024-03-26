async function getMod() {
						return import('./a-guide-to-pci-compliant-hosting-why-is-it-important_COE-GenC.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };

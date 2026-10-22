export type Project = {
	readonly title: string;
	readonly description: string;
	readonly tags: readonly string[];
	readonly href: string;
};

export type SiteContent = {
	readonly name: string;
	readonly tagline: string;
	readonly about: readonly string[];
	readonly projects: readonly Project[];
	readonly contact: {
		readonly github: string;
		/** Rendered only when set. */
		readonly email?: string;
	};
};

/**
 * Everything the page says about its owner lives here, so the site can be
 * updated without touching any component.
 *
 * PLACEHOLDER COPY: only the name, the GitHub link and the example project's
 * repository and tech tags are real. Replace the rest before sharing the site.
 */
export const content: SiteContent = {
	name: "David Aronov",
	tagline:
		"Placeholder tagline: one sentence about what you build. Edit src/lib/content.ts.",
	about: [
		"Placeholder about text: introduce yourself in two or three sentences. Say what you work on and what you care about.",
		"Placeholder second paragraph: optional. Mention tools you enjoy, what you are learning, or what you are looking for next.",
	],
	projects: [
		{
			title: "Example project (placeholder)",
			description:
				"This site: a React and TypeScript portfolio built with Vite and deployed to GitHub Pages. Replace this card with your own work.",
			tags: ["React", "TypeScript", "Vite"],
			href: "https://github.com/Aronov110/AronovDavid",
		},
	],
	contact: {
		github: "https://github.com/Aronov110",
	},
};

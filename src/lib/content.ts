export type Project = {
	readonly title: string;
	readonly description: string;
	readonly tags: readonly string[];
	readonly href: string;
};

export type AboutFact = {
	readonly label: string;
	/** A single string renders as text; a list renders as tags. */
	readonly value: string | readonly string[];
};

export type AboutContent = {
	/** The headline sentence, split so `highlight` can be emphasised. */
	readonly statement: {
		readonly before: string;
		readonly highlight: string;
		readonly after: string;
	};
	readonly paragraphs: readonly string[];
	readonly facts: readonly AboutFact[];
};

export type ContactItem = {
	readonly label: string;
	/** `mailto:` for email; anything else opens as an external link. */
	readonly href: string;
	/** Short visible text, e.g. a handle, rather than the whole URL. */
	readonly text: string;
};

export type SiteContent = {
	readonly name: string;
	readonly tagline: string;
	readonly about: AboutContent;
	readonly projects: readonly Project[];
	readonly contact: {
		readonly links: readonly ContactItem[];
	};
};

/**
 * Everything the page says about its owner lives here, so the site can be
 * updated without touching any component.
 *
 * PLACEHOLDER COPY: only the example project is still a placeholder. The name,
 * tagline, GitHub link and About section are real.
 */
export const content: SiteContent = {
	name: "David Aronov",
	tagline:
		"Software engineering graduate looking for a team to contribute to and grow with.",
	about: {
		statement: {
			before: "I turn ",
			highlight: "hard problems",
			after: " into working software, and I never stop learning.",
		},
		paragraphs: [
			"I'm a Software Engineering graduate who builds full-stack web applications, from the React interface to the Express API and the database behind it.",
			"I'm hard-working, always looking to learn, and I do my best work on problems that call for creative thinking.",
			"I don't have professional experience yet. What I have is projects: things I've built, and things I'm building right now. I'm looking for a role where I can contribute and keep growing as a software engineer.",
		],
		facts: [
			{ label: "Education", value: "B.Sc. in Software Engineering (graduate)" },
			{ label: "Focus", value: "Full-stack web development" },
			{
				label: "Stack",
				value: [
					"React (hooks)",
					"JavaScript",
					"TypeScript",
					"Python",
					"HTML",
					"CSS",
					"Express",
					"SQL",
					"MongoDB",
				],
			},
			{ label: "Strength", value: "Hard problems that need a creative mind" },
			{
				label: "Looking for",
				value: "A software engineering role to contribute and keep growing",
			},
			{ label: "Currently", value: "Building new projects" },
		],
	},
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
		links: [
			{
				label: "Email",
				href: "mailto:Aronov110@gmail.com",
				text: "Aronov110@gmail.com",
			},
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/david-aronov-5106582a7/",
				text: "David Aronov",
			},
			{
				label: "GitHub",
				href: "https://github.com/Aronov110",
				text: "Aronov110",
			},
			{
				label: "X",
				href: "https://x.com/aronov_david",
				text: "@aronov_david",
			},
			{
				label: "Instagram",
				href: "https://www.instagram.com/david_aronov_/",
				text: "@david_aronov_",
			},
		],
	},
};

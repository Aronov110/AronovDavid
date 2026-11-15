export type Project = {
	readonly title: string;
	readonly description: string;
	readonly tags: readonly string[];
	/** The live project; the card title links here. */
	readonly href: string;
	/** Source code. Rendered right after the title link, opens in a new tab. */
	readonly repoHref?: string;
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
	/** Where the card links. Every contact link opens in a new tab. */
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

const EMAIL = "Aronov110@gmail.com";

/** Opens Gmail's compose window with `to` already filled in. */
const gmailComposeUrl = (to: string): string =>
	`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;

/**
 * Everything the page says about its owner lives here, so the site can be
 * updated without touching any component.
 *
 * All copy here is real: name, tagline, About section, Plotpal and contact links.
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
			title: "Plotpal",
			description:
				"Plotpal is a web app where writers of scripts and stories organise their work and use AI to find plot holes and get ideas.",
			tags: [
				"React",
				"TypeScript",
				"Vite",
				"Fastify",
				"PostgreSQL",
				"Drizzle ORM",
				"Claude API",
			],
			href: "https://plotpal-app.vercel.app/app",
			repoHref: "https://github.com/Aronov110/Plotpal",
		},
	],
	contact: {
		links: [
			{
				label: "Email",
				href: gmailComposeUrl(EMAIL),
				text: EMAIL,
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

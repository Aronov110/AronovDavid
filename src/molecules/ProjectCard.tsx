import { Heading } from "../atoms/Heading.tsx";
import { Tag } from "../atoms/Tag.tsx";
import { VisuallyHidden } from "../atoms/VisuallyHidden.tsx";
import type { Project } from "../lib/content.ts";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	readonly project: Project;
};

/**
 * The title is the link; its pseudo-element stretches over the whole card.
 * The optional source link sits above that overlay so it stays clickable.
 */
export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className={styles.card}>
			<Heading level={3} size="card">
				<a
					className={styles.link}
					href={project.href}
					rel="noopener noreferrer"
				>
					{project.title}
				</a>
			</Heading>
			<p className={styles.description}>{project.description}</p>
			{project.repoHref ? (
				<a
					className={styles.repoLink}
					href={project.repoHref}
					target="_blank"
					rel="noopener noreferrer"
				>
					Source on GitHub
					<VisuallyHidden>
						{` for ${project.title} (opens in a new tab)`}
					</VisuallyHidden>
				</a>
			) : null}
			<ul className={styles.tags} aria-label="Technologies">
				{project.tags.map((tag) => (
					<li key={tag}>
						<Tag>{tag}</Tag>
					</li>
				))}
			</ul>
		</article>
	);
}

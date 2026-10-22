import type { Project } from "../lib/content.ts";
import { ProjectCard } from "../molecules/ProjectCard.tsx";
import { SectionHeader } from "../molecules/SectionHeader.tsx";
import styles from "./Projects.module.css";

type ProjectsProps = {
	readonly projects: readonly Project[];
};

export function Projects({ projects }: ProjectsProps) {
	return (
		<section
			id="projects"
			className={styles.projects}
			aria-labelledby="projects-title"
		>
			<div className={styles.inner}>
				<SectionHeader
					id="projects-title"
					eyebrow="02 / Projects"
					title="Selected work"
				/>
				{projects.length === 0 ? (
					<p className={styles.empty}>Projects are coming soon.</p>
				) : (
					<ul className={styles.grid}>
						{projects.map((project) => (
							<li key={project.href}>
								<ProjectCard project={project} />
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}

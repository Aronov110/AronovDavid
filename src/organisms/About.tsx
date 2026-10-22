import { SectionHeader } from "../molecules/SectionHeader.tsx";
import styles from "./About.module.css";

type AboutProps = {
	readonly paragraphs: readonly string[];
};

export function About({ paragraphs }: AboutProps) {
	return (
		<section id="about" className={styles.about} aria-labelledby="about-title">
			<div className={styles.inner}>
				<SectionHeader id="about-title" eyebrow="01 / About" title="About" />
				<div className={styles.copy}>
					{paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
}

import type { AboutContent } from "../lib/content.ts";
import { FactList } from "../molecules/FactList.tsx";
import { SectionHeader } from "../molecules/SectionHeader.tsx";
import styles from "./About.module.css";

type AboutProps = {
	readonly about: AboutContent;
};

export function About({ about }: AboutProps) {
	const { statement, paragraphs, facts } = about;
	return (
		<section id="about" className={styles.about} aria-labelledby="about-title">
			<div className={styles.inner}>
				<SectionHeader id="about-title" eyebrow="01 / About" title="About" />
				<p className={styles.statement}>
					{statement.before}
					<span className={styles.highlight}>{statement.highlight}</span>
					{statement.after}
				</p>
				<div className={styles.grid}>
					<div className={styles.copy}>
						{paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
					{facts.length > 0 ? <FactList facts={facts} /> : null}
				</div>
			</div>
		</section>
	);
}

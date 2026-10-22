import { Heading } from "../atoms/Heading.tsx";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
	readonly id: string;
	/** Short decorative label, hidden from assistive technology. */
	readonly eyebrow: string;
	readonly title: string;
};

export function SectionHeader({ id, eyebrow, title }: SectionHeaderProps) {
	return (
		<header className={styles.sectionHeader}>
			<p className={styles.eyebrow} aria-hidden="true">
				{eyebrow}
			</p>
			<Heading level={2} size="section" id={id}>
				{title}
			</Heading>
		</header>
	);
}

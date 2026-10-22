import type { ReactNode } from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
	/** Document outline level. Visual size follows `size`, not the level. */
	readonly level: 1 | 2 | 3;
	readonly size: "hero" | "section" | "card";
	readonly id?: string;
	readonly children: ReactNode;
};

export function Heading({ level, size, id, children }: HeadingProps) {
	const Tag = `h${level}` as const;
	return (
		<Tag id={id} className={`${styles.heading} ${styles[size]}`}>
			{children}
		</Tag>
	);
}

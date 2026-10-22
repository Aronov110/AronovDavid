import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
	readonly children: ReactNode;
};

export function Tag({ children }: TagProps) {
	return <span className={styles.tag}>{children}</span>;
}

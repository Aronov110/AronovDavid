import type { ReactNode } from "react";
import styles from "./VisuallyHidden.module.css";

type VisuallyHiddenProps = {
	readonly children: ReactNode;
};

/** Text for assistive technology only; sighted users do not see it. */
export function VisuallyHidden({ children }: VisuallyHiddenProps) {
	return <span className={styles.visuallyHidden}>{children}</span>;
}

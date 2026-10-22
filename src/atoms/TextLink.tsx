import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

type TextLinkProps = {
	readonly href: string;
	/** Adds `rel="noopener noreferrer"`; the link still opens in the same tab. */
	readonly external?: boolean;
	readonly children: ReactNode;
};

export function TextLink({ href, external = false, children }: TextLinkProps) {
	return (
		<a
			className={styles.textLink}
			href={href}
			rel={external ? "noopener noreferrer" : undefined}
		>
			{children}
		</a>
	);
}

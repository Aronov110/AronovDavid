import type { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
	readonly href: string;
	readonly variant: "primary" | "secondary";
	readonly external?: boolean;
	readonly children: ReactNode;
};

/** A link that looks like a button. It navigates, so it stays an anchor. */
export function ButtonLink({
	href,
	variant,
	external = false,
	children,
}: ButtonLinkProps) {
	return (
		<a
			className={`${styles.buttonLink} ${styles[variant]}`}
			href={href}
			rel={external ? "noopener noreferrer" : undefined}
		>
			{children}
		</a>
	);
}

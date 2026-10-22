import styles from "./ContactLink.module.css";

type ContactLinkProps = {
	readonly label: string;
	readonly href: string;
	/** Visible link text, e.g. the address or handle. */
	readonly text: string;
	readonly external?: boolean;
};

export function ContactLink({
	label,
	href,
	text,
	external = false,
}: ContactLinkProps) {
	return (
		<a
			className={styles.contactLink}
			href={href}
			rel={external ? "noopener noreferrer" : undefined}
		>
			<span className={styles.label}>{label}</span>
			<span className={styles.text}>{text}</span>
		</a>
	);
}

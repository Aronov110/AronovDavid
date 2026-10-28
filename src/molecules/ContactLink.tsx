import { VisuallyHidden } from "../atoms/VisuallyHidden.tsx";
import styles from "./ContactLink.module.css";

type ContactLinkProps = {
	readonly label: string;
	readonly href: string;
	/** Visible link text, e.g. the address or handle. */
	readonly text: string;
};

/** Always opens in a new tab, and says so to assistive technology. */
export function ContactLink({ label, href, text }: ContactLinkProps) {
	return (
		<a
			className={styles.contactLink}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className={styles.label}>{label}</span>
			<span className={styles.text}>{text}</span>
			<VisuallyHidden>(opens in a new tab)</VisuallyHidden>
		</a>
	);
}

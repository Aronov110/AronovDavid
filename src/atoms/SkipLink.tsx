import styles from "./SkipLink.module.css";

type SkipLinkProps = {
	readonly targetId: string;
};

/** First focusable element on the page; lets keyboard users bypass the header. */
export function SkipLink({ targetId }: SkipLinkProps) {
	return (
		<a className={styles.skipLink} href={`#${targetId}`}>
			Skip to main content
		</a>
	);
}

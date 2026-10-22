import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
	readonly name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
	return (
		<footer className={styles.footer}>
			<p className={styles.text}>
				&copy; {new Date().getFullYear()} {name}
			</p>
		</footer>
	);
}

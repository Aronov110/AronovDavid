import { TextLink } from "../atoms/TextLink.tsx";
import styles from "./SiteHeader.module.css";

export type NavItem = {
	readonly href: string;
	readonly label: string;
};

type SiteHeaderProps = {
	readonly name: string;
	readonly links: readonly NavItem[];
};

export function SiteHeader({ name, links }: SiteHeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<a className={styles.brand} href="#main">
					{name}
				</a>
				<nav aria-label="Primary">
					<ul className={styles.list}>
						{links.map((link) => (
							<li key={link.href}>
								<TextLink href={link.href}>{link.label}</TextLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

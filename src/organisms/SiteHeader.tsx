import { TextLink } from "../atoms/TextLink.tsx";
import { VisuallyHidden } from "../atoms/VisuallyHidden.tsx";
import styles from "./SiteHeader.module.css";

export type NavItem = {
	readonly href: string;
	readonly label: string;
};

type SiteHeaderProps = {
	readonly name: string;
	readonly links: readonly NavItem[];
};

/** "David Aronov" becomes "DA"; at most two letters. */
const initialsOf = (name: string): string =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word.charAt(0).toUpperCase())
		.join("");

export function SiteHeader({ name, links }: SiteHeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				<a className={styles.brand} href="#main">
					<span aria-hidden="true">{initialsOf(name)}</span>
					<VisuallyHidden>{name}</VisuallyHidden>
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

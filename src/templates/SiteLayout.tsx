import type { ReactNode } from "react";
import { SkipLink } from "../atoms/SkipLink.tsx";
import { SiteFooter } from "../organisms/SiteFooter.tsx";
import { type NavItem, SiteHeader } from "../organisms/SiteHeader.tsx";

const MAIN_ID = "main";

const NAV_LINKS: readonly NavItem[] = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
];

type SiteLayoutProps = {
	readonly name: string;
	readonly children: ReactNode;
};

/** Page chrome: skip link, header, main landmark and footer. */
export function SiteLayout({ name, children }: SiteLayoutProps) {
	return (
		<>
			<SkipLink targetId={MAIN_ID} />
			<SiteHeader name={name} links={NAV_LINKS} />
			<main id={MAIN_ID} tabIndex={-1}>
				{children}
			</main>
			<SiteFooter name={name} />
		</>
	);
}

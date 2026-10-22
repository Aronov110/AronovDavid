import type { SiteContent } from "../lib/content.ts";
import { ContactLink } from "../molecules/ContactLink.tsx";
import { SectionHeader } from "../molecules/SectionHeader.tsx";
import styles from "./Contact.module.css";

type ContactProps = {
	readonly contact: SiteContent["contact"];
};

export function Contact({ contact }: ContactProps) {
	return (
		<section
			id="contact"
			className={styles.contact}
			aria-labelledby="contact-title"
		>
			<div className={styles.inner}>
				<SectionHeader
					id="contact-title"
					eyebrow="03 / Contact"
					title="Let's talk"
				/>
				<ul className={styles.list}>
					<li>
						<ContactLink
							label="GitHub"
							href={contact.github}
							text={contact.github.replace("https://", "")}
							external
						/>
					</li>
					{contact.email === undefined ? null : (
						<li>
							<ContactLink
								label="Email"
								href={`mailto:${contact.email}`}
								text={contact.email}
							/>
						</li>
					)}
				</ul>
			</div>
		</section>
	);
}

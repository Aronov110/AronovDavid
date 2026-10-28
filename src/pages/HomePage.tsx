import { content } from "../lib/content.ts";
import { About } from "../organisms/About.tsx";
import { Contact } from "../organisms/Contact.tsx";
import { Hero } from "../organisms/Hero.tsx";
import { SiteLayout } from "../templates/SiteLayout.tsx";

export function HomePage() {
	return (
		<SiteLayout name={content.name}>
			<Hero name={content.name} tagline={content.tagline} />
			<About about={content.about} />
			<Contact contact={content.contact} />
		</SiteLayout>
	);
}

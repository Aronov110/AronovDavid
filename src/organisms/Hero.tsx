import { ButtonLink } from "../atoms/ButtonLink.tsx";
import { Heading } from "../atoms/Heading.tsx";
import styles from "./Hero.module.css";

type HeroProps = {
	readonly name: string;
	readonly tagline: string;
};

export function Hero({ name, tagline }: HeroProps) {
	return (
		<section className={styles.hero} aria-labelledby="hero-title">
			<div className={styles.glowA} aria-hidden="true" />
			<div className={styles.glowB} aria-hidden="true" />
			<div className={styles.content}>
				<Heading level={1} size="hero" id="hero-title">
					{name}
				</Heading>
				<p className={styles.tagline}>{tagline}</p>
				<div className={styles.actions}>
					<ButtonLink href="#about" variant="primary">
						About me
					</ButtonLink>
					<ButtonLink href="#contact" variant="secondary">
						Get in touch
					</ButtonLink>
				</div>
			</div>
		</section>
	);
}

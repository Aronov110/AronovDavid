import { Tag } from "../atoms/Tag.tsx";
import type { AboutFact } from "../lib/content.ts";
import styles from "./FactList.module.css";

type FactListProps = {
	readonly facts: readonly AboutFact[];
};

const hasValue = ({ value }: AboutFact): boolean =>
	typeof value === "string" ? value.trim() !== "" : value.length > 0;

/** Label/value pairs as a description list. Rows without a value are skipped. */
export function FactList({ facts }: FactListProps) {
	return (
		<dl className={styles.list}>
			{facts.filter(hasValue).map(({ label, value }) => (
				<div key={label} className={styles.row}>
					<dt className={styles.label}>{label}</dt>
					<dd className={styles.value}>
						{typeof value === "string" ? (
							value
						) : (
							<ul className={styles.tags}>
								{value.map((item) => (
									<li key={item}>
										<Tag>{item}</Tag>
									</li>
								))}
							</ul>
						)}
					</dd>
				</div>
			))}
		</dl>
	);
}

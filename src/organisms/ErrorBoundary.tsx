import { Component, type ErrorInfo, type ReactNode } from "react";
import { ButtonLink } from "../atoms/ButtonLink.tsx";
import { Heading } from "../atoms/Heading.tsx";
import styles from "./ErrorBoundary.module.css";

type ErrorBoundaryProps = {
	readonly children: ReactNode;
};

type ErrorBoundaryState = {
	readonly hasError: boolean;
};

/**
 * Last line of defence for render errors. React only supports this as a class
 * component. The error is logged, never swallowed.
 */
export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	state: ErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error(error, info.componentStack);
	}

	render() {
		if (!this.state.hasError) {
			return this.props.children;
		}
		return (
			<main className={styles.fallback} role="alert">
				<Heading level={1} size="section">
					Something went wrong
				</Heading>
				<p>The page failed to load. Reloading usually fixes it.</p>
				<ButtonLink href="/" variant="primary">
					Reload the page
				</ButtonLink>
			</main>
		);
	}
}

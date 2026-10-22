import "@fontsource-variable/space-grotesk";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RootElementNotFoundError } from "./lib/errors.ts";
import { ErrorBoundary } from "./organisms/ErrorBoundary.tsx";
import { HomePage } from "./pages/HomePage.tsx";

const ROOT_ID = "root";
const rootElement = document.getElementById(ROOT_ID);

if (!rootElement) {
	throw new RootElementNotFoundError(ROOT_ID);
}

createRoot(rootElement).render(
	<StrictMode>
		<ErrorBoundary>
			<HomePage />
		</ErrorBoundary>
	</StrictMode>,
);

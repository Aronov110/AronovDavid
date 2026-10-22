import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RootElementNotFoundError } from "./lib/errors.ts";

const ROOT_ID = "root";
const rootElement = document.getElementById(ROOT_ID);

if (!rootElement) {
	throw new RootElementNotFoundError(ROOT_ID);
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

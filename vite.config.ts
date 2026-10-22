import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

// GitHub Pages cannot set response headers, so the policy ships as a <meta> tag.
// Dev is excluded because Vite's HMR client needs inline scripts.
const CONTENT_SECURITY_POLICY = [
	"default-src 'self'",
	"script-src 'self'",
	"style-src 'self'",
	"img-src 'self'",
	"font-src 'self'",
	"base-uri 'self'",
	"form-action 'none'",
].join("; ");

const injectContentSecurityPolicy = (): Plugin => ({
	name: "inject-content-security-policy",
	apply: "build",
	transformIndexHtml: () => [
		{
			tag: "meta",
			attrs: {
				"http-equiv": "Content-Security-Policy",
				content: CONTENT_SECURITY_POLICY,
			},
			injectTo: "head-prepend",
		},
	],
});

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), injectContentSecurityPolicy()],
});

/** Thrown at startup when the HTML shell has no element to mount the app into. */
export class RootElementNotFoundError extends Error {
	constructor(id: string) {
		super(`Root element #${id} was not found in the document`);
		this.name = "RootElementNotFoundError";
	}
}

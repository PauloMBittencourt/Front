/* eslint-disable @typescript-eslint/no-empty-interface */
/// <reference types="@sveltejs/kit" />

interface SessionData {
	user?: {
		matricula: string;
		token: string;
	} | null;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		session: import('svelte-kit-cookie-session').Session<SessionData>;
		cookies: Record<string, string>;
	}
	// interface Platform {}
	interface Session extends SessionData {}
	// interface Stuff {}
}

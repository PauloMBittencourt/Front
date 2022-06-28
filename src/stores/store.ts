import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = '';

const initialValue = browser ? window.localStorage.getItem('token') ?? defaultValue : defaultValue;

export const token = writable<string>(initialValue);

token.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('token', value);
	}
});

export { token as default };

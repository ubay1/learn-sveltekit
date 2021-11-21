// latihan persistate store
import {writable} from 'svelte/store'
import { browser } from "$app/env";

export const username = writable(browser && localStorage.getItem('username') || 'user')
username.subscribe((val) => browser && localStorage.setItem('username', val))
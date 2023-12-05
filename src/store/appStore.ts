import {atom, computed} from "nanostores";
import type { Language } from "../config";

// LANGUAGE
export const languageStore = atom<Language>("es");

// DARK MODE
export const darkModeStore = atom<boolean>(false);
export const toggleDarkMode = () => darkModeStore.set(!darkModeStore.get());


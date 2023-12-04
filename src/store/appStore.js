import {atom, computed} from "nanostores";

// Language
export const lang = atom("es");
export const showLanguageMenuToggle = atom(false);


export function setLang(newLang) {
  lang.set(newLang);
  console.log("language set to: ", lang.get());
}

export function toggleLanguageMenu() {
    showLanguageMenuToggle.set(!showLanguageMenuToggle.get());
    console.log("language menu toggled");
}


// DARK MODE
export const darkModeStore = atom("darkMode", false);
export const isDarkMode = computed(darkModeStore, (darkMode) => darkMode);
export const toggleDarkMode = () => darkModeStore.set(!darkModeStore.get());


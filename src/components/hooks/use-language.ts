import type { Language } from "../../config";
import { languageStore } from "../../store/appStore";
import { t } from "../../text";
import { useStore } from "@nanostores/preact";

export const useLanguage = () => {

    const $language = useStore(languageStore);

    const LANGUAGE_LIST: Language[] = ['en', 'es', 'ca', 'de'];

    const setLanguage = (lang: Language) => {
        languageStore.set(lang);
    };

    const useTerm = (key: string) => {
        return t($language, key);
    };

    return { language: $language, setLanguage, useTerm, LANGUAGE_LIST };
}
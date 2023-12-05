import type { Language } from "./config";


type TranslationDictionary = {
    [ key: string]: Translation;

}



type Translation = {
    [key: string]: string;

}

const text: TranslationDictionary = {
    es: {
        "title": "¡Hola mundo!",
        "site-subtitle": "Desarrollador Web && Formador en TIC",
        "subtitle": "Este es un subtítulo.",
        "text": "Este es un texto.",
        "button": "¡Haz click aquí!",
        "menu-option-welcome": "Bienvenido/a",
        "menu-option-about": "Acerca de mí",
        "menu-option-resume": "Currículum",
        "menu-option-projects": "Proyectos",
        "menu-option-contact": "Contáctame"
    },
    en: {
        "site-subtitle": "Web Developer && IT Mentor",
        "subtitle": "This is a subtitle.",
        "text": "This is a text.",
        "button": "Click me!",
        "menu-option-welcome": "Welcome",
        "menu-option-about": "About me",
        "menu-option-resume": "Resume",
        "menu-option-projects": "Projects",
        "menu-option-contact": "Contact me"
    },
    fr: {
        "site-subtitle": "Développeur Web && Mentor en TIC",
        "title": "Bonjour le monde!",
        "subtitle": "Ceci est un sous-titre.",
        "text": "Ceci est un texte.",
        "button": "Cliquez-moi!",
        "menu-option-welcome": "Accueillir",
        "menu-option-about": "Sur moi",
        "menu-option-resume": "CV",
        "menu-option-projects": "Projets",
        "menu-option-contact": "Contactez moi"
    },
    ca: {
        "site-subtitle": "Desenvolupador Web && Formador en TIC",   
        "title": "Hola món!",
        "subtitle": "Aquest és un subtítol.",
        "text": "Aquest és un text.",
        "button": "Clica'm!",
        "menu-option-welcome": "Benvingut/da",
        "menu-option-about": "Sobre mi",
        "menu-option-resume": "Currículum",
        "menu-option-projects": "Projectes",
        "menu-option-contact": "Contacta'm"
    },
    de: {
        "site-subtitle": "Web-Entwickler && IKT-Mentor",
        "title": "Hallo Welt!",
        "subtitle": "Dies ist ein Untertitel.",
        "text": "Dies ist ein Text.",
        "button": "Klick mich!",
        "menu-option-welcome": "Willkommen",
        "menu-option-about": "über mich",
        "menu-option-resume": "Wieder Aufnehmen",
        "menu-option-projects": "Projekte",
        "menu-option-contact": "Kontaktiere mich"
    },
}

export const t = (lang: Language, textIndex: string): string => {
    console.log({lang, textIndex, t: text[lang][textIndex]});

    return text[lang][textIndex];
}
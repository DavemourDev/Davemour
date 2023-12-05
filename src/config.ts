import { t } from "./text";

type MenuOption = {
  label: string;
  sectionId: string;
  dictionaryKey: string;
};

export type Language = 'en' | 'es' | 'ca' | 'de';

export const menuOptions: MenuOption[] = [
  {
    label: "Welcome",
    sectionId: "section1",
    dictionaryKey: "menu-option-welcome",
  },
  {
    label: "About me",
    sectionId: "section2",
    dictionaryKey: "menu-option-about",
  },
  {
    label: "Resume",
    sectionId: "section3",
    dictionaryKey: "menu-option-resume",
  },
  {
    label: "My projects",
    sectionId: "section4",
    dictionaryKey: "menu-option-projects",
  },
  {
    label: "Contact me!",
    sectionId: "section5",
    dictionaryKey: "menu-option-contact",
  },
];

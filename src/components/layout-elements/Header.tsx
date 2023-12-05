
import { LanguageSelector } from "../LanguageSelector.tsx";
import { ThemeSelector } from "../layout-config/ThemeSelector.tsx";
import { Row } from "./Row.tsx";
import { ButtonGroup } from "../ButtonGroup.tsx";
import { useLanguage } from "../hooks/use-language.ts";

export const Header = () => {
  const { useTerm } = useLanguage();

  return (
    <header
      class={"ease-in-out duration-300 bg-white dark:bg-black top-0 z-1 pt-4"}
    >
      <Row>
        <hgroup class="flex flex-row items-end gap-2 font-display pb-4">
          <h1 class="text-black dark:text-white text-4xl">Davemour</h1>
          <h2 class="text-xl text-gray decoration-8">
            {useTerm("site-subtitle")}
          </h2>
        </hgroup>
        <ButtonGroup>
          <LanguageSelector />
          <ThemeSelector />
        </ButtonGroup>
      </Row>
    </header>
  );
}
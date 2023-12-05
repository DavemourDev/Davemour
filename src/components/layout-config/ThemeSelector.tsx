import { useStore } from "@nanostores/preact";

import { toggleDarkMode, darkModeStore } from "../../store/appStore.ts";

export const ThemeSelector = () => {

    const $isDarkMode = useStore(darkModeStore);

    return (
        <div>
            <button title="Toggle theme between light and dark" id="themeToggle" class="ease-in-out duration-300 hover:scale-125" onClick={toggleDarkMode}>
                {$isDarkMode ? (
                    <img src="/img/theme-icons/moon.png" width="32" alt="moon" />
                ) : (
                    <img src="/img/theme-icons/sun.png" width="32" alt="sun" />
                )}
            </button>

        </div>
    );
}
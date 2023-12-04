import { useState } from "preact/hooks";

import { toggleDarkMode, isDarkMode } from "../../store/appStore";

export const ThemeSelector = () => {

    const [isDark, setIsDark] = useState(isDarkMode.get());

    isDarkMode.subscribe(setIsDark);

    return (
        <div>
            <button title="Toggle theme between light and dark" id="themeToggle" class="ease-in-out duration-300 hover:scale-125" onClick={toggleDarkMode}>
                {isDark ? (
                    <img src="/img/theme-icons/moon.png" width="32" alt="moon" />
                ) : (
                    <img src="/img/theme-icons/sun.png" width="32" alt="sun" />
                )}
            </button>

        </div>
    );
}
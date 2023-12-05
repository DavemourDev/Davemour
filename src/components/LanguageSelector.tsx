import { useState } from 'preact/hooks';
import type { Language } from '../config';
import { useLanguage } from './hooks/use-language';

type LanguageButtonIconProps = {
    language: Language;
    clickHandler: (language: Language) => void;
}

/**
 * 
 * @param props
 * @returns 
 */
const LanguageButtonIcon = ({ language, clickHandler }: LanguageButtonIconProps) => {

    const handleClick = () => {
        clickHandler(language);
    }


    return (
        <button className="ease-in-out duration-300 hover:scale-125" onClick={handleClick}>
            <img
                src={`/img/flags/${language}.png`}
                alt={`Language (${language})`}
                width="32"
            />
        </button >
    );
};



export const LanguageSelector = ({ }) => {
    const [showIconsToggle, setShowIconsToggle] = useState(false);
    const { LANGUAGE_LIST, setLanguage, language: currentLanguage } = useLanguage();

    const handleClickLanguage = (language: Language) => {
        setLanguage(language);
        setShowIconsToggle(false);
    }

    const toggleShowIcons = () => {
        setShowIconsToggle(!showIconsToggle);
    }


    return (
        <div>
            <LanguageButtonIcon
                language={currentLanguage}
                clickHandler={toggleShowIcons}
            />

            {
                showIconsToggle && (
                    <div className="p-2 flex gap-x-2 bg-sky-600 absolute top-10 right-2 w-200 z-2 overflow-visible">
                        {
                            LANGUAGE_LIST.map((lang) => {
                                return (lang !== currentLanguage) && (
                                    <LanguageButtonIcon
                                        key={lang}
                                        language={lang}
                                        clickHandler={handleClickLanguage}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

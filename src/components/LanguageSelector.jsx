import { useState } from 'preact/hooks';

/**
 * 
 * @param props
 * @returns 
 */
const LanguageButtonIcon = ({ language, clickHandler }) => {
    return (
        <button className="ease-in-out duration-300 hover:scale-125" onClick={() => {
            console.log(`Language button clicked. Value is ${language}`);
            clickHandler(language)
        }}>
            <img
                src={`/img/flags/${language}.png`}
                alt={`Language (${language})`}
                width="32"
            />
        </button>
    );
};

const languageList = ['en', 'es', 'ca', 'de'];

export const LanguageSelector = ({ defaultLanguage = "en" }) => {

    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
    const [showIconsToggle, setShowIconsToggle] = useState(false);

    const handleClickLanguage = (language) => {
        console.log(`Language button clicked. Value is ${language}`);
        setCurrentLanguage(language);
        setShowIconsToggle(false);
    }

    return (
        <div>
            <LanguageButtonIcon
                language={currentLanguage}
                clickHandler={() => setShowIconsToggle(showIconsToggle ? false : true)}
            />

            {
                showIconsToggle && (
                    <div className="p-2 flex gap-x-2 bg-sky-600 absolute right-2 w-200">
                        {
                            languageList.map((lang) => {
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

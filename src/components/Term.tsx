import { useLanguage } from "./hooks/use-language";
import { t } from "../text";
type Props = {
    key: string
};

export const Term = ({ key }: Props) => {
    const { language } = useLanguage();
    console.log({ language, key });

    console.log(t(language, key));
    return (
        <>{t(language, key)}</>
    );
}
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {short ? t('Short Language') : t('Language')}
        </Button>
    );
});

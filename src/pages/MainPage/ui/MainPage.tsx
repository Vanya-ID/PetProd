import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

const MainPage:FC = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main page')}
        </div>
    );
});

export default MainPage;

import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main page')}
        </div>
    );
};

export default MainPage;

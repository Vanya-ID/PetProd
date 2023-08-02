import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About page')}
        </div>
    );
};

export default AboutPage;

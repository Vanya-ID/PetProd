import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';

const AboutPage:FC = memo(() => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About page')}
        </div>
    );
});

export default AboutPage;

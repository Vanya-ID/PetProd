import { classNames, DynamicModuleLoader, ReducerList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { profileReducer } from 'entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;

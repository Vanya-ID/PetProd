import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('Logout')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onCloseModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal
                && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
};

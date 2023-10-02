import {
    classNames, DynamicModuleLoader, ReducerList, useAppDispatch,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, Input, Text, TextTheme, ThemeButton,
} from 'shared/ui';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from '../../model/selectors';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({
    className,
    onSuccess,
}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({
            username,
            password,
        }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('Auth Form')} />
                {error && (<Text text={t('Incorrect username or password')} theme={TextTheme.ERROR} />)}
                <Input
                    autoFocus
                    placeholder={t('Enter username')}
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('Enter password')}
                    type="text"
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

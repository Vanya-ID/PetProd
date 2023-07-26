import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...restProps
    } = props;
    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </Link>
    );
};

import { classNames } from 'shared/lib';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: string;
    children?: ReactNode;
}

export const AppLink = memo((props:AppLinkProps) => {
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
});

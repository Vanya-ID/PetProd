import { classNames } from 'shared/lib';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
    const {
        children,
        className,
        theme,
        square,
        size = SizeButton.L,
        disabled,
        ...restProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const additional = [className, cls[theme], cls[size]];

    return (
        <button
            disabled={disabled}
            className={classNames(cls.button, mods, additional)}
            {...restProps}
        >
            {children}
        </button>
    );
});

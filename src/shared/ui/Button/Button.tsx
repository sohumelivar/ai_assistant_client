import React from 'react';
import classNames from "classnames";
import styles from './Button.module.scss';
import { additionalClasses } from '@shared/lib/additionalClasses';

interface ButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'; 
};

export const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    disabled = false,
    children,
    type = 'button',
  }) => {

    const buttonClasses = classNames(styles.button, additionalClasses(className, styles), {
        [styles.disabled]: disabled,
    });

    return (
        <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        type={type}
        >
        {children}
        </button>
    );
};

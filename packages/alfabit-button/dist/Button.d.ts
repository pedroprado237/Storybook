import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    children: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ variant, size, children, disabled, onClick, }: ButtonProps) => React.JSX.Element;

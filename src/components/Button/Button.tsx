import * as React from 'react';
import "./Button.scss";

export interface IButtonProps {
    children?: any;
    onClick?: () => void;
}

const Button: React.SFC<IButtonProps> = ({
    children,
    onClick = () => { }
}) => {
    return (
        <div
            role="presentation"
            onClick={onClick}
            className="button">
            {children}
        </div>
    );
}

export default Button;
import * as React from 'react';
import "./Cyrcle.scss";

export interface ICyrcleProps {
    children?: any;
    onClick?: (id: number) => void | null;
    className?: string;
    id?: number;
}

const Cyrcle: React.SFC<ICyrcleProps> = ({
    children,
    className = '',
    id,
    onClick = () => { }
}) => {
    return (
        <div
            role="presentation"
            onClick={id ? () => onClick(id) : () => { }}
            className={`cyrcle ${className}`}>
            {children}
        </div>
    );
}

export default Cyrcle;
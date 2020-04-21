import * as React from 'react';


export interface IPlusProps {
    fill?: string;
    width?: number;
}

const Plus: React.SFC<IPlusProps> = ({
    fill = "#56b3ae",
    width = 60
}) => {
    return (
        <svg
            fill={fill}
            version="1.1"
            id="Capa_1"
            x="0px" y="0px"
            viewBox="0 0 448 448"
            width={`${width}px`}
        >
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
        </svg>

    );
}

export default Plus;
import * as React from 'react';


export interface IWalkingProps {
    fill?: string;
    width?: number;
}

const Walking: React.SFC<IWalkingProps> = ({
    fill = "#56b3ae",
    width = 60
}) => {
    return (
        <svg
            fill={fill}
            version="1.1" id="Capa_1" x="0px" y="0px"
            width={`${width}px`}
            viewBox="0 0 555.9 555.9"
        >
            <g>
                <g id="directionswalk">
                    <path d="M316.2,91.8c25.5,0,45.9-20.4,45.9-45.9S341.7,0,316.2,0s-45.9,20.4-45.9,45.9S290.7,91.8,316.2,91.8z M318.75,249.9
			H443.7V204h-91.8l-51-84.15c-7.65-12.75-22.95-22.95-38.25-22.95c-5.1,0-7.65,0-12.75,2.55L112.2,142.8v132.6h45.9v-94.35
			l53.55-17.85L112.2,555.9h45.9l73.95-206.551L290.7,428.4v127.5h45.9V392.699l-63.75-114.75L290.7,204L318.75,249.9z"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    );
}

export default Walking;
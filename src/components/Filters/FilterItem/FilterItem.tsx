import * as React from 'react';

import "./FilterItem.scss";

export interface IFilterItemProps {
    text: string,
    type: string,
    selected: string,
    onClick: (type: string) => void,
}

const FilterItem: React.SFC<IFilterItemProps> = ({
    type,
    selected = '',
    text,
    onClick = () => { },
}) => {
    return (
        <span
            role="presentation"
            onClick={() => onClick(type)}
            className={`filter-item filter-item--${type === selected ? 'selected' : 'not-selected'}`}>
            {text}
        </span>
    );
}

export default FilterItem;
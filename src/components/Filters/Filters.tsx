import * as React from 'react';
import FilterItem from "./FilterItem/FilterItem";
import Cyrcle from "../Cyrcle/Cyrcle";
import { IFilters, MultipleFilters } from "../../App";

import "./Filters.scss";

export interface IFiltersProps {
    selectedFilter: string;
    multipleFilters: Array<IFilters>;
    onFilterClick: (type: string) => void;
    onSelectiveFilterClick: (type: number) => void;
}

const Filters: React.SFC<IFiltersProps> = ({
    selectedFilter,
    onFilterClick,
    onSelectiveFilterClick,
    multipleFilters
}) => {
    return (
        <div className="filters-container">
            <div className="filters">
                <FilterItem
                    type={MultipleFilters.inprocess}
                    text="Ongoing "
                    selected={selectedFilter}
                    onClick={onFilterClick}
                />
                <FilterItem
                    type={MultipleFilters.upcoming}
                    text="Upcoming"
                    selected={selectedFilter}
                    onClick={onFilterClick}
                />
                <FilterItem
                    type={MultipleFilters.past}
                    text="Ended"
                    selected={selectedFilter}
                    onClick={onFilterClick}
                />
            </div>
            <div className="filters-selective-container">
                <span className="filters__title">Metrics</span>
                <div className="filters-selective">
                    {
                        [1, 2, 3, 4, 5, 6].map((item) =>
                            <React.Fragment key={item}>
                                <Cyrcle
                                    onClick={onSelectiveFilterClick}
                                    className={`selective-filter-item 
                                    selective-filter-item--${multipleFilters.includes(item)
                                            ? "selected" : "not-selected"}`}
                                    id={item}
                                >
                                    {item}
                                </Cyrcle>
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Filters;
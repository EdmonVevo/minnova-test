import React, { Fragment } from 'react';
import Item from "../Item/Item";

import "./Main.scss";

export interface IItem {
    id?: number;
    title?: string;
    type?: string;
    image?: string;
    status?: string;
    date: {
        start?: string,
        end?: string
    };
}

export interface IMainProps {
    items: Array<IItem>;
}

const Main: React.SFC<IMainProps> = ({
    items,
}) => {

    return (
        <div className="main-container">

            {
                items.length ? items.map((item) =>
                    <Fragment key={item.id} >
                        <Item data={item} />
                    </Fragment>
                ) : (
                        <span className="no-results">
                            No Results found
                        </span>
                    )
            }
        </div>
    );
}

export default Main;
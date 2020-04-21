import * as React from 'react';
import { IItem } from "../Main/Main";
import Cyrcle from "../Cyrcle/Cyrcle";
import Button from "../Button/Button";

import Walking from "../Icons/Walking";
import Dumbell from "../Icons/Dumbell";
import Plus from "../Icons/Plus";
import Calendar from "../Icons/Calendar";

import Moment from 'react-moment';

import "./Item.scss";

export interface IItemProps {
    data: IItem;
}

const Item: React.SFC<IItemProps> = ({ data }) => {

    return (
        <div className="item">
            <div className="item__top-section">
                {
                    data.image ? (
                        <img className="item__image" src={data.image} alt="" />
                    ) : <Walking fill="#a9dcdb" />
                }
                <div className="item__type-container">
                    <div className="item__type__content">
                        <div className="item__type">
                            <Dumbell width={15} />
                             &nbsp; &nbsp;
                            {data.type}
                        </div>
                        <Cyrcle>
                            <Walking width={15} />
                        </Cyrcle>
                    </div>
                </div>
            </div>
            <div className="item__bottom-section">
                <div className="item__title-section">
                    <h2> {data.title} </h2>
                </div>
                <div className="item__date-section">
                    <Calendar fill="#62cbc6" width={15} />
                     &nbsp; &nbsp;
                    <Moment format="MMM D YYYY">
                        {data.date.start}
                    </Moment>
                    <span> &nbsp; - &nbsp;</span>
                    <Moment format="MMM D YYYY">
                        {data.date.end}
                    </Moment>
                </div>
                <div className="item__join-button">
                    <Button>
                        <Plus width={15} fill="#fff" />
                        <span className="item__join-text" >JOIN CONTEST</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Item;
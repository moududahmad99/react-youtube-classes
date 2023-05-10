import React from "react";
import Card from "./Card";
import Data from '../data.json'

function CardApp() {

    return (
        <React.Fragment>
            {Data.map((item, index) => <Card key={index} name={item.name} profession={item.profession}/>)}
        </React.Fragment>
    );
}

export default CardApp;

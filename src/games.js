import React from 'react';

function Games(props){
    return(
    <div>
        <h1>{props.name} favourite PC game is {props.pcGame}</h1>
        <h1>{props.name} favourite Mobile game is {props.mobileGame}</h1>
        <h1>{props.name} favourite physical game is {props.physicalGame}</h1>
    </div>
    );
}

export default Games;
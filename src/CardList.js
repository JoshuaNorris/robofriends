import React from 'react';
import Card from './card.js'; // Assuming the filename is 'Card.js' with a capital 'C'
import Robots from './robots.js'; // Assuming the filename is 'Robots.js' with a capital 'R'

const CardList = ({ robots }) => {
    return (
        <>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })}
        </>
    );
}

export default CardList;

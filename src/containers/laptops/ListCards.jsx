import React from 'react';
import CardContainer from './CardContainer';
import styles from "./styles/ListCards.module.css";

function ListCards( {laptops} ) {
    return (
        <div className={styles.cards} id={styles.scrollbar}>
            {laptops.map((laptop) => 
                (<CardContainer key={laptop.id} laptop={laptop} />))
            }
        </div>
    );
}

export default ListCards;
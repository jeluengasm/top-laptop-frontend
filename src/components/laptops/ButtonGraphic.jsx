import React from 'react';
import styles from './styles/ButtonGraphic.module.css';

function ButtonGraphic(props) {
    return (
        <button className={styles.buttongraphic} onClick={props.handleClick}>
            <img className={styles.icon} src={props.currentImage} alt="Button" />
        </button>
    );
};

export default ButtonGraphic;

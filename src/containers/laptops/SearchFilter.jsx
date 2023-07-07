import React, { useState } from 'react';
import styles from "./styles/SearchFilter.module.css";

const arrowUp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMZJREFUWEft1NsGAlEUgOHpfFDRZS9XD9RdF9FFRBcRERGJiEQ3vUaP0GX9y8xQWTKHPR1YPx9j2HvtGWM8y7Ksf68S+EptnHFCS258siaOuAX2qOMjNXBAODy0Q+aHqGGL1+GhNcrIpCo20AY/WsH5IeRLl6fTBmqWKMFJRSygDXpnhgJSJcPn0AZEMUUeiZKFE2gbxzFCDrGSBWNoGyYxRKxDDKBtlEYfkepC28CFHp7SXov8bDr+pfMuuPqXlmVZP5Hn3QFsx5Xd/36ZgQAAAABJRU5ErkJggg==";
const arrowDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMtJREFUWEft1F0HwmAUwPH1/qKiy75cfaDuuoguIrqIiIhIRCS66Wv0Ebqs/7HG5DRrz15uzp+fzdhzntnMsyzLKrrS5xiuhYF/mnoPPP3T343wysgQsRpDW8DFBLGTVzOFtlASc2ivOzK5YQZtwX8sUEai5MYltIXjWKMKpypYQRsQZQPn4UE1bKEN0uzRQKrVsYM2MOyAJjJJNiFPpw0WR8iPLNPaOOF7+AUd5JJs4oxg+BVd5FoPN9zRlwtFJF966l+7ZVlWjnneG1NLld3I8dQpAAAAAElFTkSuQmCC";

const SearchFilter = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = (item, list, setSelectedList) => {
    if (list.includes(item)) {
        setSelectedList(list.filter((i) => i !== item));
    } else {
        setSelectedList([...list, item]);
    }
  };

  return (
    <div
      className={styles[`expandable-div${expanded ? '-expanded' : ''}`]}
    >
      <div className={styles.content}>
        <span>{props.title}</span>
        <img
          className={styles['arrow-icon']}
          src={expanded ? arrowUp : arrowDown}
          alt="Arrow"
          onClick={handleClick}
        />
      </div>
      {expanded && (
        <div>
          {props.list.map((item, index) => (
            <div key={index} className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id={item}
                checked={props.selected.includes(item)}
                onChange={() => handleCheckboxChange(item, props.selected, props.setSelected)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
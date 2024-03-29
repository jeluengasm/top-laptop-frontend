import React from "react";
import {AnimatePresence, motion} from 'framer-motion'
import styles from "./styles/Card.module.css";

function Card(props) {
  let desc = props.laptop.processor ? props.laptop.processor : '';
  desc += props.laptop.ram ? (desc ? ` / ${props.laptop.ram}` : props.laptop.ram) : '';
  desc += props.laptop.screensize ? (desc ? ` / ${props.laptop.screensize}` : props.laptop.screensize) : '';
  return (
    <div className={styles.card} data-laptop-id={props.laptop.id}>
      <motion.div 
        initial={{ height: '75px' }}
        animate={{ height: props.isExpanded ? '270px' : '75px' }}
        transition={{ duration: 0.5 }}
        onMouseEnter={props.handleHover}
        onMouseLeave={props.handleHoverLeave}
      >
        <h2>{props.laptop.brand}<span class="price">{props.laptop.price}</span></h2>
        {!props.isExpanded && 
          <p>{desc}</p>
        }
        <AnimatePresence>
          {props.isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p><span>Processor:</span> {props.laptop.processor}</p>
              <p><span>RAM:</span> {props.laptop.ram}</p>
              <p><span>Hard Drive:</span> {props.laptop.harddrive}</p>
              <p><span>Graphic Card:</span> {props.laptop.grapcard}</p>
              <p><span>Capacity Graphic Card:</span> {props.laptop.capgrapcard}</p>
              <p><span>Screen Size:</span> {props.laptop.screensize}</p>
              <p><span>OS:</span> {props.laptop.opsystem}</p>
              <p><span>Warranty:</span> {props.laptop.warranty}</p>
              <p className="link"><a href={props.laptop.link} target="_blank" rel="noopener noreferrer"><b>Redirect to the official website</b></a></p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Card;
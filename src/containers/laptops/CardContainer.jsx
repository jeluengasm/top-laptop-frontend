import React, { useState } from 'react';
import Card from '../../components/laptops/Card';

function CardContainer(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleHover = () => {
        setIsExpanded(true);
    };
    
    const handleHoverLeave = () => {
        setIsExpanded(false);
    };

    return (
        <Card
            laptop={props.laptop}
            handleHover={handleHover}
            handleHoverLeave={handleHoverLeave}
            isExpanded={isExpanded}
        />
    );
}

export default CardContainer;

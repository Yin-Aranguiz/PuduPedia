import React, { useState } from 'react';
import './Carousel.scss';

const Application = () => {
    const [items] = useState([
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg',
        'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg'
    ]);
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState('');

    const moveLeft = () => {
        const newActive = (active - 1 + items.length) % items.length;
        setActive(newActive);
        setDirection('left');
    };

    const moveRight = () => {
        const newActive = (active + 1) % items.length;
        setActive(newActive);
        setDirection('right');
    };

    const generateItems = () => {
        const result = [];
        for (let i = active - 2; i < active + 3; i++) {
            let index = i;
            if (i < 0) index = items.length + i;
            else if (i >= items.length) index = i % items.length;

            const level = active - i;
            result.push(<Item key={index} src={items[index]} level={level} />);
        }
        return result;
    };

    return (
        
        <div id="carousel" className="noselect">
            <div className="arrow arrow-left" onClick={moveLeft}>
                &larr;
            </div>
            <div className={`carousel-items ${direction}`}>
                {generateItems()}
            </div>
            <div className="arrow arrow-right" onClick={moveRight}>
                &rarr;
            </div>
        </div>
        
    );
};

const Item = ({ src, level }) => {
    const className = `item level${level}`;
    return <div className={className}><img src={src} alt={`Item ${level}`} /></div>;
};
export default Application;



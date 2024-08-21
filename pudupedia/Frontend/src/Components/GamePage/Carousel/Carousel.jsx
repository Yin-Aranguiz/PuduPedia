import React, { useState } from 'react';
import './Carousel.scss';

const Application = () => {
    const [items] = useState([
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page1' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page2' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page3' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page4' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page5' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page6' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page7' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page8' },
        { src: 'https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg', url: 'https://example.com/page9' }
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
            result.push(<Item key={index} src={items[index].src} url={items[index].url} level={level} />);
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

const Item = ({ src, url, level }) => {
    const className = `item level${level}`;
    return (
        <div className={className}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`Item ${level}`} />
            </a>
        </div>
    );
};

export default Application;


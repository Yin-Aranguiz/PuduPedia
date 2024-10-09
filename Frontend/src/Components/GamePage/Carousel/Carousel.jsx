import React, { useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

import triviaGame from './triviaGame.jpeg';
import PuHiPu from './PuHiPu.jpeg';
import memopuduGame from './memopuduGame.jpeg';

const Application = () => {
    const [items] = useState([
        { src: triviaGame, url: '/trivia' },
        { src: memopuduGame, url: '/memopudu' },
        { src: PuHiPu, url: '/puduGame' },
        { src: triviaGame, url: '/trivia' },
        { src: memopuduGame, url: '/memopudu' },
        { src: PuHiPu, url: '/puduGame' },
        { src: triviaGame, url: '/trivia' },
        { src: memopuduGame, url: '/memopudu' },
        { src: PuHiPu, url: '/puduGame' }
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
            <Link to={url}>
                <img src={src} alt={`Item ${level}`} />
            </Link>
        </div>
    );
};

export default Application;
import React, { useState, useEffect } from 'react';
import rockImg from './puma.jpg'; // Imagen de "Puma"
import paperImg from './hierba.jpg'; // Imagen de "Hierba"
import scissorsImg from './pudu.jpg'; // Imagen de "Pudu"
import winSound from './win.mp3';
import loseSound from './lose.mp3';
import clickSound from './click.mp3';
import drawSound from './empate.mp3';
import './PuduHierbaPuma.css';

import Header from '../../LandingPage/Header/Header';

const hands = {
    puma: rockImg,
    'hierba venenosa': paperImg,
    pudu: scissorsImg
};

const getRandomChoice = () => {
    const options = ['puma', 'hierba venenosa', 'pudu'];
    return options[Math.floor(Math.random() * options.length)];
};

const PuduHierbaPuma = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(getRandomChoice());
    const [result, setResult] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        // Precargar imágenes
        Object.values(hands).forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        if (animating) {
            const clickSoundEffect = new Audio(clickSound);
            clickSoundEffect.play();
    
            let index = 0;
            const options = ['puma', 'hierba venenosa', 'pudu'];
            const startIndex = options.indexOf(computerChoice);
            const interval = setInterval(() => {
                index = (index + 1) % 3;
                setComputerChoice(options[(startIndex + index) % 3]);
            }, 300); 
    
            setTimeout(() => {
                clearInterval(interval);
                const finalComputerChoice = getRandomChoice();
                setComputerChoice(finalComputerChoice);
    
                const newResult = determineWinner(userChoice, finalComputerChoice);
                setResult(newResult);
    
                const sound = new Audio(
                    newResult === "¡Ganaste!" ? winSound :
                    newResult === "Perdiste" ? loseSound :
                    drawSound
                );
                sound.play();
    
                setAnimating(false);
                setGameEnded(true); 
            }, 2500); 
        }
    }, [animating, userChoice, gameEnded]);

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return "Empate";
        } else if (
            (userChoice === 'puma' && computerChoice === 'pudu') ||
            (userChoice === 'hierba venenosa' && computerChoice === 'puma') ||
            (userChoice === 'pudu' && computerChoice === 'hierba venenosa')
        ) {
            return "¡Ganaste!";
        } else {
            return "Perdiste";
        }
    };

    const playGame = (choice) => {
        setUserChoice(choice);
        setAnimating(true);
        setGameEnded(false);
    };

    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(getRandomChoice());
        setResult(null);
        setAnimating(false);
        setGameEnded(false);
    };
 
    return (
        <div id="game-container">
            <Header />
            
            <h1>¡Pudú, Hierba o Puma!</h1>
            {!animating && result === null ? (
                <div id="choices">
                    <button className="choice-button" onClick={() => playGame('puma')}>
                        <img className='imageChoice' src={hands.puma} alt="Puma" width="100" />
                        <p>Puma</p>
                    </button>
                    <button className="choice-button" onClick={() => playGame('hierba venenosa')}>

                        <img src={hands.hierba} alt="Hierba" width="100" />

                        <img className='imageChoice' src={hands['hierba venenosa']} alt="Hierba venenosa" width="100" />

                        <p>Hierba venenosa</p>
                    </button>
                    <button className="choice-button" onClick={() => playGame('pudu')}>
                        <img className='imageChoice' src={hands.pudu} alt="Pudu" width="100" />
                        <p>Pudu</p>
                    </button>
                </div>
            ) : (
                <div id="results">
                    {animating ? (
                        <div id="hands-results">
                            <div id="user-hand">
                                <img className='imageChoice' src={hands[userChoice]} width="100" alt="Elección del Usuario" />
                            </div>
                            <div id="computer-hand">
                                <img className='imageChoice' src={hands[computerChoice]} width="100" alt="Elección de la Computadora" />
                            </div>
                        </div>
                    ) : (
                        <div id="result-container">
                            <div id="hands-results">
                                <div id="user-hand">
                                    <img className='imageChoice' src={hands[userChoice]} width="100" alt="Elección del Usuario" />
                                </div>
                                <div id="computer-hand">
                                    <img className='imageChoice' src={hands[computerChoice]} width="100" alt="Elección de la Computadora" />
                                </div>
                            </div>
                            <div id="result-text">
                                <p><b>Elegiste: {userChoice}</b></p>
                                <p><b>La computadora eligió: {computerChoice}</b></p>
                                <p><b>Resultado: {result}</b></p>
                            </div>
                        </div>
                    )}
                    {result && !animating && (
                        <button className="choice-button" id="play-again" onClick={resetGame}>
                            Jugar nuevamente
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default PuduHierbaPuma;
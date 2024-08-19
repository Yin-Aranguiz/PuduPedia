import React, { useEffect, useState, useRef } from 'react';
import './memopudu.css';
import imgExample from './nebula.jpeg';
import img2Example from './animalito.jpg';
import img3Example from './Chucao.jpg';
import img4Example from './Guiña.jpg';
import img5Example from './PuduComiendo.jpg';
import img6Example from './pumaRuge.jpg';
import img7Example from './zorrito.jpg';
import img8Example from './PuduReading.jpg';
import img9Example from './hierba.jpg';
import img10Example from './pescador.jpg';
import img11Example from './pequen.jpg';
import img12Example from './bosque.jpg';
import img13Example from './chincol.jpg';
import img14Example from './pudu.jpg';
import img15Example from './puma.jpg';
import musicGame from './musiquitaPunshi.MP3';

const Memopudu = () => {
    const [time, setTime] = useState(60);
    const [interval, setInterval] = useState(null);
    const [lockBoard, setLockBoard] = useState(true);
    const [firstCard, setFirstCard] = useState(null);
    const [matchedCards, setMatchedCards] = useState([]);
    const [animalImages, setAnimalImages] = useState([]);
    const [actualDifficulty, setactualDifficulty] = useState(12); // Nivel fácil por defecto
    const [gameStarted, setGameStarted] = useState(false);
    const tableroRef = useRef(null);
    const audioRef = useRef(null);
    const musicButtonRef = useRef(null);
    const [intervalId, setIntervalId] = useState(null);

    const animales = [
        imgExample,
        img2Example,
        img3Example,
        img4Example,
        img5Example,
        img6Example,
        img7Example,
        img8Example,
        img9Example,
        img10Example,
        img11Example,
        img12Example,
        img13Example,
        img14Example,
        img15Example
    ];

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    const playMusic = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            musicButtonRef.current.textContent = 'Parar Sonido';
        }
    };

    const stopMusic = () => {
        if (!audioRef.current.paused) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            musicButtonRef.current.textContent = 'Reproducir Sonido';
        }
    };

    const handleMusicButtonClick = () => {
        if (audioRef.current.paused) {
            playMusic();
        } else {
            stopMusic();
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const startCounter = () => {
        console.log('startCounter running')
        const intervalId = setInterval(() => {
            setTime(prev => {
                const newTime = prev - 1;
                console.log('newTime:', newTime);
                if (newTime <= 0) {
                    clearInterval(intervalId);
                    showResult('fin-malo');
                    return 0;
                }
                updateCounter(newTime);
                return newTime;
            });
        }, 1000);
        setIntervalId(intervalId);
    };

    const updateCounter = (time) => {
        const tiempoElement = document.getElementById('tiempo');
        if (!tiempoElement) {
            console.error("El elemento con el ID 'tiempo' no existe en el DOM");
            return;
        }
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;
        tiempoElement.textContent = `Tiempo: ${minutes < 10 ? `0${minutes}` : minutes}:${formatSeconds}`;
    };

    const stopCounter = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setTime(60);
    };

    const showResult = (state) => {
        const result = document.getElementById('resultado');
        switch (state) {
            case 'inicio':
                result.classList.remove('hidden');
                result.textContent = '¡COMIENZA EL JUEGO!';
                setLockBoard(false);
                setTimeout(() => {
                    result.classList.add('hidden');
                }, 500);
                break;
            case 'fin-bueno':
                setLockBoard(true);
                clearInterval(interval);
                result.classList.remove('hidden');
                result.classList.add('animate');
                result.textContent = '¡GANASTE!';
                setTimeout(() => {
                    result.classList.add('hidden');
                    result.classList.remove('animate');
                }, 1000);
                break;
            case 'fin-malo':
                setLockBoard(true);
                result.classList.remove('hidden');
                result.classList.add('animate');
                result.textContent = '¡PERDISTE!';
                setTimeout(() => {
                    result.classList.add('hidden');
                    result.classList.remove('animate');
                }, 1000);
                break;
            default:
                break;
        }
    };

    const animationWin = () => {
        const result = document.getElementById('resultado');
        result.classList.add('animacionWin');
    };

    const handleCardClick = (e) => {
        if (lockBoard || !gameStarted) return;

        const card = e.currentTarget;
        const cardImage = card.querySelector('img');

        if (card === firstCard || card.classList.contains('matched')) return;

        cardImage.classList.remove('hidden');
        card.classList.add('flipped');

        if (!firstCard) {
            setFirstCard(card);
        } else {
            const secondCard = card;

            if (firstCard.dataset.animal === secondCard.dataset.animal) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                setMatchedCards(prev => [...prev, firstCard, secondCard]);
                resetCards();

                if (matchedCards.length + 2 === actualDifficulty) {
                    setTimeout(() => {
                        showResult('fin-bueno');
                        animationWin();
                        setLockBoard(true);
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    firstCard.querySelector('img').classList.add('hidden');
                    secondCard.querySelector('img').classList.add('hidden');
                    resetCards();
                    setLockBoard(false);
                }, 600);
            }
        }
    };

    const resetCards = () => {
        setFirstCard(null);
        setLockBoard(false);
    };

    const handleDifficultyClick = (difficulty) => {
        resetBoard(difficulty);
    };

    const generateAnimalImages = (difficulty) => {
        const pairs = animales.slice(0, Math.ceil(difficulty / 2));
        const images = [...pairs, ...pairs.slice(0, difficulty - pairs.length)];
        return shuffle(images);
    };

    const resetBoard = (difficulty) => {
        stopCounter();
        setactualDifficulty(difficulty);
        setAnimalImages(generateAnimalImages(difficulty));
        setLockBoard(true);
        setGameStarted(false);
        setMatchedCards([]);
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').classList.add('hidden');

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('flipped', 'matched');
            const img = card.querySelector('img');
            if (img) {
                img.classList.add('hidden');
            }
        });
    };

    const startGame = () => {
        if (animalImages.length === 0) return;
        setGameStarted(true);
        startCounter();
        showResult('inicio');
        setLockBoard(false);
        resetCards();
    };

    const cancelGame = () => {
        if (interval) {
            clearInterval(interval);
            setInterval(null);
        }

        setTime(60);
        updateCounter(60);

        setLockBoard(true);
        setGameStarted(false);

        const resultElement = document.getElementById('resultado');
        if (resultElement) {
            resultElement.textContent = '';
            resultElement.classList.add('hidden');
        }

        resetCards();
        resetBoard(actualDifficulty);
    };

    useEffect(() => {
        setAnimalImages(generateAnimalImages(actualDifficulty));
    }, [actualDifficulty]);

    return (
        <div className='memopudu'>
            <h1 className='title'>Memopudú</h1>
            <h3 id="tiempo">Tiempo: 01:00</h3>
            <h2 className= 'description'>¡Encuentra todos los pares antes de que pase 1 minuto!</h2>
            <div className="controls">
                <button onClick={handleMusicButtonClick} ref={musicButtonRef}>
                    Parar Sonido
                </button>
                <div className="difficulty-buttons">
                    <button onClick={() => handleDifficultyClick(12)}>Fácil</button>
                    <button onClick={() => handleDifficultyClick(18)}>Medio</button>
                    <button onClick={() => handleDifficultyClick(24)}>Difícil</button>
                </div>
                <button onClick={startGame} disabled={gameStarted}>Iniciar Juego</button>
                <button onClick={cancelGame}>Cancelar Juego</button>
            </div>
            <div className={`board ${actualDifficulty === 12 ? 'easy' : actualDifficulty === 18 ? 'medium' : 'hard'}`} ref={tableroRef}>
                {animalImages.map((animal, index) => (
                    <div
                        key={index}
                        className={`card ${lockBoard ? 'lock' : ''}`}
                        data-animal={animal}
                        onClick={handleCardClick}
                    >
                        <div className="card-inner">
                            <div className="card-front"></div>
                            <div className="card-back">
                                <img src={animal} alt="animal" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="resultado" className="hidden"></div>
            <audio ref={audioRef} src={musicGame} />
        </div>
    );
};

export default Memopudu;

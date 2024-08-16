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
import casillaGirada from './casillaGirada.jpeg';
import musicGame from './alavrg.mp3';

const Memopudu = () => {
    const [tiempoRestante, setTiempoRestante] = useState(60);
    const [intervalo, setIntervalo] = useState(null);
    const [lockBoard, setLockBoard] = useState(true);
    const [firstCard, setFirstCard] = useState(null);
    const [matchedCards, setMatchedCards] = useState([]);
    const [animalImages, setAnimalImages] = useState([]);
    const [dificultadActual, setDificultadActual] = useState(9); // Nivel fácil por defecto
    const [gameStarted, setGameStarted] = useState(false);
    const tableroRef = useRef(null);
    const audioRef = useRef(null);
    const musicButtonRef = useRef(null);

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

    const reproducirMusica = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            musicButtonRef.current.textContent = 'Parar Sonido';
        }
    };
    
    const detenerMusica = () => {
        if (!audioRef.current.paused) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            musicButtonRef.current.textContent = 'Reproducir Sonido';
        }
    };
    
    const handleMusicButtonClick = () => {
        if (audioRef.current.paused) {
            reproducirMusica();
        } else {
            detenerMusica();
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

    const iniciarContador = () => {
        const intervaloId = setInterval(() => {
            setTiempoRestante(prev => {
                const nuevoTiempo = prev - 1;
                if (nuevoTiempo <= 0) {
                    clearInterval(intervaloId);
                    mostrarResultado('fin-malo');
                    return 0;
                }
                actualizarContador(nuevoTiempo);
                return nuevoTiempo;
            });
        }, 1000);
        setIntervalo(intervaloId);
    };
    
    const actualizarContador = (tiempo) => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
        document.getElementById('tiempo').textContent = `Tiempo: ${minutos < 10 ? `0${minutos}` : minutos}:${formatoSegundos}`;
    };

    const detenerContador = () => {
        if (intervalo) {
            clearInterval(intervalo);
            setIntervalo(null);
        }
        setTiempoRestante(60);
    };

    const mostrarResultado = (estado) => {
        const resultado = document.getElementById('resultado');
        switch (estado) {
            case 'inicio':
                resultado.textContent = '¡COMIENZA EL JUEGO!';
                resultado.classList.remove('hidden');
                setTimeout(() => {
                    resultado.classList.add('hidden');
                }, 2000);
                break;
            case 'fin-bueno':
                setLockBoard(true);
                clearInterval(intervalo);
                resultado.textContent = '¡GANASTE!';
                resultado.classList.remove('hidden');
                resultado.classList.add('animate');
                setTimeout(() => {
                    resultado.classList.add('hidden');
                    resultado.classList.remove('animate');
                }, 2000);
                break;
            case 'fin-malo':
                setLockBoard(true);
                resultado.textContent = '¡PERDISTE!';
                resultado.classList.remove('hidden');
                resultado.classList.add('animate');
                setTimeout(() => {
                    resultado.classList.add('hidden');
                    resultado.classList.remove('animate');
                }, 2000);
                break;
            default:
                break;
        }
    };

    const animacionGanar = () => {
        const resultado = document.getElementById('resultado');
        resultado.classList.add('animacionWin');
    };

    const manejarCardClick = (e) => {
        if (lockBoard || !gameStarted) return;
    
        const card = e.currentTarget;
        const cardImage = card.querySelector('img');
    
        if (card === firstCard || card.classList.contains('matched')) return;
    
        card.classList.add('flipped');
        cardImage.classList.remove('hidden');
    
        if (!firstCard) {
            setFirstCard(card);
        } else {
            setLockBoard(true);
            const secondCard = card;

            if (firstCard.dataset.animal === secondCard.dataset.animal) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                setMatchedCards(prev => [...prev, firstCard, secondCard]);
                resetCards();

                if (matchedCards.length + 2 === dificultadActual) {
                    setTimeout(() => {
                        mostrarResultado('fin-bueno');
                        animacionGanar();
                    }, 300);
                }
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    firstCard.querySelector('img').classList.add('hidden');
                    secondCard.querySelector('img').classList.add('hidden');
                    resetCards();
                }, 1000);
            }
        }
    };
    
    const resetCards = () => {
        setFirstCard(null);
        setLockBoard(false);
    };

    const manejarDifficultyClick = (dificultad) => {
        resetTablero(dificultad);
    };

    const generateAnimalImages = (dificultad) => {
        const pairs = animales.slice(0, Math.ceil(dificultad / 2));
        const images = [...pairs, ...pairs.slice(0, dificultad - pairs.length)];
        return shuffle(images);
    };

    const resetTablero = (dificultad) => {
        detenerContador();
        setDificultadActual(dificultad);
        setAnimalImages(generateAnimalImages(dificultad));
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

    const empezarJuego = () => {
        if (animalImages.length === 0) return;
        setGameStarted(true);
        iniciarContador();
        mostrarResultado('inicio');
        setLockBoard(false); 
        resetCards();
    };
    
    const cancelarJuego = () => {
        if (intervalo) {
            clearInterval(intervalo);
            setIntervalo(null);
        }
    
        setTiempoRestante(60);
        actualizarContador(60); 
    
        setLockBoard(true);
        setGameStarted(false);
    
        const resultadoElement = document.getElementById('resultado');
        if (resultadoElement) {
            resultadoElement.textContent = '';
            resultadoElement.classList.add('hidden');
        }
    
        resetCards();
        resetTablero(dificultadActual);
    };

    useEffect(() => {
        setAnimalImages(generateAnimalImages(dificultadActual));
    }, [dificultadActual]);

    return (
        <div>
            <h1>Memopudú</h1>
            <h3 id="tiempo">Tiempo: 01:00</h3>
            <div className="controls">
                <button onClick={handleMusicButtonClick} ref={musicButtonRef}>
                    Controlar Sonido
                </button>
                <div className="difficulty-buttons">
                    <button onClick={() => manejarDifficultyClick(9)}>Fácil</button>
                    <button onClick={() => manejarDifficultyClick(12)}>Medio</button>
                    <button onClick={() => manejarDifficultyClick(18)}>Difícil</button>
                </div>
                <button onClick={empezarJuego} disabled={gameStarted}>Iniciar Juego</button>
                <button onClick={cancelarJuego}>Cancelar Juego</button>
            </div>
            <div className={`board ${dificultadActual === 9 ? 'easy' : dificultadActual === 12 ? 'medium' : 'hard'}`} ref={tableroRef}>
                {animalImages.map((animal, index) => (
                    <div
                        key={index}
                        className={`card ${lockBoard ? 'lock' : ''}`}
                        data-animal={animal}
                        onClick={manejarCardClick}
                    >
                        <div className="card-inner">
                            <div className="card-front"></div>
                            <div className="card-back">
                                <img src={animal} alt="animal" className="hidden" />
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

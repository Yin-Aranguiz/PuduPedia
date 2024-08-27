import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pudu from './path/to/your/image/Pudu.jpg'; // Asegúrate de que la ruta a la imagen sea correcta
import './News.css';


export default function News() {


    const { name } = useParams();  // Obtiene el parámetro "name" de la URL
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
             `https://newsapi.org/v2/everything?q=Chile+AND+(biodiversidad+AND+(conservación+OR+naturaleza+OR+sostenibilidad+OR+endémico+OR+ecosistema+OR+animal))&language=es&apiKey=bab7d79d5d54488da5f9691f8e7ca36b`
          );
          
          if (response.ok){
            console.log('Solicitud realizada con éxito');
          }

          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
  
          const data = await response.json();
          setArticles(data.articles);
          setFilteredArticles(data.articles);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchNews();
    }, []);

    if (!articles) {
        return <div>Cargando...</div>;
    }
    return (
        <div className='news-container'>
        <div className='new'>
            <div className='head'>
                <h1 className='headline'>
                    {articles.title}
                </h1>
                <p className='subhead'>
                    Pudú Captado "Comiendo un Cerebro" Resulta Ser un Amante de las SandíasHaz click para ver 100% real no fake
                </p>
            </div>
                <div class="external-container">
                <div className='imgDateAuth'>
                     <img src={Pudu} className='image'></img>   
                    <div className='img-bottom'>
                        <div className='author-date'>
                            <p className='author'>
                            {articles.description}
                            </p>
                    <time datetime="2024-08-13T15:59:00-04:00 15:59" className='date'>16 de agosto de 2024</time>
                    </div>
                    <g className='share-buttons'>
                    <svg id="Capa_1" class="x" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 150 150">
                    <path class="cls-1" d="M67,.6C40.6,3.3,17.1,20.6,6.4,45.2-.5,61-1.6,79.3,3.2,96.1c6.1,20.9,21.7,38.6,42,47.5,15.9,6.9,34.1,8,50.9,3.1,25.1-7.2,44.9-27.9,51.4-53.6,10.1-40.2-14.8-81.3-55.1-90.9C83.6.2,75.9-.4,67,.6ZM68,47c6.4,8.5,11.8,15.5,12,15.5s6.9-7,14.7-15.5l14.3-15.5h8.2l-1.8,1.9c-1,1-7.5,8.1-14.4,15.6-6.9,7.5-13.8,14.9-15.1,16.2l-2.4,2.6,18.8,24.9c10.3,13.8,18.8,25.1,18.8,25.4s-6.1.4-13.6.4h-13.6c0,0-12.7-17.1-12.7-17.1-8.8-11.8-12.9-16.8-13.2-16.5-.3.2-7.4,7.9-15.8,17l-15.3,16.6h-3.9c-2.1,0-3.9-.1-3.9-.2s7.9-8.9,17.6-19.3c9.7-10.4,17.7-19.2,17.7-19.3,0-.2-7.9-11.1-17.6-24.1-9.8-13-17.8-23.8-17.8-23.9s6.1-.1,13.7-.1h13.7l11.6,15.5Z">
                        </path>
                        <path class="cls-1" d="M41.4,38.2c.2.3,12.8,17.2,27.9,37.4l27.5,36.8h6.1c3.8,0,6.1-.1,6-.4,0-.2-12.6-17.1-27.8-37.5l-27.7-37h-6.2c-5.1,0-6.2.1-5.8.7h0Z">
                        </path>
                        </svg>
                    <svg aria-hidden="true" width="23" height="18" viewBox="0 0 23 18" class="css-zd9juy">
                        <path d="M1.357 17.192a.663.663 0 0 1-.642-.81c1.82-7.955 6.197-12.068 12.331-11.68V1.127a.779.779 0 0 1 .42-.653.726.726 0 0 1 .78.106l8.195 6.986a.81.81 0 0 1 .253.557.82.82 0 0 1-.263.547l-8.196 6.955a.83.83 0 0 1-.779.105.747.747 0 0 1-.42-.663V11.29c-8.418-.905-10.974 5.177-11.08 5.45a.662.662 0 0 1-.6.453Zm10.048-7.26a16.37 16.37 0 0 1 2.314.158.81.81 0 0 1 .642.726v3.02l6.702-5.682-6.702-5.692v2.883a.767.767 0 0 1-.242.536.747.747 0 0 1-.547.18c-4.808-.537-8.364 1.85-10.448 6.922a11.679 11.679 0 0 1 8.28-3.093v.042Z" fill="#000" fill-rule="nonzero">
                        </path>
                    </svg>

                    <svg width="12" height="18" viewBox="0 0 12 18" class="css-1fag8eu">
                        <g fill-rule="nonzero">
                            <path class="saved-fill" d="M1.157 1.268v14.288l4.96-3.813 4.753 3.843V1.268z">
                            </path>
                            <path class="saved-stroke" d="m12 18-5.9-4.756L0 17.98V1.014C0 .745.095.487.265.297.435.107.664 0 .904 0h10.192c.24 0 .47.107.64.297.169.19.264.448.264.717V18ZM1.157 1.268v14.288l4.96-3.813 4.753 3.843V1.268H1.158Z">
                            </path>
                        </g>
                    </svg>
                    </g>
                    </div>
                </div>
                </div>
            <section className='body'>
                <p>
                    Lo que comenzó como un espeluznante rumor se ha convertido en una anécdota para la historia. En los últimos días, se viralizó en redes sociales un video de un pudú, el pequeño ciervo endémico de Chile, que parecía estar devorando algo inquietantemente parecido a un cerebro.
                </p>
                <p>
                    El video, grabado por un excursionista que exploraba las profundidades del Bosque Valdiviano, mostraba al pudú concentrado en lo que a simple vista parecía un macabro festín. Las imágenes causaron revuelo, y rápidamente surgieron teorías que iban desde mutaciones genéticas hasta hábitos alimenticios desconocidos en la especie.
                </p>
                <p>
                    Sin embargo, después de un análisis más detallado, se descubrió la verdad: el pudú no estaba comiendo un cerebro, sino que disfrutaba de una jugosa sandía. La confusión se debió a la forma y el color rojo vibrante de la fruta, que al ser filmada desde cierta distancia, daba la apariencia de un órgano cerebral.
                </p>
                <p>
                    Biólogos locales han confirmado que, aunque los pudúes son herbívoros, el hecho de que uno de ellos haya encontrado y comenzado a comer una sandía es una rareza. "Es muy inusual, pero no es sorprendente que un pudú se sienta atraído por la dulzura de una fruta tan refrescante en pleno verano," comentó la doctora Mariana Rivas, especialista en fauna endémica chilena.
                </p>
                <p>
                    El video ha dejado de ser una fuente de susto para convertirse en una sensación adorable, destacando una vez más la fascinante vida silvestre que habita en los bosques de Chile. Mientras tanto, el pudú protagonista se ha ganado el apodo de "Sandíabrains" en las redes, donde miles de usuarios comparten su sorpresa y admiración por este pequeño y curioso habitante del bosque.
                </p>
            </section>
        </div>
        <div className='extras'>
            <h3>Podria interesarte</h3>


        </div>
        </div>
    )
}

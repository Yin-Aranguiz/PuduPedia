import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './News.css';

export default function News() {
    const { title } = useParams(); // Obtiene el parámetro "title" de la URL
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=Chile+AND+(biodiversidad+AND+(conservación+OR+naturaleza+OR+sostenibilidad+OR+endémico+OR+ecosistema+OR+animal))&language=es&apiKey=bab7d79d5d54488da5f9691f8e7ca36b`
                );

                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }

                const data = await response.json();
                setArticles(data.articles);

                // Filtra el artículo basado en el título de la URL
                const article = data.articles.find(
                    (article) => article.title === decodeURIComponent(title)
                );

                setSelectedArticle(article);

            } catch (err) {
                setError(err.message);
            }
        };

        fetchNews();
    }, [title]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!selectedArticle) {
        return <div>Cargando...</div>;
    }

    const curatedContent = selectedArticle.content.split('[+')
    const relatedArticles = articles.filter(
        (article) => article.title !== selectedArticle.title
    );
    return (
        <div className='news-container'>
            <div className='new'>
                <div className='head'>
                    <h1 className='headline'>{selectedArticle.title}</h1>
                    <p className='subhead'>{selectedArticle.description}</p>
                </div>
                <div className="externalContainer">
                    <div className='imgDateAuth'>
                        <img src={selectedArticle.urlToImage} className='image' alt="" />
                        <div className='img-bottom'>
                            <div className='author-date'>
                                <time dateTime={selectedArticle.publishedAt} className='date'>
                                    {new Date(selectedArticle.publishedAt).toLocaleDateString()}
                                </time>
                                <p className='author'>{selectedArticle.author || "Autor desconocido"}</p>
                            </div>
                            <div className='share-buttons'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <section className='newsBody'>
                    <p>{curatedContent[0] || "Contenido no disponible"}</p>
                    <p>
                        Revisa la noticia orignal aquí: <a href={selectedArticle.url} className='original' target="_blank" rel="noopener noreferrer">{selectedArticle.url}</a>
                    </p>
                </section>
            </div>
            <div className='extras'>
                <h3 className='extrasTitle'>PODRÍA INTERESARTE</h3>
                    {relatedArticles.map((article) => (
                        <div className='reladetNews'>
                            <a href={article.url} className='reladetNewsTitle' target="_blank" rel="noopener noreferrer">{article.title}</a>
                            <div>
                            <img src={article.urlToImage} className='imgExtra'/>
                            <p>________________________</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import './ApiRequest.css';

const Notices = () => {
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

                if (response.ok) {
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

    useEffect(() => {
        const filterByDate = (articles, daysAgo) => {
            const now = new Date();
            return articles.filter(article => {
                const articleDate = new Date(article.publishedAt);
                return now - articleDate <= daysAgo * 24 * 60 * 60 * 1000;
            });
        };

        if (filter === 'today') {
            // Filtrar artículos publicados hoy
            const todayArticles = filterByDate(articles, 1);
            setFilteredArticles(todayArticles);
        } else if (filter === 'week') {
            // Filtrar artículos publicados en los últimos 7 días
            const weekArticles = filterByDate(articles, 7);
            setFilteredArticles(weekArticles);
        } else if (filter === 'month') {
            // Filtrar artículos publicados en los últimos 30 días
            const monthArticles = filterByDate(articles, 30);
            setFilteredArticles(monthArticles);
        } else {
            // Mostrar todos los artículos
            setFilteredArticles(articles);
        }
    }, [filter, articles]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="noticias-container">
            <div className="noticias-filtro">
                <h3>Filtrar Noticias</h3>
                <button onClick={() => handleFilterChange('today')}>Filtrar por Hoy</button>
                <button onClick={() => handleFilterChange('week')}>Filtrar por Esta Semana</button>
                <button onClick={() => handleFilterChange('month')}>Filtrar por Este Mes</button>
                <button onClick={() => handleFilterChange('all')}>Mostrar Todas</button>
            </div>
            <div className="noticias-lista">
                <h2>Noticias sobre Ecosistemas y Conservación en Chile</h2>
                {error ? (
                    <p>Error al cargar las noticias: {error}</p>
                ) : (
                    <ul>
                        {filteredArticles.map((article, index) => (
                            <li key={index} className="noticia-item">
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="noticia-imagen"
                                    />
                                )}
                                <div className="noticia-contenido">
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                                        {article.title}
                                    </a>
                                    <p>{article.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Notices;

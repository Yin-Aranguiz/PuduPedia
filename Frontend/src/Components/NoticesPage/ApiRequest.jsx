import React, { useEffect, useState } from 'react';
import './ApiRequest.css';

const Notices = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filter, setFilter] = useState('all');
    const [id, setId] = useState (null)

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
  
    useEffect(() => {
      // Filtrar noticias según el filtro seleccionado
      if (filter === 'today') {
        // filtrado por hoy
      } else if (filter === 'week') {
        // filtrado por semana
      } else if (filter === 'month') {
        // filtrado por mes
      } else {
        setFilteredArticles(articles); // Mostrar todas las noticias
      }
    }, [filter, articles]);


    useEffect(() => {
      // Función auxiliar para convertir una fecha en formato ISO a un objeto Date
      const parseDate = (dateString) => new Date(dateString);
    
      // Función auxiliar para comparar si una fecha está dentro del rango dado
      const isWithinRange = (date, range) => {
        const now = new Date();
        const pastDate = new Date();
        
        switch (range) {
          case 'today':
            return date.toDateString() === now.toDateString();
          case 'week':
            pastDate.setDate(now.getDate() - 7);
            return date >= pastDate && date <= now;
          case 'month':
            pastDate.setMonth(now.getMonth() - 1);
            return date >= pastDate && date <= now;
          default:
            return true;
        }
      };
    
      // Filtrar noticias según el filtro seleccionado
      if (filter === 'today' || filter === 'week' || filter === 'month') {
        const filtered = articles.filter(article => {
          const publicationDate = parseDate(article.publishedAt);
          return isWithinRange(publicationDate, filter);
        });
        setFilteredArticles(filtered);
      } else {
        setFilteredArticles(articles); // Mostrar todas las noticias
      }
    }, [filter, articles]);
  
    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
    };


    return  (
      <div className="noticias-container">

      <div className="noticias-lista">
        <h2>NOTICIAS SOBRE ECOSISTEMAS Y CONSERVACIÓN EN CHILE</h2>
        {error ? (
          <p>Error al cargar las noticias: {error}</p>
        ) : (
          <ul>
            {filteredArticles.map((article, index) => (
              <li key={index} className="noticia-item">
                <img src={article.urlToImage} alt={article.title} className="noticia-imagen" />
                <div className="noticia-contenido">
                    <a href={`/chile/${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                  {article.title}
                  </a>
                  <p >{article.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="noticias-filtro">
        <h3>FILTRAR NOTICIAS</h3>
        <button onClick={() => handleFilterChange('today')}>Filtrar por Hoy</button>
        <button onClick={() => handleFilterChange('week')}>Filtrar por Esta Semana</button>
        <button onClick={() => handleFilterChange('month')}>Filtrar por Este Mes</button>
        <button onClick={() => handleFilterChange('all')}>Mostrar Todas</button>
      </div>
    </div>
  );
};
  

export default Notices;

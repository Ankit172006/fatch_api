
  import React, { useState, useEffect } from 'react';
  import './App.css'
  function App() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=82a60005abee455fb06cc6f5e485c180')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setArticles(data.articles);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Top Business Headlines</h1>
       
          {articles.map((article) => (
           <>
           <div className="main_news_container">

            <div className="title">
              <h3>{article.title}</h3>
            </div>
            <div className="img">
              <img src={article.urlToImage} alt="" />
            </div>
            <div className="author">
            Author:  <span id='author'>{article.author}</span>
            </div>
            <p className="duscription">
             {article.description} 
            </p>
            <div className="link">
              <a href={article.url}>
                {article.url}
              </a>
            </div>
           </div>
           </>
           
          ))}
        
      </div>
    );
  }

  export default App;

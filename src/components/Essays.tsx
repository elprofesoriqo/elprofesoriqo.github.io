import React, { useEffect, useState } from "react";
import "../assets/styles/Essays.scss"; // Importujemy styl

interface EssayItem {
  title: string;
  url: string;
  description: string;
}

function Essay() {
  const [essays, setEssays] = useState<EssayItem[]>([]);

  useEffect(() => {
    import('../assets/data/essays.json') // Ładowanie pliku JSON
      .then((data) => {
        setEssays(data.default); // `default` jest częścią importu dynamicznego w Webpacku
      })
      .catch((error) => {
        console.error('Error loading essay data:', error);
      });
  }, []);

  return (
    <div className="essays-container" id="essays">
      <h1>Research</h1>
      <div className="essays-grid">
        {essays.map((essay, index) => (
          <div className="essay" key={index}>
            <a href={essay.url} target="_blank" rel="noreferrer">
              <h2>{essay.title}</h2>
            </a>
            <p>{essay.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Essay;

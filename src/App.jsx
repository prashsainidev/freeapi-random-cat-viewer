import { useState, useEffect } from 'react';

function App() {
  const [catView, setcatView] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCat = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random');
      const data = await response.json();
      setcatView(data.data);
    } catch (err) {
      setError('Something went wrong while fetching the cat!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Random Cat Viewer</h1>

      <div className="card">
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
            <p>Loading cute cat...</p>
          </div>
        ) : error ? (
          <div className="loader">
            <p>{error}</p>
            <button className="action-btn" onClick={fetchCat} style={{ marginTop: '20px' }}>
              Try Again
            </button>
          </div>
        ) : (
          catView && (
            <>
              <div className="image-container">
                <img className="cat-image" src={catView.image} alt={catView.name} />
              </div>

              <div className="cat-info">
                <h2>{catView.name}</h2>
                <div className="tags">
                  <span className="tag">📍 {catView.origin}</span>
                  <span className="tag">⏳ {catView.life_span} yrs</span>
                  <span className="tag">⚖️ {catView.weight?.metric} kg</span>
                </div>
                <p className="description">{catView.description}</p>

                <div className="cat-stats">
                  <div className="stat-row">
                    <span>Intelligence</span>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{ width: `${(catView.intelligence / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="stat-row">
                    <span>Energy Level</span>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{ width: `${(catView.energy_level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="stat-row">
                    <span>Affection</span>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{ width: `${(catView.affection_level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-actions">
                {catView.wikipedia_url && (
                  <a
                    href={catView.wikipedia_url}
                    target="_blank"
                    rel="noreferrer"
                    className="wiki-btn"
                  >
                    Wikipedia 📖
                  </a>
                )}
                <button className="action-btn" onClick={fetchCat} disabled={loading}>
                  Another Cat 🐾
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;

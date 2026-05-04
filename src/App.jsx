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

  const renderDots = (score) => {
    return (
      <div className="stat-dots">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className={`dot ${num <= score ? 'filled' : ''}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Feline Editorial</h1>

      <div className="card">
        {loading ? (
          <div className="loader-container">
            <div className="luxury-spinner"></div>
            <p style={{ color: '#c9a252', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Curating...</p>
          </div>
        ) : error ? (
          <div className="loader-container">
            <p style={{ color: '#c9a252' }}>{error}</p>
            <button className="btn btn-primary" onClick={fetchCat} style={{ marginTop: '20px' }}>
              Retry
            </button>
          </div>
        ) : (
          catView && (
            <>
              <div className="cat-header">
                <h2 className="cat-name">{catView.name}</h2>
                {catView.alt_names && <p className="cat-alt-names">{catView.alt_names}</p>}
              </div>

              <div className="image-container">
                <img className="cat-image" src={catView.image} alt={catView.name} />
              </div>

              <div className="special-traits">
                <span className={`special-trait ${catView.indoor ? 'active' : ''}`}>Indoor</span>
                <span className={`special-trait ${catView.lap ? 'active' : ''}`}>Lap Cat</span>
                <span className={`special-trait ${catView.rare ? 'active' : ''}`}>Rare</span>
                <span className={`special-trait ${catView.hypoallergenic ? 'active' : ''}`}>Hypoallergenic</span>
              </div>

              <div className="trait-badges">
                {catView.temperament?.split(', ').map((trait, index) => (
                  <span key={index} className="trait-badge">{trait}</span>
                ))}
              </div>

              <div className="description-box">
                <p className="description">{catView.description}</p>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Adaptability</span>
                  {renderDots(catView.adaptability)}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Affection Level</span>
                  {renderDots(catView.affection_level)}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Child Friendly</span>
                  {renderDots(catView.child_friendly)}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Dog Friendly</span>
                  {renderDots(catView.dog_friendly)}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Energy Level</span>
                  {renderDots(catView.energy_level)}
                </div>
                <div className="stat-item">
                  <span className="stat-label">Intelligence</span>
                  {renderDots(catView.intelligence)}
                </div>
              </div>

              <div className="actions">
                <button className="btn btn-primary" onClick={fetchCat} disabled={loading}>
                  Discover Another
                </button>
                {catView.wikipedia_url && (
                  <a href={catView.wikipedia_url} target="_blank" rel="noreferrer" className="btn">
                    Read Article
                  </a>
                )}
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;

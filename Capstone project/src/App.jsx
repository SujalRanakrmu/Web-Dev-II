// src/App.jsx
import './App.css'

const destinationData = [
  { id: 1, name: "Paris", icon: "🗼", rating: "4.8", reviews: "2,543", desc: "The City of Light awaits with iconic landmarks and world-class cuisine." },
  { id: 2, name: "Maldives", icon: "🏝️", rating: "4.9", reviews: "1,892", desc: "Crystal-clear waters and luxury resorts perfect for relaxation." },
  { id: 3, name: "Tokyo", icon: "🗻", rating: "4.7", reviews: "3,156", desc: "The perfect blend of ancient traditions and cutting-edge technology." },
  { id: 4, name: "Swiss Alps", icon: "🏔️", rating: "4.8", reviews: "1,234", desc: "Majestic mountains and picturesque villages for adventure seekers." },
  { id: 5, name: "Rome", icon: "🏛️", rating: "4.7", reviews: "2,876", desc: "Walk through history exploring ancient ruins and renaissance art." },
  { id: 6, name: "Bali", icon: "🌴", rating: "4.6", reviews: "4,521", desc: "Tropical paradise with stunning beaches and authentic culture." }
];

const featuresData = [
  { icon: "📍", title: "Smart Itineraries", desc: "AI-powered suggestions based on your travel style." },
  { icon: "💰", title: "Best Price", desc: "Compare flights and hotels to get the best deals." },
  { icon: "🗓️", title: "Easy Planning", desc: "All-in-one platform for your reservations." }
];

function App() {
  const handlePlanTrip = (name) => {
    alert(`Starting your trip plan for ${name}!`);
  };

  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <div className="logo">✈️ Wanderlust</div>
          <nav>
            <a href="#destinations">Destinations</a>
            <a href="#features">Features</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Plan unforgettable trips with personalized recommendations and seamless booking[cite: 1].</p>
        <div className="search-box">
          <input type="text" placeholder="Where do you want to go?" />
          <button>Explore</button>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-grid">
          {featuresData.map((f, i) => (
            <div key={i} className="feature-card">
              <div style={{fontSize: '3rem'}}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="destinations" id="destinations">
        <h2 style={{textAlign: 'center', fontSize: '2rem'}}>Popular Destinations</h2>
        <div className="destinations-grid">
          {destinationData.map((place) => (
            <div key={place.id} className="destination-card">
              <div className="destination-image">{place.icon}</div>
              <div className="destination-info">
                <h3>{place.name}</h3>
                <div style={{color: '#667eea', fontSize: '0.9rem', margin: '0.5rem 0'}}>
                  ⭐ {place.rating} ({place.reviews} reviews)
                </div>
                <p style={{color: '#888', fontSize: '0.9rem', marginBottom: '1rem'}}>
                  {place.desc}
                </p>
                <button 
                  className="destination-btn" 
                  style={{width: '100%'}}
                  onClick={() => handlePlanTrip(place.name)}
                >
                  Plan Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Travel?</h2>
        <p>Start planning your dream vacation today and get exclusive offers[cite: 1].</p>
        <button style={{background: 'white', color: '#667eea', marginTop: '1.5rem'}}>
          Start Planning Now →
        </button>
      </section>

      <footer>
        <p>&copy; 2024 Wanderlust. All rights reserved.[cite: 1]</p>
      </footer>
    </div>
  )
}

export default App;
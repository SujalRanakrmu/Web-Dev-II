const Hero = () => {
  return (
    <section className="hero">
      <h1>Discover Your Next Adventure</h1>
      <p>Plan unforgettable trips with personalized recommendations, real-time updates, and seamless booking</p>
      <div className="search-box">
        <input type="text" placeholder="Where do you want to go?" />
        <button>Explore</button>
      </div>
    </section>
  );
};

export default Hero;
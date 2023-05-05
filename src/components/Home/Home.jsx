import "./Home.css"


const Home = () => {
  return (
    <div>
      <section id="noticias" className="border-items">
      <div id="carouselExampleCaptions" className="carousel slide carouselslide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="/godofwar.jpg" className="d-block w-100" alt="noticia1" />
            <div className="carousel-caption d-none d-md-block">
              <h3>God of War: Ragnarok</h3>
              <p>Crítico fue blanco de amenazas y acoso por ponerle 6</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/callofduty.jpg" className="d-block w-100" alt="noticia2" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Call of Duty</h3>
              <p>Xbox ofreció mantener Call of Duty en PlayStation por 10 años</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/nintendonx.jpg" className="d-block w-100" alt="noticia3" />
              
            <div className="carousel-caption d-none d-md-block">
              <h3>Nintendo</h3>
              <p>Filtran supuesto logo y animacion de Nintendo NX, el prototipo de Switch</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
    </div>
  )
}

export default Home

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './style.css';

function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 h-100" src="/dist/assets/imagem/black-square.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="/dist/assets/imagem/red-square.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="/dist/assets/imagem/green-square.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <p className='texto-embarque'>Conheça o <span className='embarque'>Embarque Digital</span>,  colocar algum texto brabo sobre o programa (tô com preguiça de pensar, saca?).</p>        </div>
          <div class="col2">
            <img className="d-block w-100 h-100" src="/dist/assets/imagem/img-inicio.png" alt="First slide" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <p></p>

          </div>
          <div class="col">
            <p></p>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Home

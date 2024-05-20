import Nav from './components/Nav/index'
import Footer from './components/Footer/index'
import './style.css';
import Card from './components/Cards';

function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleIndicators" className="carousel slide w-100 mx-auto text-center" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: 'auto', maxHeight: '500px', marginBottom: '80px' }}>
          <div className="carousel-item active">
            <img className="d-block w-100 h-100" src="/src/public/imagem/black-square.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="/src/public/imagem/green-square.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src="/src/public/imagem/red-square.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>

      <div className='mt-5 p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p className='h2'>Explore o <span className=''>Embarque Digital</span> e descubra uma oportunidade única de avançar em sua carreira no mundo da tecnologia</p>
            </div>
            <div className="col-lg-6">
              <img className="d-block w-100 h-auto" src="/src/public/imagem/img-inicio.png" alt="First slide" />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 bg-light p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <img className="d-block w-100 h-auto" src="/src/public/imagem/astronaut.png" alt="First slide" />
            </div>

            <div className="col-lg-6">
              <h1 className='text-primary pt-5 pb-5'>+ Oportunidades</h1>
              <p className='text-break lead'>
                Mussum Ipsum, cacilds vidis litro abertis.  Casamentiss faiz malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Pra lá, depois divoltis porris, paradis. Paisis, filhis, espiritis santis.
              </p>
              <p className='text-break lead'>
                Casamentiss faiz malandris se pirulitá. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou preto inteiris, inteiris
              </p>
              <p className='text-break lead'>
                Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Quem num gosta di mim que vai caçá sua turmis!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 ml-5 p-5'>
        <div className="">
          <div className="row justify-content-start">
            <div className="col-lg-6">
              <h2 className='text-left'>Veja o relato de alguns dos estudantes empregados</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <Card />
      </div>




      <Footer />
    </>
  );
}

export default Home;

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>      
      <nav className='nav-login'>
        <Link to="/login">
          Entrar
        </Link>
      </nav>
      
      <Footer />

    </>
  );
}

export default Home

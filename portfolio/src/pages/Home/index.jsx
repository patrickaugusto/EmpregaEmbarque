import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Nav />
      <h1>PAgina de Home</h1>
      <Link to="/login">
        Clique aqui para fazer login
      </Link>
      <Footer />

    </>
  );
}

export default Home

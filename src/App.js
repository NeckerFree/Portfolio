import { Container } from 'react-bootstrap';
import './App.css';
import OffcanvasNav from './components/navbar/OffcanvasNav';

const App = () => (
  <Container>
    <OffcanvasNav />
    <div className="p-5 text-center bg-image rounded-3 jumbotron">
      <div className="mask fondo">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Elio Cortés</h1>
            <h4 className="mb-3">Full-Stack Developer</h4>
            <p className="regard">
              Hi, I am glad you are visiting my portfolio!
              I am Elio Cortés — a Bogotá based full-stack engineer.
              Let me show you my profile.
            </p>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default App;

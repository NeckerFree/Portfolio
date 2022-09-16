import { Container, Row, Col } from 'react-bootstrap';
import './assets/style/App.css';
import OffcanvasNav from './components/navbar/OffcanvasNav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';

const App = () => (
  <Container className="flex-column text-center min-vh-100" fluid>
    <Row><Col><OffcanvasNav /></Col></Row>
    <Row><Col><Jumbotron /></Col></Row>
    <Row><Col><About /></Col></Row>
  </Container>
);
export default App;

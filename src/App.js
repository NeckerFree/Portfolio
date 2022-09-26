import { Container, Row, Col } from 'react-bootstrap';
import './assets/style/App.css';
import OffcanvasNav from './components/navbar/OffcanvasNav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

const App = () => (
  <div>
    <OffcanvasNav />
    <Container className="flex-column text-center" fluid>
      <Row><Col><Jumbotron /></Col></Row>
      <Row><Col><About /></Col></Row>
      <Row><Col><Education /></Col></Row>
      <Row><Col><Skills /></Col></Row>
      <Row><Col><Experiences /></Col></Row>
    </Container>
  </div>

);
export default App;

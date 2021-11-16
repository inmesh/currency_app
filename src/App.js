import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrItemsMaster from './components/CurrItemsMaster'
import ChartMaster from './components/ChartMaster'
import ExchangeMaster from './components/ExchangeMaster'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import navbar_icon from './icons/navbar_icon.png'

function App() {
  return (
    <Router>
      <div>

        <Navbar className="costumeNav" variant="light">
          <Container>
              <Nav className="me-auto">
              <img
                alt=""
                src={navbar_icon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
                <Nav.Link as={Link} to="/converter">Converter</Nav.Link>
                <Nav.Link as={Link} to="/chart">Charts</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/converter" element={<ExchangeMaster />} />
          <Route path="/chart" element={<ChartMaster />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Navigate to ="/chart" />}/>
        </Routes>
        {/* <Navigate from="/" to="/chart" /> */}

        <CurrItemsMaster from="USD" />
      </div>
    </Router>
  )       
}

export default App;

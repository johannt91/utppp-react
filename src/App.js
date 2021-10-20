import './App.css';
import './components/Navbar/Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Degrees from "./pages/Degrees"
import People from './pages/People';
import Media from './pages/Media';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/people" component={People} />
            <Route path="/degrees" component={Degrees} />
          </Switch>
        </header>
      </div>
      <Footer/>
    </Router>
  
  
    </>
  );
}

export default App;

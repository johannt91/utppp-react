import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Programs from "./pages/Programs"
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
            <Route path="/" exact component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/people" component={People} />
            <Route path="/programs" component={Programs} />
          </Switch>
        </header>
      </div>
    </Router>
  
    <Footer/>
    </>
  );
}

export default App;

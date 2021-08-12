import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Programs from "./pages/Programs"
import People from './pages/People';
import Media from './pages/Media';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/people" component={People} />
            <Route path="/programs" component={Programs} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

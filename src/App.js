import './App.css';
import Home from './Home';
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Work from './Work';
import SocialMedia from './SocialMedia'
import SideMenu from './SideMenu'
import { AnimatedSwitch } from 'react-router-transition';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app__nav">
          <div className="app__nav__image">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {/* <img src={logo} alt="Uwumuhire Rene_Logo" /> */}
              <h1>Rene<b style={{ color: 'red' }}>.</b></h1>
            </Link>
          </div>
          <SideMenu className="app__sidebar" />
        </nav>
        <div className="app__router">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/" component={Home} />
          </Switch>

          <SocialMedia />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

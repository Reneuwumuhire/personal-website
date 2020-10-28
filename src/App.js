import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Work from './Work';
import SocialMedia from './SocialMedia'
import SideMenu from './SideMenu'

function App() {
  return (

    <div className="app">

      <Router>
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
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>


      </Router>
      <SocialMedia />

    </div>


  );
}

export default App;

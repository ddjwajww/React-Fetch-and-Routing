import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FetchedUsers from "./components/FetchedUsers";
import "./App.css"
import Error404 from "./components/Error404";



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/about" component={About}/>              
        
            <Route path="/users">
              <FetchedUsers />
            </Route>

            <Route path="*" component={Error404}/>              

          </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch, useLocation, RouteComponentProps, useRouteMatch, NavLink } from 'react-router-dom';
import { Button } from 'antd';

interface AppProps {}

const About = () => {
  return <h2>About</h2>
}

const Home = () => {
  return <h2>Home</h2>
}

const Users = () => {
  return <h2>Users</h2>
}

const NoMatch = () => {
  const location = useLocation()
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}


const HogeButton = (props: RouteComponentProps<any>) => {
  console.log(props)
  return <Button type="ghost" {...props}  / >
}

function App({}: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">
                  <Button type="primary">ho</Button>
                </Link>
                <Button type="primary">
                  <Link to="/home">Home True</Link>
                </Button>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <NavLink to={{ pathname: '/nav', state: { hoge: true } }} component={HogeButton} activeClassName="disabled">Hoge</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

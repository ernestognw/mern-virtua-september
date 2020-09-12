import React, { useState } from 'react';
import Navbar from './components/navbar';
import QuestionsList from './components/questions-list';
import { Container } from 'react-bootstrap';
import Login from './views/login';
import Signup from './views/signup';
import Question from './views/question';
import Questions from './views/questions';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Functional Component
const App = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('token'));

  return (
    <BrowserRouter>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Container>
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route exact path="/question">
            <Question />
          </Route>
          <Route exact path="/login">
            <Login setIsLogged={setIsLogged} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Redirect to="/questions" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

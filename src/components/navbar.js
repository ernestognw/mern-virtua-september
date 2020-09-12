import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ isLogged, setIsLogged }) => {
  const logout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/questions">
          <Nav.Link as="div">Questions</Nav.Link>
        </Link>
      </Nav>
      {isLogged ? (
        <Button onClick={logout} variant="outline-info">
          Salir
        </Button>
      ) : (
        <Link to="/login">
          <Button variant="outline-info">Login</Button>
        </Link>
      )}
    </Navbar>
  );
};

export default CustomNavbar;

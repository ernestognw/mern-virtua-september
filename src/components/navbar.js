import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
  background: red;
  text-transform: uppercase;

  &:hover {
    background: blue;
  }
`;

const CustomNavbar = ({ isLogged, setIsLogged }) => {
  const logout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
  };

  return (
    <Navbar style={{}} bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/questions">
          <Nav.Link as="div">Questions</Nav.Link>
        </Link>
      </Nav>
      {isLogged ? (
        <StyledButton onClick={logout} variant="outline-info">
          Salir
        </StyledButton>
      ) : (
        <Link to="/login">
          <StyledButton variant="outline-info">Login</StyledButton>
        </Link>
      )}
    </Navbar>
  );
};

export default CustomNavbar;

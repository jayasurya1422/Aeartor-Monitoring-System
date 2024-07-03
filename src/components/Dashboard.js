import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  background-color: #ffffff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333333;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;

  &:hover {
    color: #000000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: 500;
  font-size:25px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0;
    color: #000000;
  }

  &.active {
    background-color: #e0e0e0;
    color: #000000;
  }
`;

const PondsContainer = styled.div`
  margin-top: 20px;
`;

const PondList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PondItem = styled.li`
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PondLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Dashboard = () => {
  const [ponds, setPonds] = useState([]);
  const pondsRef = useRef(null);

  useEffect(() => {
    // Fetch ponds data from your API
    fetch('https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e')
      .then((response) => response.json())
      .then((data) => setPonds(data.ponds))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleScrollToPonds = () => {
    if (pondsRef.current) {
      pondsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DashboardContainer>
      <Navbar>
        <Brand to="/">Aerator Monitoring System</Brand>
        <NavLinks>
          <NavLink to="/dissolvedoxygen">Dissolved Oxygen</NavLink>
          <NavLink onClick={handleScrollToPonds}>Ponds</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </Navbar>

      <PondsContainer ref={pondsRef}>
        <h2 className='text-3xl'>Available Ponds</h2>
        <PondList>
          {ponds.map((pond) => (
            <PondItem key={pond.id}>
              <PondLink to={`/ponds/${pond.id}`}>{pond.name}</PondLink>
            </PondItem>
          ))}
        </PondList>
      </PondsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

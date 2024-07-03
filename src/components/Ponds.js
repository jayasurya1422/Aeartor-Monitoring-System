import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PondsContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
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

const Ponds = () => {
  const [ponds, setPonds] = useState([]);

  useEffect(() => {
    // Fetch ponds data from your API
    fetch('https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e')
      .then((response) => response.json())
      .then((data) => setPonds(data.ponds))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <PondsContainer>
      <h2>Available Ponds</h2>
      <PondList>
        {ponds.map((pond) => (
          <PondItem key={pond.id}>
            <PondLink to={`/ponds/${pond.id}`}>{pond.name}</PondLink>
          </PondItem>
        ))}
      </PondList>
    </PondsContainer>
  );
};

export default Ponds;

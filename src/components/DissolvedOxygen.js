import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const DissolvedOxygenContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const BackButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bbb;
  }
`;

const DissolvedOxygen = () => {
  const { pondId } = useParams();
  const [dissolvedOxygen, setDissolvedOxygen] = useState(null);

  useEffect(() => {
    // Fetch dissolved oxygen data for the pond using pondId
    fetch(`https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data: ", data); // Add this line to log fetched data
        const doData = data.dissolvedOxygen[pondId];
        console.log("DO Data: ", doData); // Add this line to log the specific DO data
        setDissolvedOxygen(doData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [pondId]);

  const getPieData = (doLevel) => {
    return {
      labels: ['Dissolved Oxygen Level'],
      datasets: [
        {
          data: [doLevel, 100 - doLevel],
          backgroundColor: ['#36A2EB', '#FFCE56'],
        },
      ],
    };
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    circumference: 180,
    rotation: -90,
  };

  return (
    <DissolvedOxygenContainer>
      <Heading>Dissolved Oxygen for Pond {pondId}</Heading>
      {dissolvedOxygen !== null ? (
        <div>
          <p>Dissolved Oxygen Level: {dissolvedOxygen} mg/L</p>
          <Pie data={getPieData(dissolvedOxygen)} options={pieOptions} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <BackButton to={`/ponds/${pondId}`}>Back to Pond</BackButton>
    </DissolvedOxygenContainer>
  );
};

export default DissolvedOxygen;

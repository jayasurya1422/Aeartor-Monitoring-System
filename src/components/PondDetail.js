import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PondDetailContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const PondName = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const AeratorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const AeratorCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PieChartContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const DOButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #36A2EB;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #258cd1;
  }
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #bbb;
  }
`;

const PondDetail = () => {
  const { pondId } = useParams();
  const navigate = useNavigate();
  const [pond, setPond] = useState(null);

  useEffect(() => {
    // Fetch pond details and dissolved oxygen from your API using pondId
    fetch(`https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data: ", data); // Add this line to log fetched data
        const foundPond = data.ponds.find((p) => p.id === parseInt(pondId));
        console.log("Found Pond: ", foundPond); // Add this line to log the specific pond data
        setPond(foundPond);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [pondId]);

  const getPieData = (current) => {
    const levels = {
      low: 0,
      medium: 0,
      high: 0,
    };

    if (current < 10) levels.low = current;
    else if (current < 20) levels.medium = current;
    else levels.high = current;

    return {
      labels: ['Low', 'Medium', 'High'],
      datasets: [
        {
          data: [levels.low, levels.medium, levels.high],
          backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        },
      ],
    };
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <PondDetailContainer>
      {pond ? (
        <>
          <PondName>{pond.name}</PondName>
          <h3 className='text-2xl'>Aerators</h3>
          <br />
          <AeratorList>
            {pond.aerators && pond.aerators.length > 0 ? (
              pond.aerators.map((aerator) => (
                <AeratorCard key={aerator.id}>
                  <h4>Aerator {aerator.id}</h4>
                  <PieChartContainer>
                    <Pie data={getPieData(aerator.current)} options={pieOptions} />
                  </PieChartContainer>
                  <p>Current: {aerator.current}A</p>
                </AeratorCard>
              ))
            ) : (
              <p>No aerators found for this pond.</p>
            )}
          </AeratorList>
          <DOButton to={`/dissolvedoxygen/${pondId}`}>View Dissolved Oxygen</DOButton>
          <BackButton onClick={() => navigate('/dashboard')}>Return to Dashboard</BackButton>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </PondDetailContainer>
  );
};

export default PondDetail;

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const OxygenContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PieChartContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const CustomPie = styled(Pie)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.color};
`;

const DissolvedOxygen = () => {
  const [ponds, setPonds] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Replace with your actual Mocky API call
    fetch('https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e')
      .then((response) => response.json())
      .then((data) => setPonds(data.ponds))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const getPieData = (percentage) => ({
    labels: ['Available', 'Unavailable'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [percentage < 30 ? '#FF6347' : '#36A2EB', '#F5F5F5'],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <OxygenContainer>
      <Heading>Dissolved Oxygen Levels</Heading>
      <CardContainer>
        {ponds.map((pond) => (
          <Card key={pond.id}>
            <h3>{pond.name}</h3>
            <PieChartContainer>
              <CustomPie data={getPieData(pond.dissolvedOxygen)} />
              <PercentageText color={pond.dissolvedOxygen < 30 ? 'red' : 'blue'}>
                {pond.dissolvedOxygen}%
                {pond.dissolvedOxygen < 30 && <span style={{ color: 'black' }}> Oxygen is low</span>}
              </PercentageText>
            </PieChartContainer>
          </Card>
        ))}
      </CardContainer>
    </OxygenContainer>
  );
};

export default DissolvedOxygen;
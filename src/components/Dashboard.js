import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Navbar = styled.nav`
  padding: 10px 20px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  text-decoration: none;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  margin: 0;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow multiple rows of cards */
  gap: 20px; /* Space between cards */
  justify-content: center; /* Center align cards horizontally */
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  flex: 0 0 auto;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  ${(props) =>
    !props.isSelected &&
    `
    opacity: 0.7; /* Dim cards that are not selected */
    height: 100px; /* Adjusted height for collapsed state */
    overflow: hidden; /* Hide overflow content */
  `}

  ${(props) =>
    props.isSelected &&
    `
    height: auto; /* Allow card to expand to fit content */
  `}
`;

const PieChartContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const Dashboard = () => {
  const [ponds, setPonds] = useState([]);
  const [selectedPondId, setSelectedPondId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Replace with your actual API call to fetch pond data
    fetch('https://run.mocky.io/v3/0805682e-dfe0-42cd-9bac-9aa8f6581a9e')
      .then((response) => response.json())
      .then((data) => setPonds(data.ponds))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handlePondClick = (pondId) => {
    setSelectedPondId((prevId) => (prevId === pondId ? null : pondId));
  };

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
    <DashboardContainer>
      <Navbar>
        <Brand href="https://aeratormonitoringsystem.com/">
          <span className="text-2xl font-semibold whitespace-nowrap">Aerator Monitoring System</span>
        </Brand>
        <div>
          <NavLink href="#">Aerators</NavLink>
          <NavLink href="./DissolvedOxygen">Dissolved Oxygen</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>
      </Navbar>
      <br />
      <CardContainer>
        {ponds.map((pond) => (
          <Card key={pond.id} isSelected={selectedPondId === pond.id} onClick={() => handlePondClick(pond.id)}>
            <h3>{pond.name}</h3>
            {selectedPondId === pond.id && (
              <>
                <h4>Aerators</h4>
                {pond.aerators.map((aerator) => (
                  <div key={aerator.id}>
                    <h5>Aerator {aerator.id}</h5>
                    <PieChartContainer>
                      <Pie data={getPieData(aerator.current)} options={pieOptions} />
                    </PieChartContainer>
                    <p>Current: {aerator.current}A</p>
                  </div>
                ))}
              </>
            )}
          </Card>
        ))}
      </CardContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

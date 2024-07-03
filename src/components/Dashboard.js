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
  font-size: 25px;
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

const Content = styled.div`
  margin-top: 20px;
`;

const Dashboard = () => {

  return (
    <DashboardContainer>
      <Navbar>
        <Brand to="/">Aerator Monitoring System</Brand>
        <NavLinks>
          <NavLink to="/ponds">Ponds</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </Navbar>

      <Content>
        <h2>Welcome to the Aerator Management System</h2>
        <p>This system allows you to manage and monitor aerators in various ponds efficiently.</p>
        <p>You can view the status of aerators, monitor dissolved oxygen levels, and add new ponds and aerators.</p>
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;

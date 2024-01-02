// Card.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  .container {
    margin: 16px;
    padding: 16px;
    background-color: #f0f0f0;
  }
  .styleCard {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; /* Remove default link styling */
    color: inherit; /* Inherit color from parent */
  }
  .content {
    padding: 16px;
  }
`;

const Card = ({ to, children }) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={to} className="styleCard">
          <div className="content">{children}</div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Card;

// HomeState.js
import React from 'react';
import Card from '../Cards/Card';

const HomeState = () => {
  return (
    <div>

      <Card to="/States">Input Output using UseStates</Card>
      <Card to="/States1">Onlick event with UseState</Card>
      <Card to="/ChatApp">ChatApp</Card>
      <Card to="/CrudOp">CrudOperation</Card>
      <Card to="/ChangePosition">Animation</Card>

    </div>
  );
};

export default HomeState;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ScoreApp = () => {
  return (
    <div className='score-app'>
      <h1>SCORE APP COMING SOON</h1>
      <Link className='back' to='/'>
        Regresa
      </Link>
    </div>
  );
};

export default connect(null, null)(ScoreApp);

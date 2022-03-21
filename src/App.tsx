import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './routes/Landing';
import NotFound from './routes/NotFound';

import './App.scss';

const App: React.FC = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route element={ <NotFound/> } />
      </Routes>
    </Fragment>
  );
};

export default App;
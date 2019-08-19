import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from '../containers/HomePage';

export default () => (
  <React.Fragment>
    <Helmet>
      <title>luigi benvenuti - frontend developer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <HomePage />
  </React.Fragment>
);

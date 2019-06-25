import React, { useEffect } from 'react';
import Page from '../layouts/main.layout';

const Index = props => {
  useEffect(() => {
    console.log('mounted');
  });

  return (
    <Page>
      <h2>{props.title}</h2>
    </Page>
  );
};

Index.getInitialProps = async function() {
  console.log('Props');

  return {
    title: 'Home Page'
  };
};

export default Index;

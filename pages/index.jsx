import React, { useEffect } from 'react';

const Index = props => {
  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};

Index.getInitialProps = async function() {
  return {
    title: 'Home Page'
  };
};

export default Index;

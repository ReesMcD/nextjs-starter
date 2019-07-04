import React, { useEffect } from 'react';

const User = props => {
  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <h2>User: {props.title}</h2>
    </div>
  );
};

User.getInitialProps = async function(context) {
  const { id } = context.query;
  return {
    title: id
  };
};

export default User;

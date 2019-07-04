import React, { useEffect } from 'react';

const Posts = props => {
  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <h2>Posts {props.title}</h2>
    </div>
  );
};

Posts.getInitialProps = async function(context) {
  const { id } = context.query;
  return {
    title: id
  };
};

export default Posts;
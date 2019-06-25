import React, { useEffect } from 'react'
import Page from '../layouts/main.layout';

const Posts = props => {

    useEffect(() => {
        console.log('mounted')
      });

    return (
        <Page>
            <h2>{props.title}</h2>
        </Page>
    )
};

Posts.getInitialProps = async function() {
    console.log('Props');
  
    return {
      title: 'Posts Page',
    };
  };

export default Posts;
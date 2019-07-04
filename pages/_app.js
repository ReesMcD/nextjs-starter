import React from 'react';
import App, { Container } from 'next/app';
import Base from '../layouts/base.layout';

import '../styles/index.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Base>
          <Component {...pageProps} />
        </Base>
      </Container>
    );
  }
}

export default MyApp;

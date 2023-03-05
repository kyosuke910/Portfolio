import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../src/theme'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
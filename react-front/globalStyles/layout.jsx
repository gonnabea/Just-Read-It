import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import ReactDOMServer from 'react-dom/server';

export class BaseLayout extends React.Component {
  getBodyElements() {
    const { children } = this.props;

    return <div>{children}</div>;
  }

  prerenderStyles = () => {
    const sheet = new ServerStyleSheet();
    ReactDOMServer.renderToString(sheet.collectStyles(this.getBodyElements()));
    return sheet.getStyleElement();
  }

  render() {
    const { bodyClass } = this.props;

    return (
      <html lang='en'>
        <head>
    <title>{this.props.pageTitle}Just Read It</title>
          {this.prerenderStyles()}</head>

        <body className={bodyClass}>{this.getBodyElements()}</body>
      </html>
    );
  }
}
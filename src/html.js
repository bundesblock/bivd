import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
      <head>

        {/* IE10 or below check: if so, redirect */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          // Credits go to: http://www.javascriptkit.com/javatutors/navigator.shtml

          if (navigator.userAgent.indexOf('MSIE') != -1)
            var detectIEregexp = /MSIE (\\d+\\.\\d+);/ //test for MSIE x.x
          else // if no "MSIE" string in userAgent
            var detectIEregexp = /Trident.*rv[ :]*(\\d+\\.\\d+)/ //test for rv:x.x or rv x.x where Trident string exists

          if (detectIEregexp.test(navigator.userAgent)) { //if some form of IE
            var ieversion = new Number(RegExp.$1) // capture x.x portion and store as a number
            if (ieversion <= 10) {
              window.location.href = "/no-ie10-or-below.html";
            }
          }
        `,
          }}
        />

        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        {this.props.headComponents}
      </head>
      <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
      {this.props.postBodyComponents}
      </body>
      </html>
  )
  }
  }

  HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
  }

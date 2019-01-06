import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import siteConfig from '../../data/siteConfig'

import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'

const ChildrenWrapper = styled.div`
margin-top: 80px;
@media(min-width: 501px) and (max-width: 992px){
  margin-top: 140px;
}
`

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <Header headerLinks={siteConfig.headerLinks} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <Footer siteConfig={siteConfig} />
      </Fragment>
    )
  }
}

export default Template

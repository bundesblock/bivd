import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import bivdLogo from '../assets/bivd-logo.png'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1260px;
  z-index: 1000;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 18px;
  
  height: 80px;
  @media(max-width: 992px){
    height: 140px;
  }
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: black;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const Label = styled.span`
  font-weight: bold;
`

const SubLabel = styled.span`
  color: rgb(105, 108, 111);
  font-size: 12px;
  font-weight: bold;
`

const LogoWrapper = styled.div`
  flex-grow: 1;
  @media(max-width: 992px){
    width: 100%;
    text-align: center;
    padding-bottom: 18px;
  }
`

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <HeaderWrapper>
        <HeaderNav>
          <LogoWrapper><a href="/#top"><img src={bivdLogo} style={{ width: '162px', height: '44px' }} /></a></LogoWrapper>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
              <Label className="clearfix">{headerLink.label}</Label>
              <SubLabel>{headerLink.subLabel}</SubLabel>
            </HeaderLink>
          ))}
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header

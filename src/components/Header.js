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
  @media(min-width: 501px) and (max-width: 992px){             
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
  ${props => props.hideOnSmallScreens &&  
    `@media(max-width: 500px){
      display: none;
    }`
  }
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
  @media(max-width: 500px){
    text-align: left;
    width: auto;
  }
`

const Hamburger = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media(max-width: 500px){
    display: block;
  }
  :hover {
    color: #0056b3;
  }
`

const Sidenav = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${props => props.sidebarOpen ? '120px;' : '0;'}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 80px; /* Stay at the top */
  left: 0;
  background-color: #eef4f9;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  
  a {
    margin-bottom: 20px;
  }
`

class Header extends React.Component {

  state = {
    sidebarOpen: false,
  };

  closeSidebar(){
    this.setState({
      sidebarOpen: false,
    });
  }

  toggleSidebar(){
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  }

  render() {
    const { headerLinks } = this.props
    const { sidebarOpen } = this.state;

    return (
      <>
        <Sidenav sidebarOpen={sidebarOpen}>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.url} key={`header-link-${i}`} onClick={() => this.closeSidebar()}>
              <Label className="clearfix">{headerLink.label}</Label>
              <SubLabel>{headerLink.subLabel}</SubLabel>
            </HeaderLink>
          ))}
        </Sidenav>
        <HeaderWrapper>
          <HeaderNav>
            <LogoWrapper><a href="/#top"><img src={bivdLogo} style={{ width: '162px', height: '44px' }} /></a></LogoWrapper>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} hideOnSmallScreens={true} key={`header-link-${i}`}>
                <Label className="clearfix">{headerLink.label}</Label>
                <SubLabel>{headerLink.subLabel}</SubLabel>
              </HeaderLink>
            ))}
            <Hamburger onClick={() => this.toggleSidebar()}>☰</Hamburger>
          </HeaderNav>
        </HeaderWrapper>
      </>
    )
  }
}

export default Header

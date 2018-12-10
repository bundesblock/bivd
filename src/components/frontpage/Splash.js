import React, { Component } from 'react';
import styled from 'styled-components';
import particlesConfig from './particles-config';
import classnames from 'classnames';

class Splash extends Component {
  componentDidMount(){
    window && window.particlesJS('particles-container', particlesConfig);
  }
  render (){
    return (
      <div className={classnames(this.props.className, 'jumbotron jumbotron-fluid p-0 m-0')}>
        <div className="container-fluid p-0 text-center" id="particles-container" style={{ height: "50vw", position: "relative" }}>
          <table style={{ position: 'absolute', width: '100%' }}>
            <tbody>
            <tr>
              <td className="text-center">
                <h1><strong>BLOCKCHAIN</strong> IN DER VERWALTUNG DEUTSCHLAND</h1>
                <p style={{ fontWeight: "300" }}>Eine Initiative von Bund, Ländern und Unternehmen zur Entwicklung essentieller Basisinfrastruktur in Deutschland, für eine moderne und rechtssichere Verwaltung.</p>
                <a className="btn btn-lg btn-light mr-3" style={{ color: 'black' }} href="/blockchain-in-der-verwaltung-deutschland">Mehr erfahren</a>
                <a className="btn btn-lg btn-danger" href="/#partners">Unsere Partner</a>
              </td>
            </tr></tbody>
          </table>

        </div>
      </div>
    )
  }
}
const SplashStyled = styled(Splash)`
@media(max-width: 800px){
  h1 {
    font-size: 25px;
  }
}
& {
  background: radial-gradient(circle, rgba(34,43,89,1) 0%, rgba(0,179,255,1) 100%);
  max-height: 50vw;
  color: white;
}
& table {
  height: 100%; 
}
`;

export default SplashStyled;


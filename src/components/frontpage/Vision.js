import React from 'react'
import styled from 'styled-components'
import OffsetAnchor from '../../components/OffsetAnchor'
import Wrapper from '../../components/Wrapper'
import architektur2 from '../../assets/architektur2.png'

const StyleWrapper = styled.div`

color: rgb(102, 102, 102);
background-color: #eef4f9;

h6 {
  margin: 0;
}

li {
  margin: 10px 0;
}

small {
  color: #989797;
}

.principles-box {
  margin: 20px 0;
  color: black;
}

.principles-box ul {
  margin-top: 20px;
}

.principles-box li {
  font-size: 16px;
  font-weight: bold;
}

`

const Vision = () => {
  return (
    <StyleWrapper>
      <Wrapper>
        <OffsetAnchor name="vision" />
        <div className="row">
          <div className="col-sm-8">
            <h2>Eine Blockchain Basisinfrastruktur für Deutschland</h2>
            <p>Der BiVD möchte gemeinsam mit Partnern aus Behörden von Bund und Ländern, Partnern aus der Industrie, Startups und Institutionen und
              Initiativen in ganz Europa eine belastbare, rechtssichere und zukunftsorientierte Infrastruktur für digitale Verwaltungsdienste
              entwickeln.</p>
            <img src={architektur2} className="w-100 mt-4"/>
          </div>
          <div className="col-sm-4 mt-5 mt-sm-0">
            <h5>Roadmap</h5>
            <ul>
              <li>
                <h6>Kickoff</h6>
                <small>Offizielle Gründung der Initiative im Mai 2018</small>
              </li>
              <li>
                <h6>Konzept- und Planungsphase</h6>
                <small>Gremienarbeit, technische Planung, Machbarkeitsstudien, Positionspapier</small>
              </li>
              <li>
                <h6>Umsetzungsphase</h6>
                <small>Entwicklung einer Basisinfrastruktur unter Berücksichtigung aller Aspekte
                </small>
              </li>
              <li>
                <h6>Pilotprojekte</h6>
                <small>Umsetzung wirkungsvoller Pilotprojekte in der Implementierungsphase.</small>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-center my-5">Wir entwickeln Antworten auf diese Fragen:</h3>
        <div className="row">
          <div className="col-xs-12 col-sm-6 principles-box">
            <h5>Once Only Prinzip</h5>
            <ul>
              <li>Was ist das Once Only Prinzip?</li>
              <li>Welche Rolle kann Blockchain dabei spielen?</li>
              <li>Pilotprojekte und Beispiele</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 principles-box">
            <h5>Privacy By Design</h5>
            <ul>
              <li>Worum geht es bei Privacy by Design?</li>
              <li>Wie ist das Verhältnis von DSGVO und Blockchain?</li>
              <li>Weitere Fragen rund um die DSGVO</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 principles-box">
            <h5>Selbstsouveräne Identitäten</h5>
            <ul>
              <li>Was ist eine selbstsouveräne Identität?</li>
              <li>Wie schafft Blockchain Vertrauen?</li>
              <li>Welche Rolle spielt der Staat?</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 principles-box">
            <h5>Gemeinsame Standards</h5>
            <ul>
              <li>Welche Protokolle nutzt die Verwaltungsblockchain?</li>
              <li>Sollten auch neue Standards entwickelt werden?</li>
              <li>Welche Bedeutung haben offene Standards?</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </StyleWrapper>
  )
}

export default Vision

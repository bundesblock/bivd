import React from 'react'
import styled from 'styled-components'
import buerokratie from '../../assets/buerokratie.png'
import Wrapper from '../../components/Wrapper'

const StyleWrapper = styled.div`

.inner-wrapper {
  background-color: rgba(33, 150, 243, 0.9);
}
.parallax-area {
  background-image: url(${buerokratie});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
}

p {
  font-size: 15px;
}

.single-article {
  min-height: 100px;
}

.article-icon {
  background: #ffffff none repeat scroll 0 0;
  line-height: 23px;
  text-align: center;
  vertical-align: middle;
  width: auto;
  font-size: 19px;
  color: #2196F3;
  padding: 10px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: inline-block;
}
.article-icon-wrapper {
  text-align: right;
}
`


const Topic = ({ icon, title, subtitle }) => (
  <div className="col-12 col-sm-6 col-md-4">
    <div className="single-article">
      <div className="row">
        <div className="col-3 article-icon-wrapper">
          <div className="article-icon">
            <span className={`fa fa-${icon}`}></span>
          </div>
        </div>
        <div className="col-9">
          <h6>{title}</h6>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
)

const Topics = () => {
  return (
    <StyleWrapper>
      <div className="parallax-area themeix-ptb">
        <div className="inner-wrapper">
          <Wrapper>
            <div className="themeix-section-title text-center">
              <h2>Vision und Werte</h2>
              <p>Wir wollen an der konkreten Umsetzung arbeiten, um die Blockchain-Technologie (Distributed Ledger Technology) in der Verwaltung
                voranzubringen.</p>
            </div>
            <div className="row">
              <Topic
                icon="gears"
                title="Dezentrale Architektur"
                subtitle="Für eine partizipative und widerstandsfähige Infrastruktur."
              />
              <Topic
                icon="group"
                title="Gemeinsame Standards"
                subtitle="Für mehr Effizienz in der Verwaltung in Deutschland und Europa."
              />
              <Topic
                icon="unlock"
                title="Offene Schnittstellen"
                subtitle="Für ein dynamisches, innovativoffenes Miteinander."
              />
              <Topic
                icon="file-code-o"
                title="Open Source Software"
                subtitle="Für höchstmögliche Sicherheit und Transparenz."
              />

              <Topic
                icon="key"
                title="Privacy By Design"
                subtitle="Datensparsamkeit und Datenhoheit der Bürger sind hohe Güter."
              />
              <Topic
                icon="smile-o"
                title="Once Only Prinzip"
                subtitle="Once-Only wird mit Blockchain zum Normalfall."
              />
            </div>
          </Wrapper>
        </div>
      </div>
    </StyleWrapper>
  )
}

export default Topics

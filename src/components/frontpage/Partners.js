import React from 'react'
import styled from 'styled-components'
import OffsetAnchor from '../../components/OffsetAnchor'
import Wrapper from '../../components/Wrapper'
import nrwBanner from '../../assets/nrw-banner.png'
import bamfBanner from '../../assets/bamf-banner.png'
import nextBanner from '../../assets/next-banner.png'
import bbvbBanner from '../../assets/bbvb-banner.png'
import vitakoBanner from '../../assets/vitako-banner.png'
import ltcBanner from '../../assets/ltc-banner.png'

const StyleWrapper = styled.div`

& {
  margin-bottom: 40px;
}

h2 {
  margin: 30px 0;
}

p {
  font-weight: bold;
}

color: black;


.single-box {
  background-color: #eef4f9;
  min-height: 420px;
  display: table;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  transition:all .4s linear 0s;
    padding: 1em;
}
.single-box h3 {
    font-size: 24px;
    font-weight: 500;
}
.single-box p {
    font-size: 16px;
}
.box-inner .themeix-btn {
    margin-top: 15px;
}

.single-box .box-inner {
    display: table-cell;
    height: 100%;
    padding: 1em 1em;
    vertical-align: middle;
    width: 100%;
}
.single-box .box-inner img {
    padding-bottom: 30px;
}
.single-box:hover {
  background-color:#CBDEE2;
  transition:all .2s linear 0s;
}

.btn-lg {
  font-size: 16px;
}

`

const Partner = ({ img, title, description, url }) => (
  <div className="col-12 col-sm-6 col-lg-4 mt-3">
    <div className="single-box">
      <div className="box-inner">
        <img src={img} className="w-75"/>
        <p>{description}</p>
        <a href={url} target="_blank" className="btn btn-danger">Nachlesen</a>
      </div>
    </div>
  </div>
)

const Partners = () => {
  return (
    <StyleWrapper>
      <Wrapper>
        <OffsetAnchor name="partners" />
        <div className="text-center">
          <h2>Unsere Partner</h2>
          <p>Wir arbeiten gemeinsam mit Partnern aus Behörden von Bund und Ländern, Industrie und Startups sowie Institutionen und Initiativen in ganz
            Europa.</p>
        </div>
      </Wrapper>

      <div className="row px-5" style={{ margin: 0 }}>
        <Partner
          img={nrwBanner}
          title="WIRTSCHAFT.NRW"
          description="Das Ministerium für Wirtschaft, Innovation, Digitalisierung und Energie (kurz MWIDE) ist eine oberste Landesbehörde des Bundeslandes Nordrhein-Westfalen."
          url="https://www.wirtschaft.nrw/"
        />
        <Partner
          img={bamfBanner}
          title="BAMF"
          description="Das Bundesamt für Migration und Flüchtlinge (BAMF) ist eine deutsche Bundesoberbehörde im Geschäftsbereich des Bundesministeriums des Innern (BMI)."
          url="http://www.bamf.de/DE/Startseite/startseite-node.html"
        />
        <Partner
          img={nextBanner}
          title="NExT"
          description="Ziel des Netzwerkes ist die Entwicklung und den Transfer innovativer Digitalisierungsvorhaben gemeinsam anzugehen. BiVD übernimmt die Rolle des Blockchain Experten-Netzwerks von NExT, um nicht parallele Strukturen zum gleichen Thema mit den gleichen Zielen aufzubauen und zu betreiben."
          url="https://www.next-netz.de"
        />
        <Partner
          img={bbvbBanner}
          title="Bundesblock"
          description="Der Blockchain Bundesverband ist überzeugt, dass Blockchain und ähnliche, auf Kryptografie basierende dezentrale Technologien grundlegende infrastrukturelle Innovationen darstellen. Für die Bedeutung Deutschlands in einer digital vernetzten Welt ist diese Erkenntnis elementar."
          url="https://bundesblock.de"
        />
        <Partner
          img={vitakoBanner}
          title="VITAKO"
          description="Vitako ist die Bundes-Arbeitsgemeinschaft der Kommunalen IT-Dienstleister e.V. 56 Rechenzentren, Software- und IT-Serviceunternehmen mit über 12.500 Beschäftigten bündeln in Vitako ihr Know-how und stellen es den Kommunen zur Verfügung."
          url="https://www.vitako.de/"
        />
        <Partner
          img={ltcBanner}
          title="Legal Tech Center"
          description="Das Legal Tech Center an der Europa-Universität Viadrina erforscht, entwickelt und vermittelt, was die Digitalisierung dazu beitragen kann, Arbeit mit Recht effektiver und transparenter zu machen, mehr Qualität zu gewährleisten und Zugang zum Recht für alle zu ermöglichen."
          url="https://legaltech.center/"
        />


      </div>
    </StyleWrapper>
  )
}

export default Partners

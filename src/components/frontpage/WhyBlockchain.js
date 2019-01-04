import React from 'react'
import styled from 'styled-components'
import vorteile2 from '../../assets/vorteile2.png'

const Wrapper = styled.div`

h1 {
  margin: 30px 0;
}

color: rgb(102, 102, 102);


.single-box {
  background-color: #eef4f9;
  overflow: hidden;
  display: table;
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

const WhyBlockchain = () => {
  return (
    <Wrapper>
      <div className="align-left">
        <h1>Warum Blockchain?</h1>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="row align-items-center">
            <div className="col-xs-12">
              <div className="single-box">
                <div className="box-inner">
                  <h3>Handlungsbedarf</h3>
                  <p>Auf bundes- und landesebene Ebene besteht ein politisches Mandat um Blockchain für die digitale Verwaltung zu nutzen.</p>
                  <a href="https://www.cdu.de/system/tdf/media/dokumente/koalitionsvertrag_2018.pdf?file=1" target="_blank"
                     className="btn btn-danger m-1">Koalitionsvertrag Bund</a>
                  <a
                    href="https://www.cdu-nrw.de/sites/default/files/media/docs/nrwkoalition_koalitionsvertrag_fuer_nordrhein-westfalen_2017_-_2022.pdf"
                    target="_blank" className="btn btn-danger">Koalitionsvertrag NRW</a>
                </div>
              </div>
              <div className="col-xs-12 mt-1">
                <div className="single-box">
                  <div className="box-inner">
                    <h3>Gov meets Tech</h3>
                    <p>Die BiVD Initiative arbeitet verwaltungsübergreifend, mit bundes- und landesbehörden sowie Unternehmen.</p>
                    <a href="/blockchain-in-der-verwaltung-deutschland" className="btn btn-danger">Nachlesen</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-lg-8">
          <img src={vorteile2} className="w-100"/>
        </div>
      </div>
    </Wrapper>
  )
}

export default WhyBlockchain

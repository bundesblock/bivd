import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'

const StyleWrapper = styled.div`
.action-content a {
  color: white;
  text-decoration: underline;
}
.purchase-link a {
  font-size: 15px;
}
.jumbotron {
  background-color: #af2524;
  margin: 0;
}
color: white;
`

const TalkToUs = () => {
  return (
    <StyleWrapper>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">

            <div className="row">
              <div className="col-md-8">
                <div className="action-content">
                  <h2>Sprechen Sie mit uns! </h2>
                  <p>Mit unserer Leitung per <a href="mailto:info@bivd-initiative.de">E-Mail</a> oder in
                    der <a
                      href="https://join.slack.com/t/bundesblock/shared_invite/enQtNDExMDA3ODc2MDk5LTg5OTkxZDhjNWM2OTRmNDFkNjI3YzlmYmFiNzc2MTRlYjZlODhhNGQwNjQ0Y2VjYjExYWFkZjFhYzkwYTBlNjc"
                      target="_blank">Bundesblock Slack Community</a> (<a
                      href="https://bundesblock.slack.com/messages/CC2SKGENQ"
                      target="_blank">#bundesblockchain</a>).</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ display: 'table', height: '100%' }}>
                  <div className="purchase-link text-right align-middle" style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <a href="mailto:info@bivd-initiative.de" className="btn btn-lg btn-light align-middle">info@bivd-initiative.de</a>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </StyleWrapper>
  )
}

export default TalkToUs

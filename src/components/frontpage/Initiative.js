import React from 'react';
import styled from 'styled-components';
import OffsetAnchor from '../../components/OffsetAnchor'

const Wrapper = styled.div`
color: rgb(102, 102, 102);
h1, em, p {
  font-weight: bold;
}
`

const Initiative = () => {
  return (
    <Wrapper>
      <OffsetAnchor name="initiative" />
      <h1>Blockchain in der Verwaltung Deutschland (BiVD)</h1>
      <p><em>Vorstellung der Initiative von Helmut Nehrenheim (helmut.nehrenheim@mwide.nrw.de)</em></p>
      <p>Das Thema „Blockchain“ ist seit vielen Jahren in unterschiedlichen Bereichen präsent: Neben der Kryptowährung Bitcoin hat die Blockchain oder besser die „Distributed Ledger Technology“ auch Einzug in Koalitionsverträge genommen. Ist Blockchain eine Lösung, für die wir erst ein Problem suchen müssen? Oder kann uns die Blockchain-Technology helfen, das Verwaltungshandeln zum Wohle der Bürgerinnen und Bürger sowie der Wirtschaft effizienter zu gestalten?</p>
      <button className="btn btn-danger">Mehr lesen</button>
    </Wrapper>
  )
}

export default Initiative;

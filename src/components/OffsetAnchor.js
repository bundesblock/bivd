import React from 'react';
import styled from 'styled-components';

const _OffsetAnchor = ({ className, name }) => (
  <a name={name} className={className} />
)

export const OffsetAnchor = styled(_OffsetAnchor)`
& {
  display: block;
  position: relative;
  visibility: hidden;
  top: -60px;
  @media(max-width: 992px){
    top: -140px;
  }
}
`

export default OffsetAnchor;

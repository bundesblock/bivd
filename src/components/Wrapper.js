import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 80%;
  max-width: 770px;
  word-wrap: break-word;
  margin: 0 auto;
  padding: 25px 60px;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
  @media (max-width: 9999px) {
    max-width: 950px;
  }
`

export default Wrapper

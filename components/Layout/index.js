import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 60rem;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0 3rem;
`

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const Section = styled.section`
  padding: 4rem 0;

  @media screen and (max-width: 630px) {
    padding: 2rem 0;
  }
`

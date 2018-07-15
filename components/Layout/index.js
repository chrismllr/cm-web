import styled from 'styled-components'

// TODO: tests
export const Container = styled.div`
  position: relative;
  max-width: 60rem;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-left: calc(2rem + env(safe-area-inset-left));
  padding-right: calc(2rem + env(safe-area-inset-right));

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-left: calc(3rem + env(safe-area-inset-left));
    padding-right: calc(3rem + env(safe-area-inset-right));
  }
`

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
`

export const Section = styled.section`
  padding: 2rem 0;

  @media screen and (min-width: 630px) {
    padding: 4rem 0;
  }
`

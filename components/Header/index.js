import React from 'react'
import styled from 'styled-components'
import { FlexContainer, Section } from '../Layout'

const ColOnMobile = styled(FlexContainer)`
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export default () => (
  <Section>
    <ColOnMobile
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
    >
      <h1>Chris Miller</h1>
      <h4>Web Developer</h4>
    </ColOnMobile>

    <style jsx>{`
      @media screen and (min-width: 768px) {
        .Header {
          flex-direction: row;
          align-items: center;
        }
      }

      h1 {
        font-size: 1.875rem;
      }
    `}</style>
  </Section>
)

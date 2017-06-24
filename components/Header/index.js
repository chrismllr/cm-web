import React from 'react'
import { FlexContainer, Section } from '../Layout'

export default () => (
  <Section>
    <FlexContainer
      className="Header"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
    >
      <h1>Chris Miller</h1>
      <h4>UI Engineer</h4>

    </FlexContainer>

    <style jsx>{`
      .Header {
        @media screen and (min-width: 768px) {
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

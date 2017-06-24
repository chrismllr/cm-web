import React from 'react'
import { FlexContainer, Section } from '../Layout'

export default () => (
  <Section>
    <FlexContainer
      justifyContent="space-between"
      alignItems="center"
    >
      <h1>Chris Miller</h1>
      <h4>UI Engineer</h4>

      <style jsx>{`
        h1 {
          font-size: 1.875rem;
        }
      `}</style>
    </FlexContainer>
  </Section>
)

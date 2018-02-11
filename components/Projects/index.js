import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section, Container } from '../Layout'

const propTypes = {
  projects: PropTypes.shape({}),
  toggleLightbox: PropTypes.func
}

const ProjectImg = styled.img.attrs({
  role: 'button'
})`
  cursor: pointer;
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
  transform: rotate(1deg);
  transition: 0.8s ease;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 20px 2px;
  border-radius: 6px;

  &:nth-child(even) {
    transform: rotate(-1deg);
  }

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    width: auto;
    max-width: calc(50% - 2rem);

    &:nth-child(n + 2) {
      transform: rotate(-1deg);
    }

    &:hover {
      transform: rotate(0deg);
      box-shadow: rgba(0, 0, 0, 0.3) 0 0 25px 2px;
    }
  }
`

function Projects(props) {
  return (
    <Section>
      <Container>
        {Object.keys(props.projects).map((id, k) => (
          <ProjectImg
            key={k}
            onClick={() => props.toggleLightbox(props.projects[id])}
            src={props.projects[id].img}
          />
        ))}
      </Container>
    </Section>
  )
}

Projects.propTypes = propTypes
export default Projects

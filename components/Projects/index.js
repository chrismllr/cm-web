import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section, Container } from '../Layout'

const propTypes = {
  projects: PropTypes.shape({}),
  toggleLightbox: PropTypes.func
}

const ProjectsSection = styled(Section)`
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const ProjectImg = styled.img.attrs({
  role: 'button'
})`
  cursor: pointer;
  max-width: 400px;
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;
  transform: rotate(1deg);
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 20px 2px;
  border-radius: 6px;

  &:nth-child(even) {
    transform: rotate(-1deg);
  }

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    transition: 0.8s ease;
    width: auto;
    max-width: calc(50% - 2rem);

    &:nth-child(n + 2) {
      transform: rotate(-1deg);
    }
  }
`

function Projects(props) {
  return (
    <ProjectsSection>
      <Container>
        {Object.keys(props.projects).map((id, k) => (
          <ProjectImg
            key={k}
            onClick={() => props.toggleLightbox(props.projects[id])}
            src={props.projects[id].img}
          />
        ))}
      </Container>
    </ProjectsSection>
  )
}

Projects.propTypes = propTypes
export default Projects

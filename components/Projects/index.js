import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section } from '../Layout'

const propTypes = {
  projects: PropTypes.shape({}),
  toggleLightbox: PropTypes.func
}

const ProjectsSection = styled(Section)`
  position: relative;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    min-height: 500px;
    height: 40vw;
  }
`

const ProjectImg = styled.img.attrs({
  role: 'button'
})`
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 20vw;
    width: inherit;
    max-width: inherit;
    max-height: 400px;
    min-height: 300px;
    top: 30%;
    position: absolute;
    box-shadow: rgba(0,0,0,.1) 0 0 30px 2px;
    transform: rotate(10deg)
      translate3d(-50%, 0, 0);
    transition: .8s ease;

    &:nth-child(1) {
      z-index: 1;
      left: 40%;
    }

    &:nth-child(2) {
      z-index: 2;
      left: 50%;
    }

    &:nth-child(3) {
      z-index: 3;
      left: 60%;
    }

    &:hover {
      z-index: 5;
      left: 50%;
      transform: rotate(0)
        translate3d(-50%, 0, 0)
        scale(1.4);
    }
  }
`

function Projects (props) {
  return (
    <ProjectsSection>
      {Object.keys(props.projects).map((id, k) => (
        <ProjectImg
          key={k}
          onClick={props.toggleLightbox(props.projects[id])}
          src={props.projects[id].img}
        />
      ))}
    </ProjectsSection>
  )
}

Projects.propTypes = propTypes
export default Projects

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialIcon from '../MaterialIcon'

const OutsideLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  color: #FB0101;
  cursor: pointer;
  transition: .5s ease-in-out;
  text-decoration: none;
  margin-left: .33rem;

  &:hover {
    opacity: .4;
  }
`

function ProjectTile ({ img, name, description, projectHref, onClick }) {
  return (
    <div className="ProjectTile">
      <img src={img} className="ProjectTile-image" alt={name} onClick={onClick} />
      <div className="ProjectTile-info">
        <h4 className="ProjectTile-title">{name}</h4>
        <p className="ProjectTile-description">
          {description}
          {projectHref &&
            <OutsideLink href={projectHref}>
              <MaterialIcon icon="link" />
            </OutsideLink>
          }
        </p>
      </div>

      <style jsx>{`
        .ProjectTile-image {
          width: 100%;
          cursor: pointer;
          box-shadow: 0 4px 5px 0 rgba(0,0,0, 0.1),
            0 1px 7px 0 rgba(0,0,0, 0.01),
            0 2px 4px -1px rgba(0,0,0, 0.01);
          transition: .5s ease;
        }

        .ProjectTile-image:hover {
          transform: rotate(.5deg) scale(1.02);
          box-shadow: 0 8px 10px 0 rgba(0,0,0, 0.1),
            0 1px 12px 0 rgba(0,0,0, 0.1),
            0 6px 10px -1px rgba(0,0,0, 0.1);
        }

        .ProjectTile-info {
          padding: 2rem 0;
        }

        .ProjectTile-title {
          font-family: 'Arvo', serif;
          letter-spacing: .01rem;
          font-size: .83rem;
        }

        .ProjectTile-description {
          opacity: .5;
          font-size: .83rem;
        }
      `}</style>
    </div>
  )
}

ProjectTile.propTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  projectHref: PropTypes.string
}

export default ProjectTile

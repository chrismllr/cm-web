import React from 'react'
import MaterialIcon from '../MaterialIcon'

export const ProjectTile = ({ imgSrc, projectName, description, projectHref }) => (
  <div className="ProjectTile">
    <img src={imgSrc} className="ProjectTile-image" alt={projectName} />
    <div className="ProjectTile-info">
      <h4 className="ProjectTile-title">{projectName}</h4>
      <p className="ProjectTile-description">
        {description}
        {projectHref &&
          <a className="ProjectTile-link" href={projectHref} target="_blank">
            <MaterialIcon icon="link" />
          </a>
        }
      </p>
    </div>

    <style jsx>{`
      .ProjectTile:nth-child(odd) {
        margin-right: 1.5rem;
      }

      .ProjectTile-image {
        width: 100%;
        box-shadow: 0 4px 5px 0 rgba(0,0,0, 0.14),
          0 1px 10px 0 rgba(0,0,0, 0.12),
          0 2px  4px -1px rgba(0,0,0, 0.2);
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

      .ProjectTile-link {
        text-decoration: none;
        margin-left: .33rem;
      }

      .ProjectTile-link {
        color: #FB0101;
        cursor: pointer;
        transition: .5s ease-in-out;
      }

      .ProjectTile-link:hover {
        opacity: .4;
      }

      @media (max-width: 630px) {
        .ProjectTile:nth-child(odd) {
          margin-right: 0;
        }

        .ProjectTile {
          margin-bottom: 1.5rem;
        }
      }
    `}</style>
  </div>
)

ProjectTile.propTypes = {
  imgSrc: React.PropTypes.string,
  projectName: React.PropTypes.string,
  description: React.PropTypes.string,
  projectHref: React.PropTypes.string
}

export default ProjectTile

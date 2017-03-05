import React from 'react'
import MaterialIcon from '../MaterialIcon'

export const ProjectTile = ({ img, name, description, projectHref, onClick }) => (
  <div className="ProjectTile">
    <img src={img} className="ProjectTile-image" alt={name} onClick={onClick} />
    <div className="ProjectTile-info">
      <h4 className="ProjectTile-title">{name}</h4>
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
        cursor: pointer;
        box-shadow: 0 4px 5px 0 rgba(0,0,0, 0.1), 0 1px 7px 0 rgba(0,0,0, 0.01), 0 2px 4px -1px rgba(0,0,0, 0.01);
        transition: .5s ease;
      }

      .ProjectTile-image:hover {
        transform: rotate(.5deg) scale(1.02);
        box-shadow: 0 8px 10px 0 rgba(0,0,0, 0.1), 0 1px 12px 0 rgba(0,0,0, 0.1), 0 6px 10px -1px rgba(0,0,0, 0.1);
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

        .ProjectTile:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }
    `}</style>
  </div>
)

ProjectTile.propTypes = {
  img: React.PropTypes.string,
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  projectHref: React.PropTypes.string
}

export default ProjectTile

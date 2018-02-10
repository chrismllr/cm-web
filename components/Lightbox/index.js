import React from 'react'
import PropTypes from 'prop-types'
import MaterialIcon from '../MaterialIcon'

function commaSeparatedString(arr) {
  return arr.reduce((acc, str) => (acc.length ? `${acc}, ${str}` : str), '')
}

function Lightbox(props) {
  return (
    <div className="Lightbox">
      <a data-hook="close" onClick={props.close} className="Back">
        <span>&larr;</span>
      </a>

      <img
        className="Image"
        src={props.lightboxProject.img}
        alt={props.lightboxProject.name}
      />

      <div className="Lb-content">
        <div className="Col1">
          <h2>
            {props.lightboxProject.name}
            {props.lightboxProject.projectHref && (
              <a
                className="Project-link"
                href={props.lightboxProject.projectHref}
                target="_blank"
                rel="noopener"
                data-hook="project-link"
              >
                <MaterialIcon icon="link" />
              </a>
            )}
          </h2>
          <p className="Company">{props.lightboxProject.company}</p>
          <p className="Sub">
            {commaSeparatedString(props.lightboxProject.technologies)}
          </p>
        </div>

        <div className="Col2">
          <span className="Learnings">Learnings:</span>
          <ul>
            {props.lightboxProject.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translate3d(0, -50%, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .Lightbox {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow-y: auto;
          background-color: rgba(255, 255, 107, 0.98);
          z-index: 100;
          padding: 2rem;

          animation: fadeIn;
          animation-duration: 0.2s;
          animation-fill-mode: both;

          padding-left: calc(2rem + env(safe-area-inset-left));
          padding-right: calc(2rem + env(safe-area-inset-right));
          padding-top: calc(2rem + env(safe-area-inset-top));
          padding-bottom: calc(2rem + env(safe-area-inset-bottom));
        }

        .Back {
          font-size: 1.5rem;
          color: #222;
          display: block;
          text-decoration: none;
          opacity: 0.8;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .Image {
          max-height: 55vh;
          max-width: calc(100vw - 4rem);
          box-shadow: rgba(0, 0, 0, 0.1) 0 0 50px 15px;

          animation: fadeInDown;
          animation-fill-mode: both;
          animation-duration: 0.5s;
          animation-timing-function: cubic-bezier(0, 1, 0.51, 1);
          animation-delay: 0.2s;
        }

        .Lb-content {
          color: rgba(34, 34, 34, 0.8);
          letter-spacing: 0.03rem;
          font-size: 0.875rem;
          margin: 1rem 0;
        }

        .Lb-content,
        .Back {
          animation: fadeIn;
          animation-fill-mode: both;
          animation-duration: 0.5s;
          animation-delay: 0.4s;
        }

        .Learnings {
          font-family: 'Arvo', serif;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .Project-link {
          text-decoration: none;
          font-size: 1.2rem;
          margin-left: 0.5rem;
          color: #222;
          opacity: 0.5;
          transition: 0.3s ease;
        }

        .Project-link:hover {
          opacity: 1;
        }

        .Col1,
        .Col2 {
          padding: 1rem 0;
          border: none;
        }

        .Col1 h2 {
          font-size: 2rem;
          margin-bottom: 0;
        }

        .Col2 ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .Col2 li:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        .Sub {
          opacity: 0.7;
          font-style: italic;
        }

        @media (min-width: 630px) {
          .Lightbox {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .Back {
            font-size: 2rem;
          }

          .Lb-content {
            display: flex;
            align-items: flex-start;
            margin: 2rem 0;
          }

          .Learnings {
            margin-bottom: 1.33rem;
          }

          .Col1 {
            padding: 0 3rem 1rem 1rem;
            border-right: 1px solid rgba(34, 34, 34, 0.1);
          }

          .Company {
            margin-bottom: 1rem;
          }

          .Col2 {
            padding: 0.66rem 1rem 1rem 3rem;
          }

          .Col1 h2 {
            font-size: 2.5rem;
            margin-bottom: -0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

Lightbox.propTypes = {
  close: PropTypes.func,
  lightboxProject: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    projectHref: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    learnings: PropTypes.arrayOf(PropTypes.string)
  })
}

export default Lightbox

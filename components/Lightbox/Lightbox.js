import React from 'react'
import MaterialIcon from '../MaterialIcon'

function commaSeparatedString (arr) {
  return arr.reduce((acc, str) => acc.length ? `${acc}, ${str}` : str, '')
}

function stopPropagation (e) {
  e.stopPropagation()
  return false
}

const Lightbox = (props) => (
  <div className="Lightbox" onClick={props.close}>
    <img className="Image" onClick={stopPropagation} src={props.lightboxProject.img} alt={props.lightboxProject.name} />

    <div className="Lb-content" onClick={stopPropagation}>
      <div className="Col1">
        <h2>
          {props.lightboxProject.name}
          {props.lightboxProject.projectHref &&
          <a className="Project-link" href={props.lightboxProject.projectHref} target="_blank">
            <MaterialIcon icon="link" />
          </a>
        }
        </h2>
        <span className="Sub">
          {commaSeparatedString(props.lightboxProject.technologies)}
        </span>
      </div>

      <div className="Col2">
        <span className="Learnings">Learnings:</span>
        <ul>
          {props.lightboxProject.learnings.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </div>
    </div>

    <style jsx>{`
      .Lightbox {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255,255,89, .9);
        z-index: 100;
        padding: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .Image {
        max-height: 65vh;
        max-width: 80vw;
        box-shadow: rgba(0,0,0,.1) 0 0 50px 15px;
      }

      .Lb-content {
        color: rgba(34,34,34, .8);
        letter-spacing: .03rem;
        font-size: .875rem;
        display: flex;
        align-items: flex-start;
        margin-top: 2rem;
      }

      .Learnings {
        font-family: "Arvo", serif;
        display: inline-block;
        margin-bottom: 1.5rem;
      }

      .Project-link {
        text-decoration: none;
        font-size: 1.2rem;
        margin-left: .5rem;
        color: #222;
        opacity: .5;
        transition: .3s ease;
      }

      .Project-link:hover {
        opacity: 1;
      }

      .Col1 {
        border-right: 1px solid rgba(34,34,34, .1);
        padding: 0 3rem 1rem 1rem;
      }

      .Col2 {
        padding: 1rem 1rem 1rem 3rem;
      }

      .Col1 h2 {
        font-size: 2.5rem;
        margin-bottom: .5rem;
      }

      .Col2 ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .Col2 li:not(:last-child) {
        margin-bottom: .5rem;
      }

      .Sub {
        opacity: .7;
        font-style: italic;
      }
    `}</style>
  </div>
)

Lightbox.propTypes = {
  close: React.PropTypes.func,
  lightboxProject: React.PropTypes.shape({
    img: React.PropTypes.string,
    name: React.PropTypes.string,
    technologies: React.PropTypes.arrayOf(React.PropTypes.string),
    learnings: React.PropTypes.arrayOf(React.PropTypes.string)
  })
}

export default Lightbox

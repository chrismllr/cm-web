import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'
import Lightbox from '../components/Lightbox'
import { actions } from '../modules/lightbox.duck'

function toggleLightbox (dispatch, p) {
  return function () {
    dispatch(actions.setLghtboxProject(p))
    dispatch(actions.toggleLightbox())
  }
}

const App = ({ projectsState, dispatch, lightboxState }) => (
  <main className="App">
    <Header />

    <div className="App-content">
      <div className="container">
        <div className="Projects">
          {projectsState.projects.map((p, i) => (
            <ProjectTile
              key={i}
              onClick={toggleLightbox(dispatch, p)}
              {...p}
            />
          ))}
        </div>
      </div>
    </div>

    <Footer />

    {lightboxState.isLightbox &&
      <Lightbox {...lightboxState} close={toggleLightbox(dispatch)} />
    }

    <style jsx>{`
      .App {
        min-width: 100%;
        color: #222;
        font-weight: 400;
        overflow-x: hidden;
      }

      .App-content {
        height: 100%;
        width: 100%;
        min-width: 100%;
        overflow-x: hidden;
        background-image: linear-gradient(270deg, #f0f0f0, #f8f8f8);
      }

      .Projects {
        padding: 4rem 0;
        display: flex;
      }

      @media (max-width: 630px) {
        .Projects {
          flex-wrap: wrap;
        }
      }
    `}</style>
  </main>
)

App.propTypes = {
  projectsState: React.PropTypes.shape({}),
  dispatch: React.PropTypes.func,
  lightboxState: React.PropTypes.shape({})
}

const mapStateToProps = (state) => ({
  projectsState: state.projects,
  lightboxState: state.lightbox
})

export default connect(mapStateToProps)(App)

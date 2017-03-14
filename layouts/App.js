import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'
import Lightbox from '../components/Lightbox'
import { Container } from '../components/Containers'
import { actions } from '../modules/lightbox.duck'

function toggleLightbox (dispatch, p) {
  return function () {
    dispatch(actions.setLghtboxProject(p))
    dispatch(actions.toggleLightbox())
  }
}

const App = ({ entities: { projects }, dispatch, lightboxState }) => (
  <main className="App">
    <Header />

    {console.log(projects)}

    <div className="App-content">
      <Container>
        <div className="Projects">
          {Object.keys(projects).map((id, i) => (
            <ProjectTile
              key={i}
              onClick={toggleLightbox(dispatch, projects[id])}
              {...projects[id]}
            />
          ))}
        </div>
      </Container>
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
        flex-wrap: wrap;
      }
    `}</style>
  </main>
)

App.propTypes = {
  entities: React.PropTypes.shape({
    projects: React.PropTypes.shape({})
  }),
  dispatch: React.PropTypes.func,
  lightboxState: React.PropTypes.shape({})
}

const mapStateToProps = (state) => ({
  entities: state.entities,
  lightboxState: state.lightbox
})

export default connect(mapStateToProps)(App)

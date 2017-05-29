import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectTile from '../components/ProjectTile'
import { Container } from '../components/Containers'
import AsyncComponent from '../hoc/AsyncComponent'
import { actions } from '../modules/lightbox.duck'
import dynamic from 'next/dynamic'

function toggleLightbox (dispatch, p) {
  return function () {
    dispatch(actions.setLghtboxProject(p))
    dispatch(actions.toggleLightbox())
  }
}

function lightboxLoader () {
  return import('../components/Lightbox');
}

function LightboxAsync (props) {
  return <AsyncComponent {...props} loader={lightboxLoader} />
}

function App ({ entities: { projects }, dispatch, lightboxState }) {
  return (
    <main className="App">
      <Header />

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
        <LightboxAsync
          {...lightboxState}
          close={toggleLightbox(dispatch)}
        />
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 1.5rem;
          grid-row-gap: 1rem;
        }

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      `}</style>
    </main>
  );
}

App.propTypes = {
  entities: PropTypes.shape({
    projects: PropTypes.shape({})
  }),
  dispatch: PropTypes.func,
  lightboxState: PropTypes.shape({})
}

const mapStateToProps = (state) => ({
  entities: state.entities,
  lightboxState: state.lightbox
})

export default connect(mapStateToProps)(App)

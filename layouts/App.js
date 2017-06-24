import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Container, Section } from '../components/Layout'
import withKeyCmds from '../hoc/with-key-commands'
import AsyncComponent from '../hoc/AsyncComponent'
import { actions } from '../modules/lightbox.duck'

function toggleLightbox (dispatch, p, value) {
  return function toggle () {
    if (p) dispatch(actions.setLghtboxProject(p))
    dispatch(actions.toggleLightbox(value))
  }
}

function lightboxLoader () {
  return import('../components/Lightbox')
}

function LightboxAsync (props) {
  return <AsyncComponent {...props} loader={lightboxLoader} />
}

class App extends React.Component {
  componentDidMount () {
    const { addKeyCommand, dispatch } = this.props

    addKeyCommand(27, toggleLightbox(dispatch, undefined, false))
  }

  render () {
    const {
      entities: { projects },
      dispatch,
      lightboxState
    } = this.props

    return (
      <main className="App">
        <Header />

        <Section>
          <Container>
            <p className="Bio">
              Hello! My name is Chris, and I'm a web developer and UI engineer. I specialize in building efficient and forward-thinking technological solutions for the browser. I currently work at <span className="bold-it">Dialexa</span>, right here in beautiful Dallas, Texas.
            </p>
          </Container>
        </Section>

        <Projects
          projects={projects}
          toggleLightbox={(p) => toggleLightbox(dispatch, p, true)}
        />

        <Footer />

        {lightboxState.isLightbox &&
          <LightboxAsync
            {...lightboxState}
            close={toggleLightbox(dispatch, undefined, false)}
          />
        }

        <style jsx>{`
          .App {
            min-width: 100%;
            color: #222;
            font-weight: 400;
            overflow-x: hidden;
          }

          .Bio {
            max-width: 40rem;
            font-size: 1.875rem;
            color: #4a4a4a;
          }

          .bold-it {
            font-weight: 900;
            color: #222;
          }
        `}</style>
      </main>
    )
  }
}

App.propTypes = {
  entities: PropTypes.shape({
    projects: PropTypes.shape({})
  }),
  dispatch: PropTypes.func,
  lightboxState: PropTypes.shape({}),
  addKeyCommand: PropTypes.func
}

const mapStateToProps = (state) => ({
  entities: state.entities,
  lightboxState: state.lightbox
})

export default connect(mapStateToProps)(withKeyCmds(App))

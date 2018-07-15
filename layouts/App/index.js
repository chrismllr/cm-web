import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import { Section, Container } from '../../components/Layout'
import withKeyCmds from '../../hoc/with-key-commands'
import AsyncComponent from '../../hoc/AsyncComponent'
import { actions } from '../../modules/lightbox.duck'
import { AppWrapper } from './styled'

function toggleLightbox(dispatch, p, value) {
  return function toggle() {
    if (p) dispatch(actions.setLghtboxProject(p))
    dispatch(actions.toggleLightbox(value))
  }
}

function lightboxLoader() {
  return import('../../components/Lightbox')
}

function LightboxAsync(props) {
  return <AsyncComponent {...props} loader={lightboxLoader} />
}

const HeaderSection = styled(Section)`
  padding-bottom: 0;
`

class App extends React.Component {
  componentDidMount() {
    const { addKeyCommand, dispatch } = this.props

    addKeyCommand(27, toggleLightbox(dispatch, undefined, false))
  }

  render() {
    const { entities: { projects }, dispatch, lightboxState } = this.props

    return (
      <AppWrapper>
        <HeaderSection>
          <Container style={{ textAlign: 'right' }}>
            <h1>Chris Miller</h1>
          </Container>
        </HeaderSection>
        <Projects
          projects={projects}
          toggleLightbox={p => toggleLightbox(dispatch, p, true)()}
        />

        <Footer />

        {lightboxState.isLightbox && (
          <LightboxAsync
            {...lightboxState}
            close={toggleLightbox(dispatch, undefined, false)}
          />
        )}
      </AppWrapper>
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

const mapStateToProps = state => ({
  entities: state.entities,
  lightboxState: state.lightbox
})

export default connect(mapStateToProps)(withKeyCmds(App))
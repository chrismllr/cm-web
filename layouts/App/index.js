import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Projects from '../../components/Projects'
import Footer from '../../components/Footer'
import { Section, Container } from '../../components/Layout'
import withKeyCmds from '../../hoc/with-key-commands'
import AsyncComponent from '../../hoc/AsyncComponent'
import { actions } from '../../modules/lightbox.duck'

import { AppWrapper } from './styled'
import { media } from '../../styles/common'

function LightboxAsync(props) {
  return (
    <AsyncComponent
      {...props}
      loader={() => import('../../components/Lightbox')}
    />
  )
}

const HeaderSection = styled(Section)`
  ${media.desktop`
    padding-bottom: 0;
  `};
`

class App extends React.Component {
  componentDidMount() {
    const { addKeyCommand, lightboxActions: { toggleLightbox } } = this.props

    addKeyCommand(27, () => {
      toggleLightbox(false)
    })
  }

  render() {
    const {
      entities: { projects },
      lightboxState,
      lightboxActions: { toggleLightbox, setLightboxProject }
    } = this.props

    return (
      <AppWrapper>
        <HeaderSection>
          <Container style={{ textAlign: 'right' }}>
            <h1>Chris Miller</h1>
          </Container>
        </HeaderSection>

        <Projects
          projects={projects}
          toggleLightbox={p => {
            setLightboxProject(p)
            toggleLightbox(true)
          }}
        />

        <Footer />

        {lightboxState.isLightbox && (
          <LightboxAsync
            {...lightboxState}
            close={() => {
              toggleLightbox(false)
            }}
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
  addKeyCommand: PropTypes.func,
  lightboxActions: {
    toggleLightbox: PropTypes.func,
    setLightboxProject: PropTypes.func
  }
}

const mapStateToProps = state => ({
  entities: state.entities,
  lightboxState: state.lightbox
})

const mapActionCreators = dispatch => ({
  lightboxActions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapActionCreators)(withKeyCmds(App))

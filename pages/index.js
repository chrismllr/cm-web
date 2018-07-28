import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { actions } from '../modules/entities.duck'
import '../utils/offline-install'

import App from '../layouts/App'
import { fonts } from '../styles/common'

class CoreLayout extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(actions.getProjects())
  }

  render() {
    return (
      <div>
        <App />

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          html {
            height: 100%;
            font-size: 14px;
            min-width: 100%;
            -webkit-font-smoothing: subpixel-antialiased;
          }

          html,
          body {
            width: 100%;
            height: auto;
            margin: 0;
          }

          body {
            line-height: 1.5;
            overflow-x: hidden;
            background-color: #fff;
            font-family: ${fonts.SECONDARY};
          }

          h1,
          h2,
          h3 {
            font-family: ${fonts.PRIMARY};
            margin: 0;
            letter-spacing: 0.01rem;
          }

          h4,
          h5,
          h6,
          p {
            font-weight: 400;
            margin: 0;
            letter-spacing: 0.02rem;
          }
        `}</style>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  dispatch: PropTypes.func
}

export default withRedux(initStore)(CoreLayout)

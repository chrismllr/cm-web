import React from 'react'
import PropTypes from 'prop-types'

// TODO: tests
const MaterialIcon = ({ icon, style }) => (
  <i className={`icon icon-${icon}`} style={style}>
    <style jsx>{`
      @font-face {
        font-family: 'icomoon';
        src: url('/static/fonts/icomoon.eot?4fss3');
        src: url('/static/fonts/icomoon.eot?4fss3#iefix')
            format('embedded-opentype'),
          url('/static/fonts/icomoon.ttf?4fss3') format('truetype'),
          url('/static/fonts/icomoon.woff?4fss3') format('woff'),
          url('/static/fonts/icomoon.svg?4fss3#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      [class^='icon-'],
      [class*=' icon-'] {
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .icon-mail:before {
        content: '\\e901';
      }
      .icon-link:before {
        content: '\\e9cb';
      }
      .icon-facebook:before {
        content: '\\ea90';
      }
      .icon-instagram:before {
        content: '\\ea92';
      }
    `}</style>
  </i>
)

MaterialIcon.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.shape({})
}

export default MaterialIcon

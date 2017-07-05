import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string
}

const defaultProps = {
  text: 'Check out your sweet new component!'
}

function YourComponent (props) {
  return (
    <div className="YourComponent">
      {props.text}

      <style jsx>{`
        .YourComponent {
          background-color: tomato;
          color: white;
        }
      `}</style>
    </div>
  )
}

YourComponent.propTypes = propTypes
YourComponent.defaultProps = defaultProps
export default YourComponent

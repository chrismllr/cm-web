import React from 'react'

export default function withKeyCmds(WrappedComponent) {
  function addToFns(fn) {
    return function update(state) {
      return {
        fns: [...state.fns, fn]
      }
    }
  }

  return class KeyCommands extends React.Component {
    state = {
      fns: []
    }

    addKeyCommand = (key, fn) => {
      const handleKeyUp = e => {
        if (e.keyCode === key) {
          fn()
        }
      }

      this.setState(addToFns(handleKeyUp))
      window.addEventListener('keyup', handleKeyUp, false)
    }

    componentWillUnmount() {
      this.state.fns.map(fn => window.removeEventListener('keyup', fn, false))
    }

    render() {
      return (
        <WrappedComponent {...this.props} addKeyCommand={this.addKeyCommand} />
      )
    }
  }
}

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import YourComponent from '../YourComponent'

function setup (args = {}) {
  const props = { ...args }
  const wrapper = shallow(<YourComponent {...props} />)
  const component = renderer.create(<YourComponent {...props} />)
  const json = component.toJSON()

  return { props, wrapper, component, json }
}

describe('(Component) YourComponent', () => {
  it('Renders to snapshot', () => {
    const { json } = setup()
    expect(json).toMatchSnapshot()
  })
})

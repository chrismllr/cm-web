import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('(Component) Header', () => {
  it('Renders title and subtitle of page', () => {
    const wrapper = shallow(
      <Header />
    )

    expect(wrapper.find('h1').text()).toEqual('Chris Miller')
    expect(wrapper.find('h4').text()).toEqual('UI Engineer')
  })

  it('Renders to snapshot', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

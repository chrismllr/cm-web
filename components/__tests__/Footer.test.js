import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Footer from '../Footer'
import { hook } from '../../utils/test-utils'
import format from 'date-fns/format'

describe('(Component) Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    )
  })

  it('Renders Any Questions with a mailto link below', () => {
    expect(wrapper.find(hook('questions')).text()).toEqual('Any questions?')
    expect(wrapper.find(hook('questions-mailto')).text()).toEqual('You got my digits.')
    expect(wrapper.find(hook('questions-mailto')).prop('href')).toEqual('mailto:chrsmllr@gmail.com')
  })

  it('Renders copyright with correct year', () => {
    expect(wrapper.find(hook('copyright')).text()).toEqual(`© Chris Miller ${format(new Date(), 'YYYY')}`)
  })

  it('Renders link to github', () => {
    expect(wrapper.find(hook('github')).exists()).toBeTruthy()
    expect(wrapper.find(hook('github')).props().href).toEqual('http://github.com/chrismllr')
  })

  it('Renders to snapshot', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

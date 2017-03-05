import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Footer from '../../components/Footer'
import { hook } from '../test-utils'
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

  it('Renders three MaterialIcon`s for social links', () => {
    expect(wrapper.find('MaterialIcon').length).toEqual(3)
  })

  it('Renders to snapshot', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

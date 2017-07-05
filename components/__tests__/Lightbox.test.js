import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Lightbox from '../Lightbox'
import { hook } from '../../utils/test-utils'

function setup (args = {}) {
  const props = {
    close: jest.fn(),
    lightboxProject: {
      img: 'img.jpg',
      name: 'JLeveritt',
      company: 'Personal',
      projectHref: 'www.project.com',
      technologies: ['React'],
      learnings: ['Did cool stuff']
    },
    ...args
  }
  const wrapper = shallow(<Lightbox {...props} />)
  const component = renderer.create(<Lightbox {...props} />)
  const json = component.toJSON()

  return { props, wrapper, component, json }
}

describe('(Component) Lightbox', () => {
  it('Renders to snapshot', () => {
    const { json } = setup()
    expect(json).toMatchSnapshot()
  })

  it('When back arrow is clicked lightbox is closed', () => {
    const { wrapper, props } = setup()
    wrapper.find(hook('close')).simulate('click')

    expect(props.close).toHaveBeenCalled()
  })

  it('If project link exists, renders link', () => {
    const { wrapper } = setup()
    expect(wrapper.find(hook('project-link')).exists()).toBeTruthy()

    const { wrapper: w2 } = setup({
      lightboxProject: {
        img: 'img.jpg',
        name: 'JLeveritt',
        company: 'Personal',
        projectHref: undefined,
        technologies: ['React'],
        learnings: ['Did cool stuff']
      }
    })
    expect(w2.find(hook('project-link')).exists()).not.toBeTruthy()
  })
})

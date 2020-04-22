import React from 'react'
import { create } from 'react-test-renderer'
import Skill from '../Skill'

describe('Skill Component', () => {
  it('renders correctly', () => {
    const tree = create(<Skill />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

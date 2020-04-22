import React from 'react'
import { create } from 'react-test-renderer'
import Volunteer from '../Work/Volunteer'
const theme = require('../../theme/theme.json')

describe('Volunteer Component', () => {
  it('renders correctly', () => {
    const tree = create(
      <Volunteer
        theme={theme}
        organization="Milwaukee Area Technical College"
        role="ITDEV Advisory Board Member"
        duration="Jan 2015 - Present"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

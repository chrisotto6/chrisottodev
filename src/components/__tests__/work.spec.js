import React from 'react'
import { create } from 'react-test-renderer'
import Work from '../Work'
const theme = require('../../theme/theme.json')

describe('Work Component', () => {
  it('renders correctly', () => {
    const tree = create(<Work theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

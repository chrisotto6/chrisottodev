import React from 'react'
import { create } from 'react-test-renderer'
import Social from '../Social'
const theme = require('../../theme/theme.json')

describe('Social Component', () => {
  it('renders correctly', () => {
    const tree = create(<Social theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import { create } from 'react-test-renderer'
import Education from '../Work/Education'
const theme = require('../../theme/theme.json')

describe('Education Component', () => {
  it('renders correctly without honors', () => {
    const tree = create(
      <Education
        theme={theme}
        school="Milwaukee Area Technical College"
        degree="A.S. Mobile Application Development"
        gpa="3.729"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly with honors', () => {
    const tree = create(
      <Education
        theme={theme}
        school="Lakeland University"
        degree="B.S. Computer Science"
        gpa="3.9375"
        honors="Summa cum Laude"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import { create } from 'react-test-renderer'
import Article from '../Article'
import Headline from '../Article/Headline'
import Bodytext from '../Article/Bodytext'
const theme = require('../../theme/theme.json')

describe('Article Component', () => {
  it('renders correctly with title', () => {
    const tree = create(
      <Article theme={theme}>
        <Headline title="Test" theme={theme}></Headline>
      </Article>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without title', () => {
    const tree = create(
      <Article theme={theme}>
        <Headline theme={theme}>
          <Bodytext theme={theme} html={`<p>test</p>`} />
        </Headline>
      </Article>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

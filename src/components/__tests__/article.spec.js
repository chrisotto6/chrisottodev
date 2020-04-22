import React from 'react'
import { create } from 'react-test-renderer'
import Article from '../Article'
import Headline from '../Article/Headline'
import SubHeadline from '../Article/SubHeadline'
import Bodytext from '../Article/Bodytext'
const theme = require('../../theme/theme.json')

describe('Article Component', () => {
  it('renders correctly with title', () => {
    const tree = create(
      <Article theme={theme}>
        <Headline title="Test" theme={theme} />
        <SubHeadline title="SubTest" theme={theme} />
      </Article>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly without title', () => {
    const tree = create(
      <Article theme={theme}>
        <Headline theme={theme} />
        <SubHeadline theme={theme} />
        <Bodytext theme={theme} body={mock_page} />
      </Article>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const mock_page =
  'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Test"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "test"));\n}\n;\nMDXContent.isMDXComponent = true;'

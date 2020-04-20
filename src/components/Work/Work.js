import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Tabs } from 'antd'

const Work = (props) => {
  const { theme } = props

  const { TabPane } = Tabs

  function callback(key) {
    console.log(key)
  }

  return (
    <React.Fragment>
      <Tabs onChange={callback} type="card" tabPosition="top">
        <TabPane tab="Northwestern Mutual" key="1">
          <h4 className="jobTitle">Senior Test Engineer</h4>
          <h4 className="duration">Jan 2019 - Present</h4>
        </TabPane>
        <TabPane tab="JDA Software" key="2">
          <h4 className="jobTitle">Senior QA Engineer</h4>
          <h4 className="duration">Nov 2017 - Jan 2019</h4>
          <ul>
            <li>
              Assesses the testing requirements of each product or product area and its components,
              and defines appropriate strategies and tools throughout JDA.
            </li>
            <li>
              Identifies potential risks in quality and works with leadership in creating mitigation
              plans.
            </li>
            <li>
              Assists in developing performance criteria and validates that products meet those
              performance requirements. Leads the effort to assist performance testing.
            </li>
            <li>
              Responsible for planning, executing, and completing system and regression testing.
            </li>
            <li>
              Plans as required hardware and software requirements for test environment setups.
            </li>
            <li>Works as required with appropriate parties to plan test resource requirements.</li>
            <li>
              Identifies and implements strategies to leverage the testing process and test tools to
              create reusable test assets.
            </li>
            <li>
              Works for resolution of impediments related to quality by collaborating with
              appropriate stakeholders.
            </li>
            <li>
              Has demonstrated ability to independently evaluate test automation tools, technology,
              and framework based on product requirements.
            </li>
            <li>
              Provides cross-training and education to test and development personnel as required.
            </li>
            <li>
              Provides technical thought leadership, training, guidance, feedback, and coaching to
              QA engineers.
            </li>
            <li>
              Develops practices and implements tools to facilitate test-driven development with a
              high degree of test automation for highly scalable products.
            </li>
            <li>
              Develops solid understanding of JDA product areas from these perspectives: functional,
              architectural, and performance.
            </li>
            <li>
              Participates in planning sessions with the product owners to develop enhancements that
              support business scenarios that span across JDA products.
            </li>
            <li>
              Collects test metrics, analyzes trends, and suggests appropriate corrective and
              preventive actions.
            </li>
            <li>
              Suggests and implements process improvements plans, tracks their progress, and
              achieves objectives.
            </li>
          </ul>
          <h4 className="jobTitle">Intermediate QA Engineer</h4>
          <h4 className="duration">Nov 2014 - Oct 2017</h4>
          <ul>
            <li>Development team Scrum Master</li>
            <li>
              Helped define and develop quality initiatives with QA Director for the whole company
              to consume
            </li>
            <li>
              Utilize FitNesse and Selenium to create highly effective automated tests. Tied
              together with Continuous Integration these tests run multiple times daily to protect
              the software from regression.
            </li>
            <li>
              Employ numerous methods to manual test new development and the existing code base such
              as exploratory testing, writing scripted manual tests, end to end, and performance
              testing.
            </li>
            <li>
              Advise on developing performance criteria and validating products meet performance
              requirements.
            </li>
            <li>
              Develop practices and tools to facilitate quality with a high degree of test
              automation for highly scalable products.
            </li>
            <li>
              Develop solid understanding of the Warehouse Management product areas from a
              functional/architectural/performance perspective.
            </li>
            <li>
              Identify and implement agile strategies to leverage the testing process and test
              tools.
            </li>
            <li>
              Participate as an embedded QA Engineer on projects and develop test cases and test
              scripts.
            </li>
            <li>
              Assist in ensuring release guidelines are met for the Warehouse Management product.
            </li>
            <li>
              Participate in the continuous effort to bring new testing knowledge into project teams
              with test strategy articulation, planning, execution, and management of individual
              testing events.
            </li>
            <li>
              Participate in the development and support of an agile testing program aimed at
              supporting multiple testing efforts simultaneously.
            </li>
            <li>
              Assist in configuring, maintaining and monitoring of continuous integration servers.
            </li>
          </ul>
        </TabPane>
        <TabPane tab="Army National Guard" key="3">
          <h4 className="jobTitle">SGT, Signal Support Systems Specialist (25U)</h4>
          <h4 className="duration">Mar 2011 - Apr 2018</h4>
        </TabPane>
        <TabPane tab="Competitive Edge Software" key="4">
          <h4 className="jobTitle">Intermediate QA Engineer</h4>
          <h4 className="duration">Nov 2014 - Oct 2017</h4>
        </TabPane>
      </Tabs>

      {/* --- STYLES --- */}
      <style jsx>{`
        .jobTitle {
          font-size: 1.4rem;
          line-height: 1.42857;
          font-weight: 600;
        }
        .duration {
          font-size: 1.4rem;
          line-height: 1.42857;
          color: ${theme.color.neutral.gray.g};
        }
      `}</style>
    </React.Fragment>
  )
}

Work.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Work

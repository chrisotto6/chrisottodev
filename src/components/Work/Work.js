import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import 'antd/lib/tabs/style/index.css'

const Work = (props) => {
  const { theme } = props

  const { TabPane } = Tabs

  return (
    <React.Fragment>
      <Tabs size="small" tabPosition="left">
        <TabPane
          tab={
            <div aria-label="Tab">
              <div>Northwestern</div>
              <div>Mutual</div>
            </div>
          }
          key="1"
        >
          <h3 className="jobTitle">Senior Test Engineer</h3>
          <h3 className="duration">Jan 2019 - Present</h3>
          <p>🚧 Under Construction 🚧</p>
        </TabPane>
        <TabPane
          tab={
            <div>
              <div>JDA Software</div>
            </div>
          }
          key="2"
        >
          <h3 className="jobTitle">Senior QA Engineer, Scrum Master</h3>
          <h3 className="duration">Nov 2017 - Jan 2019</h3>
          <p>
            <ul className="workList">
              <li>
                Assess the testing requirements of each product or product area and its components
                and define appropriate strategies and tools throughout product development.
              </li>
              <li>
                Utilize FitNesse, Selenium and WebDriver to create highly effective automated tests
                integrated with Jenkins.
              </li>
              <li>
                Collect test metrics, analyze trends, and suggest appropriate corrective, preventive
                actions.
              </li>
              <li>
                Identify the root cause of unstable tests, fix the underlying fixtures that result
                in an 80% decrease in unstable tests year over year.
              </li>
              <li>
                Evaluate test automation tools, technology, and framework based on product
                requirements.
              </li>
              <li>
                Identify and implement strategies to leverage the testing life cycle and test tools
                to create reusable test assets.
              </li>
              <li>
                Identify potential risks in quality and work with leadership in creating mitigation
                plans.
              </li>
              <li>
                Assist in developing performance criteria and validating that products meet those
                performance requirements. Lead effort to assist performance testing.
              </li>
              <li>
                Debug, triage and provide guidance on support requests or converting to defects.
              </li>
              <li>Plan, execute, and complete system and regression testing.</li>
              <li>Plan hardware and software requirements for test environment setups.</li>
              <li>
                Resolve impediments related to quality by collaborating with cross-functional
                stakeholders.
              </li>
              <li>
                Provide cross-training and education to test, development and services personnel as
                required.
              </li>
              <li>
                Provide technical leadership, training, guidance, feedback, and coaching to QA
                engineers.
              </li>
              <li>
                Develop practices and implement tools to facilitate test-driven development with a
                high degree of test automation for highly scalable products.
              </li>
              <li>
                Suggest and implement process improvement plans, tracks progress, and achieves
                objectives.
              </li>
            </ul>
          </p>
          <h3 className="jobTitle">Intermediate QA Engineer, Scrum Master</h3>
          <h3 className="duration">Nov 2014 - Oct 2017</h3>
          <p>
            <ul className="workList">
              <li>
                Defined and developed quality initiatives with QA Director for the whole company to
                consume.
              </li>
              <li>
                Employed exploratory testing, writing scripted manual tests, end-to-end, and
                performance testing.
              </li>
              <li>
                Advise don developing performance criteria and validating products meet performance
                requirements.
              </li>
              <li>
                Developed practices and tools to facilitate quality with a high degree of test
                automation for highly scalable products.
              </li>
              <li>
                Identified and implemented Agile strategies to leverage the testing process and test
                tools.
              </li>
              <li>
                Participated as an embedded QA Engineer on projects and develop test cases and test
                scripts.
              </li>
              <li>
                Provided project teams knowledge on test strategy articulation, planning, execution,
                and management of individual testing events.
              </li>
              <li>
                Assisted in configuring, maintaining and monitoring of continuous integration
                servers.
              </li>
            </ul>
          </p>
        </TabPane>
        <TabPane
          tab={
            <div>
              <div>Competitive</div>
              <div>Edge Software</div>
            </div>
          }
          key="3"
        >
          <h3 className="jobTitle">QA Team Lead</h3>
          <h3 className="duration">May 2012 - Nov 2014</h3>
          <p>
            <ul className="workList">
              <li>
                Established, documented and enforced testing standards for the QA Department and
                team members.
              </li>
              <li>
                Managed team members and allocated resources to fit needs of sales, support, and
                training departments.
              </li>
              <li>Test validation in application layer, debug, and backend with SQL queries.</li>
              <li>
                Coordinated pre and post production software release with Team Foundation Server.
              </li>
              <li>Lead QA for Agile development teams for numerous projects.</li>
              <li>
                Pair programmed and supported software developers in real time during sprint
                execution while enforcing test driven development standards by using acceptance
                criteria, data validation and automated testing suites.
              </li>
              <li>
                Collaborated with development and support manager on timelines for new version
                releases.
              </li>
            </ul>
          </p>
        </TabPane>
        <TabPane
          tab={
            <div>
              <div>US Army</div>
            </div>
          }
          key="4"
        >
          <h3 className="jobTitle">SGT, Signal Support Systems Specialist (25U)</h3>
          <h3 className="duration">Mar 2011 - Apr 2018</h3>
          <p>
            <ul className="workList">
              <li>
                Troubleshot, maintained, operated, installed and fixed communication equipment at
                the company and battalion level. Enforced communication security policy and
                procedures.
              </li>
              <li>
                Implemented preventative maintenance procedures to ensure equipment stays
                operational and lead troops to accomplish missions based on battalion command chain.
              </li>
            </ul>
          </p>
        </TabPane>
      </Tabs>

      {/* --- STYLES --- */}
      <style jsx>{`
        .jobTitle {
          font-size: 1.2rem;
          line-height: 1.42857;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .duration {
          font-size: 1rem;
          color: ${theme.color.neutral.gray.g};
          font-weight: 550;
        }
        .workList {
          list-style-type: disc;
          display: list-item;
        }
      `}</style>
    </React.Fragment>
  )
}

Work.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Work

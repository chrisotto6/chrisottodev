import React from 'react'
import { Card, Progress } from 'antd'
import PropTypes from 'prop-types'
import 'antd/lib/card/style/index.css'
import 'antd/lib/progress/style/index.css'

const SkillCard = (props) => {
  const { item, percent } = props

  return (
    <React.Fragment>
      <div>
        <Card
          title={item}
          bordered={false}
          size="small"
          style={{ width: 165, textAlign: 'center', paddingRight: '10px', paddingLeft: '10px' }}
        >
          <Progress
            type="circle"
            strokeColor={{
              '0%': '#1890ff',
              '25%': '#1F75C5',
              '50%': '#25598A',
              '75%': '#27537C',
              '100%': '#2c3e50',
            }}
            percent={`${percent}`}
            format={() => ''}
            width={100}
            style={{ justifyContent: 'center' }}
          />
        </Card>
      </div>
    </React.Fragment>
  )
}

SkillCard.propTypes = {
  item: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
}

export default SkillCard

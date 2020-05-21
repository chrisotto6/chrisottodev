import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Input, Button, Divider } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  handleSubmit = async (e) => {
    const result = await addToMailchimp(this.state.email, { FNAME: this.state.name })
    if (result.result === 'error') {
      alert(`Whoops, ${this.state.name} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.name}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const layout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 },
    }

    const tailLayout = {
      wrapperCol: { offset: 5, span: 12 },
    }

    return (
      <React.Fragment>
        <Divider />
        <div className="subscribe">
          <h3 className="subscribeInfo">
            Like the article? Subscribe to get notified whenever a new article gets published!
          </h3>
          <Form {...layout} name="subscribe" onFinish={this.handleSubmit} layout="horizontal">
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}
            >
              <Input prefix={<MailOutlined />} onChange={this.handleEmailChange} />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name.' }]}
            >
              <Input prefix={<UserOutlined />} onChange={this.handleNameChange} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" shape="round">
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* --- STYLES --- */}
        <style jsx>{`
          .subscribe {
            .subscribeInfo {
              text-align: center;
              padding-bottom: 20px;
            }
          }
          .ant-form .ant-form-inline {
            justify-content: center;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

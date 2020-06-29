/* eslint no-unused-vars: 0 */
import { navigate } from 'gatsby'
import { Form, Input, Button } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'
import { ThemeContext } from '../../layouts'

const { TextArea } = Input

const ContactForm = (props) => {
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function sendMessage(values) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        console.log('Form submission success')
        navigate('/success')
      })
      .catch((error) => {
        console.error('Form submission error:', error)
        this.handleNetworkError()
      })
  }

  function handleNetworkError(e) {
    console.log('submit Error')
  }

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 },
  }

  const tailLayout = {
    wrapperCol: { offset: 3, span: 12 },
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="form">
            <Form
              {...layout}
              name="contact"
              onFinish={sendMessage}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Form.Item name="name" label="Name" rules={[{ whitespace: true }]}>
                <Input name="name" aria-label="name" />
              </Form.Item>
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your e-mail address!',
                    whitespace: true,
                    type: 'email',
                  },
                ]}
              >
                <Input name="email" aria-label="email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: 'Please input your message!', whitespace: true },
                ]}
              >
                <TextArea
                  name="message"
                  aria-label="message"
                  placeholder=""
                  autoSize={{ minRows: 4, maxRows: 10 }}
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" shape="round" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            {/* --- STYLES --- */}
            <style jsx>{`
              .form {
                background: transparent;
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 1em;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: ${theme.color.brand.primary};
                border: 1px solid ${theme.color.brand.primary};
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  )
}

ContactForm.propTypes = {
  form: PropTypes.object,
}

export default ContactForm

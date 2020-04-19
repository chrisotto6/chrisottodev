/* eslint no-unused-vars: 0 */
import { navigate } from 'gatsby'
import { Form, Input, Button } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeContext } from '../../layouts'

const FormItem = Form.Item
const { TextArea } = Input

const ContactForm = (props) => {
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        sendMessage(values)
      }
    })
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

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="form">
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <FormItem label="Name" rules={[{ whitespace: true }]}>
                <Input name="name" />
              </FormItem>
              <FormItem
                label="E-mail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your e-mail address!',
                    whitespace: true,
                    type: 'email',
                  },
                ]}
              >
                <Input name="email" />
              </FormItem>
              <FormItem
                label="Message"
                rules={[
                  { required: true, message: 'Please input your message!', whitespace: true },
                ]}
              >
                <TextArea name="message" placeholder="" autoSize={{ minRows: 4, maxRows: 10 }} />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
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

import React from 'react'
import Layout from '../components/common/layout'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>
          Your Name: <input type="text" placeholder="John Smith" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input type="email" placeholder="john@smith.com" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" placeholder="Hello!"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage

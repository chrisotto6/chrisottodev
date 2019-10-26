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
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input name="name" placeholder="Your Name" type="text" />
      </p>
      <p>
        <input name="email" placeholder="name@name.com" type="email" />
      </p>
      <p>
        <textarea name="message" />
      </p>
      <p>
        <button>Send</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage

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
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
  </Layout>
)

export default ContactPage

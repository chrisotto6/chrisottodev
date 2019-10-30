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
        <input name="name" aria-label="name" placeholder="John Smith" type="text" tabIndex="-1" />
      </p>
      <p>
        <input name="email" aria-label="email" placeholder="john@smith.com" type="email" tabIndex="-2" />
      </p>
      <p>
        <textarea name="message" aria-label="message" tabIndex="-3" />
      </p>
      <p>
        <button type="button">Send</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage

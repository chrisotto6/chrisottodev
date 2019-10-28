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

        <label for="name" class="visuallyhidden">Name:</label>
        <input name="name" id="name" placeholder="John Smith" type="text" /><br/>

      <p>
        <input name="email" label="email" placeholder="john@smith.com" type="email" />
      </p>
      <p>
        <textarea name="message" label="message" />
      </p>
      <p>
        <button type="button">Send</button>
      </p>
    </form>
  </Layout>
)

export default ContactPage

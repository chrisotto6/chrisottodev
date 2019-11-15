import React from 'react'
import ContactForm from '../components/common/contactForm'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage

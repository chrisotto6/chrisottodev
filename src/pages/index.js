import React from 'react'

import Layout from '../components/common/layout'
import Listing from '../components/blog/listing'
import SEO from '../components/common/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Listing />
  </Layout>
)

export default IndexPage

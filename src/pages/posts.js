import React from 'react'
import Layout from '../components/common/layout'
import Listing from '../components/blog/listing'
import SEO from '../components/common/seo'

const Posts = () => (
  <Layout>
    <h1>Posts</h1>
    <SEO title="Posts" />
    <Listing />
  </Layout>
)

export default Posts

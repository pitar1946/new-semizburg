import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../css/front-page.css'

const IndexPage = () => (
<StaticQuery
query={graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`}

render={data => (
  <>
  <Layout>
  <SEO title="Semizburg"  keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
  <div className="front-page-cover">
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
    </Layout>
  </>
)}
/>
)

export default IndexPage



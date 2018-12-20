import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby';
import { Link } from 'gatsby'

const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
    <div className="container mt-5">
      {data.allMarkdownRemark.edges.map(post => {
          return <div key={post.node.id} className='mb-5'>
           <h1 className='heading'>{post.node.frontmatter.title}</h1>
           <hr/>
           <div className='post-preview'>
             <h3 className='mb-3'>{post.node.frontmatter.subtitle}</h3>
             <p className='mb-3'>{post.node.excerpt}</p>
             <small>{post.node.frontmatter.date} Sarajevo</small>
           </div>
           <Link to={post.node.frontmatter.path}>Read More ...</Link>
          </div>
      })}
    </div> 
  </Layout>
)

export const pageQuery = graphql`
   query BlogIndexQuery {
        allMarkdownRemark(
            sort:{ fields: [frontmatter___date], order: ASC}
           ){
          edges{
            node{
              id
              frontmatter{
                path
                date
                title
                subtitle
              }
              excerpt
            }
          }
        }
   }
`
export default Blog



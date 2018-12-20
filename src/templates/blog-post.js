import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>  
      <Link to="/blog">Go Back</Link>   
    <div className='container'>
      <h1>{post.frontmatter.title}</h1>
      <hr />
      <h3 className='mb-5'>{post.frontmatter.subtitle}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
   </div> 
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        date
      }
    }
  }
  `

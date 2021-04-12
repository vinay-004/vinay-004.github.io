import React from 'react'
import Layout from '../components/layout'
import {graphql, Link, useStaticQuery} from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    return (
        <Layout>
            <h1> Blog</h1>
            <p> All blogpost are here.</p>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => (
                    <li> 
                      <Link to = {edge.node.fields.slug}>
                        <h3>{edge.node.frontmatter.title}</h3>
                      </Link>
                        <p>{edge.node.frontmatter.date}</p>
                      
                      
                    </li>
                ))}
            </ol>
                    
                
          
        </Layout>     
    )
}

export default BlogPage
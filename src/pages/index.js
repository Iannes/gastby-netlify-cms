import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image";
import Portfolio from "../components/card";
import SEO from "../components/seo";
import "../components/blog-list.css"

export default ({ data }) => {
  return (
    <Layout>
      <section>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Side Projects Showcase</h1>
      <p>
        <a target='_blank' rel="noopener noreferrer" href='https://yannisspyrou.co.uk/'>Yannis Spyrou</a>
      </p>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
        <h4>{data.allMarkdownRemark.totalCount} React Projects</h4>
        <section className='portfolio__container'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Portfolio node={node} />
          </div>
        ))}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
          excerpt
        }
      }
    }
  }
`
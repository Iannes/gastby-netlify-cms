import React from "react"
import {graphql} from "gatsby"

const BlogList = ({data}) => {
    console.log(data)
    return(
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id} className="article-box">
          <h3 className="title">{node.frontmatter.title}</h3>
          <p className="author">{node.frontmatter.author}</p>
          <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
          <p className="excerpt">{node.excerpt}</p>
        </div>
      ))}
    </div>
    )
  }

export const query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
          author
        }
        excerpt
        timeToRead
      }
    }
  }
}
`
  export default BlogList
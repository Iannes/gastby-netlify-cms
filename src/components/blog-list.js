import React from "react"
import {graphql} from "gatsby"

const BlogList = ({data}) => {
    console.log(data)
    return(
    <div>
        <section className="card__container">
        {
            data.allMarkdownRemark.edges.map(({node}) => (
                <article className="card" key={node.id}>
                    <header></header>
                    <article className="card-title__container">
                        <h4>{node.frontmatter.title}</h4>
                        <p className='grey'>By {node.frontmatter.author}</p>
                    </article>
                    <section className="main-content">
                        <p className='grey'>{node.excerpt}</p>
                    </section>
                    <section className="card-footer">
                        <nav>
                            <ul>
                                <li><a href="">Site</a></li>
                                <li><a href="">Code</a></li>
                                <li><a href="">Like</a></li>
                                <li><a href="">Share</a></li>
                            </ul>
                        </nav>
                    </section>
                </article>        
        ))}        
        </section>
    </div>
    )
  }

export const query = graphql`
query HomePageQuery{
  allMarkdownRemark {
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
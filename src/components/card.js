import React from 'react'
import { Link } from "gatsby"

const Card = props =>  {
    const node = props.node
    return (
        <Link
        to={node.frontmatter.path}
        style={{ textDecoration:`none`, color: `inherit`,  }}
      >
        <article className="card">
              <header></header>
              <article className="card-title__container">
                  <h4>{node.frontmatter.title}</h4>
                  <p className='grey'>By {node.frontmatter.title}</p>
              </article>
              <section className="main-content">
                  <p className='grey'>{node.excerpt}</p>
              </section>
              <section className="card-footer">
                  <nav>
                      <ul>
                          <li>Site</li>
                          <li>Code</li>
                          <li>Like</li>
                          <li>Share</li>
                      </ul>
                  </nav>
              </section>
          </article>   
      </Link> 
    )
  }

  export default Card;


 
import { Link } from "gatsby"
import React from "react"


const ListLink = props => (
    <li>
      <Link style={{ 
        textDecoration: `none`,
        color: `inherit`,       
      }}
        to={props.to}>{props.children} 
        </Link>
    </li>
  )

  const Nav = () => {
    return <ul style={{ 
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-around`,        
        flex: `1`,    
        }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/portfolio">Portfolio</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
  }

  export default Nav
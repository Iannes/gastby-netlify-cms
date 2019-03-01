import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import Container from './container'

const headerStyles ={  
    background: 'rgb(216, 94, 42)',
    marginBottom: `1.45rem`,      
    marginTop:'0px',
    display:'block',
    boxShadow:'0px 0px 7px black'
};

const linkStyles = {
  color: `white`,
  textDecoration: `none`,
  flex: `1`,
}

const containerSTYLES ={
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem 0`,
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `flex-end`
};



const Logo = props => (  
    <Link style={linkStyles}
      to={props.to}><h1>{props.children}</h1>         
    </Link>  
)


const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <Container style={containerSTYLES}>
        <Logo to='/'>{siteTitle}</Logo>
        <Nav />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

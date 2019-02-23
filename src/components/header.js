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

const Logo = props => (  
    <Link style={linkStyles}
      to={props.to}><h1>{props.children}</h1>         
    </Link>  
)


const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <Container>
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

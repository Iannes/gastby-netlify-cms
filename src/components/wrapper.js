import React from "react"

const wrapperStyles ={
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,    
};

const Wrapper = props => (
    
    <article style={wrapperStyles}>    
        {props.children}
    </article>
)

export default Wrapper;



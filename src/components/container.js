import React from "react"

const containerStyles ={
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
    display: `flex`,
    justifyContent: `space-between` 
};

const Container = props => (
    <section style={containerStyles}>
        {props.children}
    </section>
)

export default Container;
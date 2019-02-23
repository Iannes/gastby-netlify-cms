import React from "react"

const containerStyles ={
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem 0`,
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `flex-end`
};

const Container = props => (
    <section style={containerStyles}>
        {props.children}
    </section>
)

export default Container;
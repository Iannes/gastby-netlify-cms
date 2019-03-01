import React from "react"

const Container = props => (
    <section style={props.style}>
        {props.children}
    </section>
)

export default Container;
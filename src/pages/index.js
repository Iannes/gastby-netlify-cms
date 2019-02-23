import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
// import BlogList from "../components/blog-list"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to my Gatsby Blog.</p>    
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/about/">About me</Link>
  </Layout>
)

export default IndexPage

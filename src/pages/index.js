import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import Header from "../components/Header"
import Projects from "../components/Projects"
import ProjectsTwo from "../components/ProjectTwo"
import ProjectThree from "../components/ProjectThree"
import Toolbox from "../components/Toolbox"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Daniel Kapper"
          keywords={[`Daniel Kapper`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
        <Projects />
        <ProjectsTwo />
        <ProjectThree />
        <Toolbox />
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage

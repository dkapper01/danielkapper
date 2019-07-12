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
// import BlogList from "../components/BlogList"
import Banner from "../utils/Banner"
import Icons from "../components/landingPage/Icons"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Daniel Kapper`, `gatsby`, `javascript`, `react`]}
        />
        <Header home="true">
          <Banner
            name="I'm Daniel"
            title="I like to build cool websites"
            subtitle="That create fast and secure sites and dynamic apps with JavaScript,
          APIs, and prerendered Markup, served without web servers."
          >
            <Icons />
          </Banner>
        </Header>
        <Projects />
        <ProjectsTwo />
        <ProjectThree />
        {/* <BlogList /> */}
        <Toolbox />

        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
            subtitle="that are fast, secure and dynamic with JavaScript, APIs, and prerendered Markup, sometimes served without a web server. #JAMstack"
          >
            <Icons />
          </Banner>
        </Header>
        <Projects />
        <ProjectsTwo />
        <ProjectThree />
        {/* <BlogList /> */}
        <Toolbox />
      </Layout>
    )
  }
}

export default IndexPage

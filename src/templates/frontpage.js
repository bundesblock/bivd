import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import Splash from '../components/frontpage/Splash'
import PartnerLogos from '../components/frontpage/PartnerLogos'
import Initiative from '../components/frontpage/Initiative'
import WhyBlockchain from '../components/frontpage/WhyBlockchain'
import TalkToUs from '../components/frontpage/TalkToUs'
import Vision from '../components/frontpage/Vision'
import Topics from '../components/frontpage/Topics'
import Partners from '../components/frontpage/Partners'
import OffsetAnchor from '../components/OffsetAnchor'

class Page extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.frontmatter.title}
          description={page.excerpt}
          path={page.frontmatter.slug}
          cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        />
        <OffsetAnchor name="top" />
        <Splash/>
        <PartnerLogos />
        <Wrapper>
          <Initiative/>
          <WhyBlockchain/>
        </Wrapper>
        <TalkToUs/>
        <Vision/>
        <Topics/>
        <Partners/>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query Frontpage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
      }
    }
  }
`

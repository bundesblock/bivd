import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import TalkToUs from '../components/frontpage/TalkToUs'

class BlogList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges').filter(n => n.node.frontmatter.type === 'post')
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Hero title="Blog" />

        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
        <TalkToUs/>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          html
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "de")
            title
            authorName
            authorEmail
            tags
            language
            slug
            type
            cover {
              publicURL
            }
          }
        }
      }
    }
  }
`

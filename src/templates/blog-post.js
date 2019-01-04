import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import TalkToUs from '../components/frontpage/TalkToUs'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageFb={
            post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
          }
          imageTw={
            post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
          }
          lang={post.frontmatter.language}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Hero
          title="Blog Beitrag"
        />


        {post.frontmatter.cover && post.frontmatter.cover.publicURL &&
          <div className="text-center">
            <img src={post.frontmatter.cover.publicURL} className="img-fluid" style={{ maxHeight: '400px' }}/>
          </div>
        }

        <Wrapper>
          <Article post={post} />
        </Wrapper>
        <TalkToUs/>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        authorName
        authorEmail
        date(formatString: "DD MMMM YYYY", locale: "de")
        slug
        language
        tags
        cover {
          publicURL
        }
      }
    }
  }
`

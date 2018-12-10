import React from 'react'
import styled from 'styled-components'
import Bio from './Bio'
import Content from './Content'
import TalkToUs from './frontpage/TalkToUs'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ebf2f6;
`

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <React.Fragment>
      <ArticleWrapper>
        <Content
          content={post.html}
          title={post.frontmatter.title}
          authorName={post.frontmatter.authorName}
          authorEmail={post.frontmatter.authorEmail}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
      </ArticleWrapper>
      </React.Fragment>
    )
  }
}

export default Article

import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            authorName: post.node.frontmatter.authorName,
            authorEmail: post.node.frontmatter.authorEmail,
            excerpt: post.node.excerpt,
            slug: post.node.frontmatter.slug,
            date: post.node.frontmatter.date,
            language: post.node.frontmatter.language || 'fr',
            tags: post.node.frontmatter.tags || [],
            coverImage: post.node.frontmatter.cover && post.node.frontmatter.cover.publicURL,
            post: post.node,
          }
          return <PostsListItem key={props.slug} {...props} />
        })}
      </Fragment>
    )
  }
}
export default PostsList

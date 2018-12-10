import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'

const Header = styled.header`
  margin-bottom: 2rem;
  color: #7f7e7e;
`

class ContentIntro extends React.Component {
  render() {
    const { title, authorName, authorEmail, date, tags } = this.props
    console.log(authorName, authorEmail)
    return (
      <>
        <h2>{title}</h2>
        <Header>
          {date && <time>{date}</time>}
          {Array.isArray(tags) && tags.length > 0 && (
            <Fragment>
              <span> in</span>
              <TagList tags={tags} />
            </Fragment>
          )}
        </Header>
        {authorName && !authorEmail && <p>Von: {authorName}</p>}
        {authorName && authorEmail &&
          <p>Von: <a href={`mailto:${authorEmail}`}>{authorName}</a></p>
        }
      </>
    )
  }
}

export default ContentIntro

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import bivdLogo from '../assets/bivd-logo.png'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #eee;
  color: #666;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 1em;
      padding-right: 1em;
    }
  }

  & a {
    color: #666;
    font-weight: bold;

    &:hover {
      color: #2196F3;
      border-bottom: 1px dotted #e8e8e8;
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 1rem;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: #666;
  }

  .footer-heart {
    color: red;
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: #666;
    font-weight: bold;
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
  
  
  
.footer-bottom-area {
    text-align: center;
}
.footer-links {
    padding-bottom: 15px;
}
.footer-links ul li {
    display: inline-block;
}
.footer-links ul li a {
    padding: 0 10px;
}
.footer-links ul li a {
    border-right: 1px solid #bfbfbf;
}
.footer-links ul li:last-child a {
    border-right: medium none;
}
.footer-logo {
    padding-bottom: 20px;
}
.copyright-text a {
    color: #2196F3;
}


p {
  font-size: 15px;
  font-weight: bold;
}

`

class Footer extends React.Component {
  render() {
    const { authorName, footerLinks, websiteHost } = this.props.siteConfig

    const FooterItem = ({ item }) => {
      if (typeof item === 'string') {
        return (
          <h5 className="footer-title" key={item}>
            {item}
          </h5>
        )
      }
      if (item.url.startsWith('/')) {
        return (
          <span className="footer-item">
            <Link className="footer-link" to={item.url}>
              {item.label}
            </Link>
          </span>
        )
      }
      return (
        <span className="footer-item">
          <a className="footer-link" href={item.url}>
            {item.label}
          </a>
        </span>
      )
    }

    const FooterColumn = ({ column }) => {
      return (
        <div className="footer-col">
          {column.map((item, i) => {
            return <FooterItem item={item} key={`footer-column-item-${i}`}/>
          })}
        </div>
      )
    }

    return (
      <FooterWrapper>
        <footer>
          <div className="footer-area themeix-ptb">
            <div className="container">
              <div className="row">


                <div className="col-md-3">
                  <div className="single-footer">
                    <h5 className="footer-heading">BiVD</h5>
                    <div className="single-footer-text">
                      <p>Eine Initiative von Bund, Ländern und Unternehmen zur Entwicklung essentieller Basisinfrastruktur in Deutschland, für eine
                        moderne und rechtssichere Verwaltung.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="single-footer">
                    <h5 className="footer-heading">Neuigkeiten</h5>
                    <div className="footer-list">
                      <p><a href="/blog">BiVD Blog</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-footer">
                    <h5 className="footer-heading">Social Media</h5>
                    <div className="footer-list">
                      <span><a href="https://twitter.com/bivd_init" target="_blank"><i className="fa fa-twitter"></i></a></span>
                      <span><a href="https://github.com/bundesblock/bivd" target="_blank"><i className="fa fa-github"></i></a></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single-footer">
                    <h5 className="footer-heading">Newsletter</h5>
                    <p>Der BiVD informiert gelegentlich über neue Entwicklungen.</p>
                    <div className="subscribe-form">
                      <form action="https://formspree.io/newsletter@bivd-initiave.de" method="post">
                        <div className="input-group">
                            <input type="email" name="subscribe" id="subscribe" className="form-control" placeholder="Email" required />
                          <div className="input-group-append">
                          <button type="submit" className="btn btn-primary">Los</button>
                          </div>
                        </div>
                      </form>
                      <small>Wir möchten Spam vermeiden</small>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="footer-bottom-area themeix-pb">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="footer-bottom">
                    <div className="footer-logo">
                      <img src={bivdLogo}
                           style={{ width: '128px' }}
                           alt="BiVD - Blockchain in der Verwaltung Deutschland" />
                    </div>
                    <div className="footer-links">
                      <ul>
                        <li><a href="/privacy">Datenschutz</a></li>
                        <li><a href="/imprint">Impressum</a></li>
                      </ul>
                    </div>
                    <div className="copyright-text">
                      <small>Zeichnungen von <a href="https://twitter.com/lawmeetsart" target="_blank">Dalia Moniat</a></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-top">
            <div className="scroll-icon">
              <a href="#top"><i className="fa fa-angle-up"></i></a>
            </div>
          </div>
        </footer>
      </FooterWrapper>
    )
  }
}

export default Footer

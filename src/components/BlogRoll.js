import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='columns is-multiline'>
        <div className='is-parent column is-3 '>
          <h1>Texte a propos du blog...</h1>
          <p>Bla bla bla bla bla bla bla......................</p>
          <hr
            style={{
              marginTop: "2rem",
            }}
          />
          <h3>S'abbonner :</h3>
          <ul
            style={{
              listStyle: "none",
              textAlign: "left",
            }}
          >
            <li>
              <Link className='button' to='#'>
                ✉️ &nbsp; E-Mail
              </Link>
            </li>
            <li>
              <Link className='button' to='#'>
                🔔 &nbsp; Notification
              </Link>
            </li>
          </ul>
        </div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-3 ' key={post.id}>
              <article
                className={` tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className='featured-thumbnail'>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className='post-meta'>
                    <Link
                      className='title has-text-primary is-size-4'
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span className='subtitle is-size-6 is-block'>
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <hr />
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className='button' to={post.fields.slug}>
                    Lire l'article →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

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
        {posts &&
          posts.map(({ node: post }) => (
            <div className='is-parent column is-3' key={post.id}>
              <article
                className={`tile is-child ${
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
                  <p className='post-meta'
                  style={{
                    marginTop: "1em"
                  }}>
                    <Link
                      className='title is-size-4'
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </header>
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

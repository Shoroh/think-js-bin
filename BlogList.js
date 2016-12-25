const BlogList = ({ posts }) => (
  DOM.ul(
    null,
    _.map(
      posts,
      (post, key) => (
        DOM.li({ key },
          React.createElement(BlogItem, { post }))
      )
    )
  )
)

BlogList.defaultProps = {
  posts: []
}

BlogList.propTypes = {
  posts: PropTypes.array
}

class BlogItem extends React.Component {

  render() {
    const { post } = this.props;

    return DOM.div(null,
      React.createElement(MetaInfo,
        {
          authorName: post.authorName,
          createdAt: post.createdAt
        }
      ),

      React.createElement(Image, {
        src: post.imageSrc,
        alt: post.text,
      }),

      React.createElement(TextBox, { text: post.text }),

      React.createElement(LikeBtn, { likes: post.likes })
    )
  }
}

BlogItem.propTypes = {
  post: PropTypes.object
}

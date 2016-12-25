
const posts = [
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #1'
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #2'
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #3'
  }
]

const DOM = React.DOM;

const Image = (props) => (
  DOM.img(props)
)

const TextBox = ({ text }) => (
  DOM.span(null, text)
)

class BlogItem extends React.Component {

  render() {
    const { post } = this.props;

    return DOM.div(null,

        React.createElement(Image, {
          src: post.imageSrc,
          alt: post.text,
          width: '100px' }),

        React.createElement(TextBox, { text: post.text })

    )
  }
}

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


class BlogPage extends React.Component {
  render() {
    const { posts } = this.props;
    return React.createElement(BlogList, { posts });
  }
}

ReactDOM.render(
  React.createElement(BlogPage, { posts }),
  document.getElementById('app')
);

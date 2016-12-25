const posts = [
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #1',
    authorName: 'Aleksandr Shelestov',
    createdAt: '1995-12-25',
    likes: 10
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #2',
    authorName: 'John Rambo',
    createdAt: '2016-12-25 10:34',
    likes: 2
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #3',
    authorName: 'Bruce Willis',
    createdAt: '2016-12-23 11:34',
    likes: 1
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #3',
    createdAt: '2016-11-23 11:34',
    likes: 3
  }
]

const DOM = React.DOM;
const PropTypes = React.PropTypes;
const { bind } = _;

const Image = (props) => (
  DOM.img(props)
)

Image.defaultProps = {
  width: '100px',
  alt: ''
}

Image.propTypes = {
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string
}

class LikeBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { likes: props.likes }
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      DOM.div(null,
        DOM.span(null, this.state.likes),
        DOM.button({onClick: this.handleClick}, 'Like!')
      )
    )
  }
}

LikeBtn.defaultProps = {
  likes: 0
}

LikeBtn.propTypes = {
  likes: PropTypes.integer
}

const TextBox = ({ text }) => (
  DOM.span(null, text)
)

TextBox.propTypes = {
  text: PropTypes.string
}

const MetaInfo = ({ authorName, createdAt }) => (
  DOM.div(null,
          DOM.span(null, authorName),
          DOM.span(null, moment(createdAt).fromNow())
         )
)

MetaInfo.defaultProps = {
  authorName: 'Anonymus'
}

MetaInfo.propTypes = {
  authorName: PropTypes.string,
  createdAt: PropTypes.string,
}


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

class BlogPage extends React.Component {
  render() {
    const { posts } = this.props;
    return React.createElement(BlogList, { posts });
  }
}

BlogPage.propTypes = {
  posts: PropTypes.array
}

ReactDOM.render(
  React.createElement(BlogPage, { posts }),
  document.getElementById('app')
);

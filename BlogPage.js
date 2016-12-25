class BlogPage extends React.Component {
  render() {
    const { posts } = this.props;
    return React.createElement(BlogList, { posts });
  }
}

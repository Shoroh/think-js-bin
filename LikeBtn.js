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

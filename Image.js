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

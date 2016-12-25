const TextBox = ({ text }) => (
  DOM.span(null, text)
)

TextBox.propTypes = {
  text: PropTypes.string
}

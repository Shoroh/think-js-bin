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

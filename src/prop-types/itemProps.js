import propTypes from 'prop-types'

const itemProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    bannerUrl: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  })
})

export default itemProps

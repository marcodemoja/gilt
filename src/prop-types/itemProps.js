import PropTypes from 'prop-types'

const itemProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  user: PropTypes.shape({
    gmapUrl: PropTypes.string,
    avatarUrl: PropTypes.string,
    bannerUrl: PropTypes.string,
    profileUrl: PropTypes.string,
    displayName: PropTypes.string
  })
})

export default itemProps

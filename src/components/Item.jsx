import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {

  static propTypes = {
    item: PropTypes.shape({
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
  }

  render() {
    return (
      <tr id={this.props.country}>
                <td>{this.props.country}</td>
                <td className="all">{this.props.medals}</td>
                <td className="gold">{this.props.gold.length}</td>
                <td className="silver">{this.props.silver.length}</td>
                <td className="bronze">{this.props.bronze.length}</td>
            </tr>
    )
  }
}

export default Item

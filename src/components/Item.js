import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'

class Item extends React.Component {

  static propTypes = {
    item: itemProps
  }

  render() {
    return (<div></div>)
  }
}

export default Item

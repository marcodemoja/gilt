import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'

class List extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(itemProps),
    miniPreview: PropTypes.object,
    onShowMiniPreview: PropTypes.func,
    onLoadItems: PropTypes.func
  }

  fetchItems() {
    let items = this.props.items
    let itemsList = items.map((items, i) => {
      return <div className='items'></div>
    })
    return itemsList
  }

  componentDidMount() {
    this.props.onLoadItems && this.props.onLoadItems()
  }

  render() {
    return (<div>{this.fetchItems()}</div>)
  }
}

export default List

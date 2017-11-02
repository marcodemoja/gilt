import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'
import { List, Image } from 'semantic-ui-react'

class ListContainer extends React.Component {

  static propTypes = {
    items: PropTypes.arrayOf(itemProps),
    miniPreview: PropTypes.object,
    onShowMiniPreview: PropTypes.func,
    onLoadItems: PropTypes.func
  }

  fetchItems() {
    let items = this.props.items
    let itemsList = items.map((items, i) => {
      return <List.Item key={i}>
        <List.Content>
          <List.Header as='h4'>Header</List.Header>
          <List.Description><Image src='/assets/images/wireframe/short-paragraph.png' /></List.Description>
        </List.Content>
      </List.Item>
    })
    return itemsList
  }

  componentDidMount() {
    this.props.onLoadItems && this.props.onLoadItems()
  }

  render() {
    return (<List>{this.fetchItems()}</List>)
  }
}

export default ListContainer

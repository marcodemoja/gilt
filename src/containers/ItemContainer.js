import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'
import { Image, List } from 'semantic-ui-react'

class ItemContainer extends React.Component {

  static propTypes = {
    item: itemProps
  }

  render() {
    return (<List.Item>
          <List.Content>
            <List.Header as='a'>Header</List.Header>
            <List.Description><Image src='/assets/images/wireframe/short-paragraph.png' /></List.Description>
          </List.Content>
        </List.Item>)
  }
}

export default ItemContainer

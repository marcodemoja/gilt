import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'
import { Image, Item } from 'semantic-ui-react'

class ItemContainer extends React.Component {

  static propTypes = {
    item: itemProps
  }

  render() {
    return (<div>
          <Item>
            <Item.Image size='tiny' src='' />
            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src='/assets/images/wireframe/short-paragraph.png' />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </div>)
  }
}

export default ItemContainer

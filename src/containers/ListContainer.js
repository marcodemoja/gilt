import React from 'react'
import PropTypes from 'prop-types'
import itemProps from '../prop-types/itemProps'
import { List } from 'semantic-ui-react'
import {ItemContainer} from 'ItemContainer'

class ListContainer extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(itemProps)
    }

    fetchItems() {
      let itemsList = []
      let items = this.props.items
      for(let i in items) {
        itemsList.push(<ItemContainer key={i} ...item[i] />)
      }
    }

    render(){
        return (<List>
        </List>)
    }
}

function mapStateToProps() {

}

function mapDispatchToProps() {

}

export default ListContainer

import React from 'react'
import PropTypes from 'prop-types'
import Tab from '../components/Tab'
import TabPane from '../components/TabPane'
import List from '../components/List'
import itemsProps from '../prop-types/itemProps'

class TabContainer extends React.Component {
  static propTypes = {
    panes: PropTypes.node,
    activePane: PropTypes.number
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (<Tab></Tab>)
  }

}

export default TabContainer

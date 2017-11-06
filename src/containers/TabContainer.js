import React from 'react'
import PropTypes from 'prop-types'
import Tab from '../components/Tab'
import TabPane from '../components/TabPane'
import List from '../components/List'
import itemProps from '../prop-types/itemProps'
import { connect } from 'react-redux'

class TabContainer extends React.Component {
  static propTypes = {
    kitties: PropTypes.arrayOf(itemProps),
    puppies: PropTypes.arrayOf(itemProps),
    activePane: PropTypes.number,
    onLoadKitties: PropTypes.func,
    onLoadPuppies: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  setUpPanes() {
    let {kitties, puppies} = this.props

    return [
      <TabPane content={<List items={kitties} onLoadItems={this.onLoadKitties} />} />,
      <TabPane content={<List onLoadItems={this.onLoadPuppies} items={puppies} />} />
    ]

  }

  render() {
    return (<Tab activePane={this.props.activePane} panes={this.setUpPanes()}></Tab>)
  }

}

function mapStateToProps(state) {
  return {
    ...state
  }
}


export default connect(mapStateToProps)(TabContainer)

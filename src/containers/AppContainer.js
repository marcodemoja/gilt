import React from 'react'
import { Container, Header, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchTab, showMiniPreview, fetchLatestGiphies } from '../actions'
import ListContainer from './ListContainer'
import itemProps from '../prop-types/itemProps'


class AppContainer extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    dispatchOnSwitchTab: PropTypes.func,
    dispatchOnShowMiniPreview: PropTypes.func,
    dispatchOnLoadPuppies: PropTypes.func,
    dispatchOnLoadKitties: PropTypes.func,
    activeTab: PropTypes.number,
    puppies: PropTypes.arrayOf(itemProps),
    kitties: PropTypes.arrayOf(itemProps)
  }

  constructor(props) {
    super(props);
    this.handleSwitchTab = this._handleSwitchTab.bind(this)
    this.onLoadKitties = this._onLoadKitties.bind(this)
    this.onLoadPuppies = this._onLoadPuppies.bind(this)
  }

  tabPanes =[
    {
      menuItem: 'Puppies',
      render: () => <Tab.Pane loading><ListContainer onLoadItems={this.onLoadPuppies} onShowMiniPreview={this.handleShowMiniPreview} items={this.props.puppies} /></Tab.Pane>
    },
    {
      menuItem: 'Kitties',
      render: () => <Tab.Pane loading><ListContainer onLoadItems={this.onLoadKitties} onShowMiniPreview={this.handleShowMiniPreview} items={this.props.kitties} /></Tab.Pane>
    }
  ]

  _handleSwitchTab(e, {activeTab}) {
    this.props.dispatchOnSwitchTab(activeTab)
  }

  handleShowMiniPreview(e, {previewObj}) {
    this.props.dispatchOnShowMiniPreview(previewObj)
  }

  _onLoadPuppies() {
    this.props.dispatchOnLoadPuppies()
  }

  _onLoadKitties() {
    this.props.dispatchOnLoadKitties()
  }

  render() {
    const {activeTab} = this.props

    return (<div><Container fluid>
      <Header as='h2'>Puppies & Kitties</Header>
      <Tab panes={this.tabPanes} activeIndex={activeTab} onTabChange={this.handleSwitchTab} />
    </Container></div>)
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchOnSwitchTab: (tabIndex) => {
      dispatch(switchTab(tabIndex))
    },
    dispatchOnShowMiniPreview: (item) => {
      dispatch(showMiniPreview(item))
    },
    dispatchOnLoadKitties: () => {
      dispatch(fetchLatestGiphies('Kitties'))
    },
    dispatchOnLoadPuppies: () => {
      dispatch(fetchLatestGiphies('Puppies'))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

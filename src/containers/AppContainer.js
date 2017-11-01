import React from 'react'
import { Container, Header, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchTab, showMiniPreview, fetchLatestGiphies } from '../actions'
import ListContainer from './ListContainer'
import itemProps from '../prop-types/itemProps'


class AppContainer extends React.Component {

  static propTypes = {
    dispatchOnSwitchTab: PropTypes.func,
    dispatchOnShowMiniPreview: PropTypes.func,
    dispatchRequestPuppies: PropTypes.func,
    dispatchRequestKitties: PropTypes.func,
    activeTab: PropTypes.number,
    puppies: PropTypes.arrayOf(itemProps),
    kitties: PropTypes.arrayOf(itemProps)
  }

  constructor(props) {
    super(props);
    this.handleSwitchTab = this._handleSwitchTab.bind(this)
  }

  tabPanes =[
    {
      menuItem: 'Puppies',
      render: () => <Tab.Pane loading><ListContainer onShowMiniPreview={this.handleShowMiniPreview} items={this.props.puppies} /></Tab.Pane>
    },
    {
      menuItem: 'Kitties',
      render: () => <Tab.Pane loading><ListContainer onShowMiniPreview={this.handleShowMiniPreview} items={this.props.kitties} /></Tab.Pane>
    }
  ]

  _handleSwitchTab(e, {activeTab}) {
    this.props.dispatchOnSwitchTab(activeTab)
  }

  handleShowMiniPreview(e, {previewObj}) {
    this.props.dispatchOnShowMiniPreview(previewObj)
  }

  componentDidMount() {
    fetchLatestGiphies('Puppies')
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

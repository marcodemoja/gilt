import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchTab, showMiniPreview, fetchLatestGiphies } from '../actions'
import ListContainer from './ListContainer'
import itemProps from '../prop-types/itemProps'
import Pagination from 'rc-pagination'
import Tab from '../components/Tab'
import TabPane from '../components/TabPane'


class AppContainer extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    dispatchOnSwitchTab: PropTypes.func,
    dispatchOnShowMiniPreview: PropTypes.func,
    dispatchOnLoadPuppies: PropTypes.func,
    dispatchOnLoadKitties: PropTypes.func,
    activeTab: PropTypes.number,
    puppies: PropTypes.arrayOf(itemProps),
    kitties: PropTypes.arrayOf(itemProps),
    kittiesTabLoading: PropTypes.bool,
    puppiesTabLoading: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.handleSwitchTab = this._handleSwitchTab.bind(this)
    this.onLoadKitties = this._onLoadKitties.bind(this)
    this.onLoadPuppies = this._onLoadPuppies.bind(this)
  }

  _handleSwitchTab(e, activeTab) {
    if (activeTab.activeIndex == 0)
      this.props.dispatchOnLoadPuppies()
    else
      this.props.dispatchOnLoadKitties()
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

    return (<div>
        <Tab></Tab>
      </div>)
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

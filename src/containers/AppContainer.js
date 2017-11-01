import React from 'react'
import { Container, Divider, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchTab } from './actions'
import { itemProps } from '../prop-types/itemProps'


class App extends Component {
  tabPanes =[
    {
      menuItem: 'Puppies',
      render: () => <Tab.Pane loading>put my component here</Tab.Pane>
    },
    {
      menuItem: 'Kitties',
      render: () => <Tab.Pane loading>put my component here</Tab.Pane>
    }
  ]

  handleSwitchTab = (e, {activeTab}) => this.props.dispatchOnSwitchTab(activeTab)

  static propTypes = {
    dispatchOnSwitchTab: React.PropTypes.func,
    activeTab: PropTypes.number,
    isLoading: PropTypes.bool,
    puppies: PropTypes.arrayOf(itemProps),
    kitties: PropTypes.arrayOf(itemProps),
  }

  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    const {activeTab} = this.props

    return (<div><Tab panes={this.tabPanes} activeIndex={activeTab} onTabChange={this.handleSwitchTab} /></div>)
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }

  function mapDispatchToProps(dispatch) {
    return {
      dispatchOnSwitchTab: (tabIndex) => {
        dispatch(switchTab(tabIndex))
      }

    }
  }
}

export default connect(mapStateToProps)(AsyncListContainer)

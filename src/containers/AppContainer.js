import React from 'react'
import { Container, Header, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchTab } from './actions'


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
    activeTab: PropTypes.number
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
    ...state.activeTab
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

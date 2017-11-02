import React from 'react'
import PropTypes from 'prop-types'

class TabPane extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    content: PropTypes.node,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="tab-pane">{this.props.content}</div>)
  }

}

export default TabPane

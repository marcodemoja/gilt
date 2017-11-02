import React from 'react'
import PropTypes from 'prop-types'

class Tab extends React.Component {

  static propTypes = {
    panes: PropTypes.arrayOf(PropTypes.node)
  }

  constructor(props) {
    super(props)
  }

  renderButtons() {
    return this.props.panes.map((pane, i) => <button key={i} className='tablinks' onClick={false}></button>)
  }

  renderPanes() {
    return this.props.panes.map((pane, i) => <div className="tabcontent">{pane}</div>)
  }

  render() {
    return (<div><div class='tab'>{this.renderButtons()}</div>{this.renderPanes()}</div>)
  }

}

export default Tab

import React from 'react'
import { connect } from 'react-redux'
import {fetchMedals} from '../actions'
import {DropdownButton, MenuItem, ButtonGroup} from 'react-bootstrap'

class FiltersContainer extends React.Component{

    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        selectedFilter: React.PropTypes.string
    }

    handleFilter(type){
        this.props.dispatch(fetchMedals(type))
    }

    render(){
        return (<ButtonGroup className="filterButton">
                <DropdownButton id="bg-justified-dropdown" title="Filter">
                    <MenuItem onClick={e => this.handleFilter('gold')}>Gold</MenuItem>
                    <MenuItem onClick={e => this.handleFilter('silver')}>Silver</MenuItem>
                    <MenuItem onClick={e => this.handleFilter('bronze')}>Bronze</MenuItem>
                    <MenuItem onClick={e => this.handleFilter('all')}>All</MenuItem>
                </DropdownButton>
        </ButtonGroup>)
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(FiltersContainer)
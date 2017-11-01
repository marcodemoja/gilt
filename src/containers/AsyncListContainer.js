import React, { PropTypes } from 'react'
import List from '../components/List'
import FiltersContainer from './FiltersContainer'
import { connect } from 'react-redux'
import { fetchMedals } from '../actions'

class AsyncListContainer extends React.Component{

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        data: PropTypes.object.isRequired,
        selectedFilter: PropTypes.string.isRequired
    }

    componentDidMount(){
        this.props.dispatch(fetchMedals('all'))
    }

    componentWillReceiveProps(){
    }

    render(){
        if(!this.props.isLoading){
            let items = this.props.data[this.props.selectedFilter]

            return (<section className="filterContainer">
                        <h2>2008 Olympic Ranking</h2>
                        <FiltersContainer />
                        <div><List items={items} /></div>
                    </section>)

        } else {
            return <div>Loading</div>
         }


    }
}

function mapStateToProps(state){
    return {
        ...state
    }
}

export default connect(mapStateToProps)(AsyncListContainer)

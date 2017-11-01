import React, { Component } from 'react';
import Item from './Item'
import {Table, Button, ButtonGroup} from 'react-bootstrap'

class List extends Component {

    static propTypes = {
        items: React.PropTypes.array
    }

    renderItem(item,counter){
        return <Item key={item.country} medals={item.all} country={item.country} gold={item.gold} silver={item.silver} bronze={item.bronze} />
    }

    render(){
        let items = []
        for (let i in this.props.items) {
            items.push(this.renderItem(this.props.items[i]))
        }

        /* @TODO provide sorting action for buttons
        */
        return (<Table responsive hover striped bordered condensed>
                <thead>
                    <tr className="medals-list-header">
                        <td>Country</td>
                        <td><ButtonGroup><Button>All</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Gold</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Silver</Button></ButtonGroup></td>
                        <td><ButtonGroup><Button>Bronze</Button></ButtonGroup></td>
                    </tr>
                </thead>
            <tbody>{items}</tbody>
            </Table>)

    }
}

export default List;
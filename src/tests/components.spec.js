import React from 'react'
import { mount } from 'enzyme'
import List from '../components/List'

function setup() {
    const props = {
        items: [{
            medals:3,
            gold:[],
            silver:[],
            bronze:[],
            country:'US'
        }, {
            medals:3,
            gold:[],
            silver:[],
            bronze:[],
            country:'RU'
            }
        ]
    }

    const enzymeWrapper = mount(<List {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('List', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup()
            expect(enzymeWrapper.find('table').hasClass('table')).toBe(true)
            expect(enzymeWrapper.find('Item').length).toBe(enzymeWrapper.props().items.length)
        })

    })
})
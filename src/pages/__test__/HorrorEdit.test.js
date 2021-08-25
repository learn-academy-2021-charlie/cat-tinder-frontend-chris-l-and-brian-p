import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import HorrorEdit from '../HorrorEdit'

Enzyme.configure({ adapter: new Adapter()})

describe("When horroredit shows", ()=>{
    //arrange
    let horroredit
    beforeEach(()=>{
        horroredit = shallow(<HorrorEdit/>)
    })
it('displays a edit button',()=>{
    const skeleton = horroredit.find('Form')
    //assert
    expect(skeleton.length).toEqual(1)
    })
})
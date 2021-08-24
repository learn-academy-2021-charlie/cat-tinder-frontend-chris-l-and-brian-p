import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import HorrorIndex from '../HorrorIndex'

Enzyme.configure({ adapter: new Adapter()})

describe("When horrorindex shows", ()=>{
    //arrange
    let horrorindex
    beforeEach(()=>{
        horrorindex = shallow(<HorrorIndex/>)
    })
it('displays a horrorindex',()=>{
    const skeleton = horrorindex.find('h3')
    //assert
    expect(skeleton.text()).toEqual("I am the HorrorIndex")
    })
})
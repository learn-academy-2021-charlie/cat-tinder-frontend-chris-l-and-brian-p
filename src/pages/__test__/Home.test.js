import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter()})

describe("When home shows", ()=>{
    //arrange
    let home
    beforeEach(()=>{
        home = shallow(<Home/>)
    })
it('displays a home',()=>{
    const skeleton = home.find('div')
    //assert
    expect(skeleton.length).toEqual(1)
    })
})
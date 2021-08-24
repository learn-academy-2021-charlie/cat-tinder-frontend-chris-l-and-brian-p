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
    const skeleton = home.find('h2')
    //assert
    expect(skeleton.text()).toEqual("I am home")
    })
})
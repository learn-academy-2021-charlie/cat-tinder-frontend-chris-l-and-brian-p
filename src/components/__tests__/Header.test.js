import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter()})

describe("When header appears", ()=>{
    //arrange
    let header
    beforeEach(()=>{
        header = shallow(<Header/>)
    })
it('displays a pumpkin menu icon',()=>{
    const pumpkin = header.find('NavbarToggler')
    //assert
    expect(pumpkin.length).toEqual(1)
    })
})
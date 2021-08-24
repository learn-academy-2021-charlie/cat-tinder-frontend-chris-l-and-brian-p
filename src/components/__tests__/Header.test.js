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
it('displays a hamburger menu icon',()=>{
    const navbar = header.find('NavBarToggler')
    //assert
    expect(navbar.length).toEqual(1)
    })
})
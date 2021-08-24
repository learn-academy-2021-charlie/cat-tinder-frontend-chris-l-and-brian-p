import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter()})

describe("When footer shows", ()=>{
    //arrange
    let footer
    beforeEach(()=>{
        footer = shallow(<Footer/>)
    })
it('displays a footer',()=>{
    const skeleton = footer.find('footer')
    //assert
    expect(skeleton.text()).toEqual("Made by Brian and Chris")
    })
})
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter()})

describe("When notfound shows", ()=>{
    //arrange
    let notfound
    beforeEach(()=>{
        notfound = shallow(<NotFound/>)
    })
it('displays a notfound',()=>{
    const skeleton = notfound.find('div')
    //assert
    expect(skeleton.text()).toEqual("page not found")
    })
})
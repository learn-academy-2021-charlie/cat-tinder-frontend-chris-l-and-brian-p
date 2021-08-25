import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import HorrorNew from '../HorrorNew'

Enzyme.configure({ adapter: new Adapter()})

describe("When horrornew loads", ()=>{
    
    //arrange
    let horrornew
    beforeEach(()=>{
        horrornew = shallow(<HorrorNew />)
    })
it('displays a form page',()=>{
    const skeleton = horrornew.find('Form')
    //assert
    expect(skeleton.length).toEqual(1)
    })
})
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import HorrorShow from '../HorrorShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When horrorshow loads", ()=>{
    //arrange
    let horrorshow
    beforeEach(()=>{
        horrorshow = shallow(<HorrorShow character={ this.props.character }/>)
    })
it('displays a characters page',()=>{
    const skeleton = horrorshow.find('h2')
    //assert
    expect(skeleton.childAt(`${id}`)).toEqual(`This is ${this.props.character.name}. 
    He is ${this.props.character.age} years old.
    He enjoys ${this.props.character.enjoys}.`)
    })
})
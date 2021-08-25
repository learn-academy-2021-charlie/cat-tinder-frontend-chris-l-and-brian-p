import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import HorrorShow from '../HorrorShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When horrorshow loads", ()=>{
    let character ={ 
    id: 2,
    name: "Micheal Myers",
    age: 63,
    enjoys: "HALLOWEEN!!!"}
    //arrange
    let horrorshow
    beforeEach(()=>{
        horrorshow = shallow(<HorrorShow character={character}/>)
    })
it('displays a characters page',()=>{
    const skeleton = horrorshow.find('div')
    //assert
    expect(skeleton.length).toEqual(1)
    })
})
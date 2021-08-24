import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import  Adapter  from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() }) 

describe('you can see a footer', () => {
  //arrange
  let footer
  beforeEach(()=>{
      footer = shallow(<App/>)
  })
  it('Footer renders content', () => {
      //act
      const renderedFooter = footer.find("Footer")
  expect(renderedFooter.length).toEqual(1)
  })
})
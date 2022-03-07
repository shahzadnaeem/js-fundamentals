const {a, b} = require('../../src/functions/example.js')

const hiEd = "Hi, Ed!"


describe("example function", () => {
  it("returns the string 'Hi, Ed'", () => {
    expect(  a()  ).toEqual("Hi, Ed!")
  })

  it("is Hi Ed!", () => {
    expect(  hiEd  ).toEqual("Hi, Ed!")
  })



  it("increments 1 to 2", () => {
    expect(   b(1)   ).toEqual(2)
  })
})

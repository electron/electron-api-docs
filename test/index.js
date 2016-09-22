const expect = require('chai').expect
const apis = require('../')

describe('electron-api-docs', () => {
  it('is an array', () => {
    expect(apis).to.be.an('array')
  })

  it('contains several APIs', () => {
    expect(apis.length).to.be.above(15)
  })

  it('gives APIs named keys', () => {
    expect(apis.app).to.be.an('object')
  })

  it('sorts APIs in alphabetical order', () => {
    const names = apis.map(api => api.name)
    expect(names.indexOf('app')).to.be.below(2)
    expect(names.indexOf('WebRequest')).to.be.above(15)
  })
})

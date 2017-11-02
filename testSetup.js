import jsdom from 'jsdom'
import sinon from 'sinon'
const view = jsdom.jsdom().defaultView
Object.keys(view).forEach(opt => {
  if (!global[opt]) {
    global[opt] = view[opt]
  }
})

global['fetch'] = sinon.stub().returns(
  Promise.resolve({
    status: 200,
    headers: { 'Content-type': 'application/json' },
    json: () => {
      return Promise.resolve({})
    }
  })
)
global.window.__INITIAL_STATE__ = {
  initialState: {}
}

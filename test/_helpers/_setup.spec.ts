import { MockLocalStorage } from '../test-utils/MockLocalStorage'
;(global as any).localStorage = new MockLocalStorage()

import Axios from 'axios'
const MockAdapter = require('axios-mock-adapter')

beforeEach(() => {
  ;(global as any).localStorage.clear()
})

/**
 * Create a JSDOM instance to support localStorage and other DOM methods
 */
const { JSDOM } = require('jsdom')
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/'
})

;(global as any).window = dom.window
;(global as any).document = dom.window.document

// This sets the mock adapter on the default instance
const mock = new MockAdapter(Axios)

const getVersionReply = () => {
  return {
    versions: ['r0.0.1', 'r0.1.0', 'r0.2.0', 'r0.3.0', 'r0.4.0', 'r0.5.0'],
    unstable_features: {
      'm.lazy_load_members': true,
      'm.id_access_token': true,
      'm.require_identity_server': false,
      'm.separate_add_and_bind': true
    }
  }
}
// const getLogin = (hostname: string) => {
//   console.log('GET LOGIN')
//   return {
//     user_id: `@xxx:${hostname}`,
//     access_token: 'ACCESS_TOKEN',
//     home_server: hostname,
//     device_id: 'xxx'
//   }
// }

mock
  .onGet('https://matrix.papers.tech/_matrix/client/versions')
  .reply(200, getVersionReply())
  .onGet('https://beacon-node-0.papers.tech:8448/_matrix/client/versions')
  .reply(200, getVersionReply())
  // .onPost('https://matrix.papers.tech/_matrix/client/r0/login')
  // .reply(200, getLogin('matrix.papers.tech'))
  // .onPost('https://beacon-node-0.papers.tech:8448/_matrix/client/r0/login')
  // .reply(200, getLogin('beacon-node-0.papers.tech:8448'))
  // .onGet('https://matrix.papers.tech/_matrix/client/r0/sync')
  // .reply(200, {})
  // .onGet('https://beacon-node-0.papers.tech:8448/_matrix/client/r0/sync')
  // .reply(200, {})
  .onAny()
  .reply((config) => {
    console.log('UNMOCKED URL, RETURNING ERROR 500', `${config.baseURL}${config.url}`)

    return [500, {}]
  })

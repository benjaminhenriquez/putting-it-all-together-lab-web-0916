import React from 'react'
import ReactDOM from 'react-dom'
import blackjack_actions from './actions/blackjack_actions'
import blackjackReducer from './reducers/blackjack_reducer'
import { createStore } from './store'
import App from './components/app'
import { fetchDeck, setAICards, setUserCards, hit } from './actions/blackjack_actions'

debugger
let store = createStore(blackjackReducer)


ReactDOM.render(<App store={store} dispatch={store.dispatch}/>, document.getElementById('container'))


before()
store()
store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

require('../test/index-test.js')  // Leave this in!

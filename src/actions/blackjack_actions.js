// {
//   fetchDeck: FETCH_DECK,
//   setAICards:,
//   setUserCards: ,
//   hitAI: ,
//   hitUser: ,
// }
//
export function fetchDeck(){
 return {type: 'FETCH_DECK'}
}

export function setAICards (state) {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  let first = Math.floor(getRandomArbitrary(0,state.deck.length-1));
  let firstCard = state.deck.pop()
  let aiCards = [...state.aiCards, firstCard];

  let second = Math.floor(getRandomArbitrary(0,state.deck.length-1));
  let secondCard = state.deck.pop()
  aiCards = [...state.aiCards, secondCard];
  let deck = state.deck


return {type: 'SET_AI_CARDS', payload:{aiCards: aiCards, deck: deck}};
}

// export function setUserCards (state) {
//   function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//
//   let first = Math.floor(getRandomArbitrary(0,state.deck.length-1));
//   let firstCard = state.deck.pop(first)
//   state.userCards = [...state.userCards, firstCard];
//
//   let second = Math.floor(getRandomArbitrary(0,state.deck.length-1));
//   let secondCard = state.deck.pop(second)
//   state.userCards = [...state.userCards, secondCard];
//
//   return {type: 'SET_USER_CARDS', payload:{userCards:[], deck: deck}}
// }

// export function hitAI (aiCards, deck) {
//   return {type: 'HIT_AI', payload:{aiCards: [], deck: deck}}
//
// }
//
// export function hitUser (userCards, deck) {
//   return {type: 'HIT_USER', payload:{userCards:[], deck: deck}}
// }

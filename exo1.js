// const call =  (str, cb) => {
//   const event = new Event(str);
//   cb(event);
// };

// call("Correct ?", console.log);


// const add = nb1 => nb2 => nb1 + nb2

// console.log(add(1)(3))

const WORDS = {
  REMOVE: {

      fr: 'Supprimer',
      en: 'Delete'

  }
}

function translate(wordId, locale) {
  const word = WORDS[wordId]?.[locale]
  if (!word) {
    throw new Error('Le mot n\'existe pas')
  }
  return word
}

console.log(translate('REMOVE', 'fr'))
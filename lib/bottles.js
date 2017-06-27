const _ = require('lodash');

function verse(quantity) {
  const pluralizeBottle = quantity => (quantity === 1 ? 'bottle' : 'bottles');

  const currentBottles = quantity;
  const remainingBottles = quantity - 1;

  const currentBottlesText = pluralizeBottle(currentBottles);
  const remainingBottlesText = pluralizeBottle(remainingBottles);

  const currentBeersText = currentBottles == 0
    ? 'No more bottles of beer on the wall, no more bottles of beer.'
    : `${currentBottles} ${currentBottlesText} of beer on the wall, ${currentBottles} ${currentBottlesText} of beer.`;

  const remainingBeersText = currentBottles == 0
    ? 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    : remainingBottles === 0
      ? 'Take it down and pass it around, no more bottles of beer on the wall.'
      : `Take one down and pass it around, ${remainingBottles} ${remainingBottlesText} of beer on the wall.`;

  return `${currentBeersText}
${remainingBeersText}`;
}

function verses(from, to) {
  return _.range(from, to - 1).map(verse).join('\n\n');
}

module.exports = {
  verse,
  verses,
  song() {
    return verses(99, 0);
  }
};

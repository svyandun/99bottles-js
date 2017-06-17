module.exports = {
  verse(quantity) {
    const pluralizeBottle = quantity => (quantity === 1 ? 'bottle' : 'bottles');

    const currentBeers = quantity;
    const remainingBeers = quantity - 1;

    const currentBeersText = `${currentBeers} ${pluralizeBottle(
      currentBeers
    )} of beer on the wall, ${currentBeers} ${pluralizeBottle(currentBeers)} of beer.`;

    const remainingBeersText = remainingBeers === 0
      ? 'Take it down and pass it around, no more bottles of beer on the wall.'
      : `Take one down and pass it around, ${remainingBeers} ${pluralizeBottle(
          remainingBeers
        )} of beer on the wall.`;

    return `${currentBeersText}
${remainingBeersText}`;
  }
};

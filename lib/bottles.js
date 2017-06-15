module.exports = {
  verse(quantity) {
    const pluralizeBottle = quantity => (quantity === 1 ? 'bottle' : 'bottles');
    return `${quantity} ${pluralizeBottle(
      quantity
    )} of beer on the wall, ${quantity} ${pluralizeBottle(quantity)} of beer.
Take one down and pass it around, ${quantity - 1} ${pluralizeBottle(
      quantity - 1
    )} of beer on the wall.`;
  }
};

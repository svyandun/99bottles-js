module.exports = {
  verse(quantity) {
    return `${quantity} bottles of beer on the wall, ${quantity} bottles of beer.
Take one down and pass it around, ${quantity - 1} bottles of beer on the wall.`;
  }
};

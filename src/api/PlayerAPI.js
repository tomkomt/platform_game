var Consts = require('../data/consts');

var getPlayerCoordinates = function() {
    return JSON.parse(sessionStorage.getItem('playerCoordinates'));    
}

var setPlayerCoordinates = function(x, y) {
    sessionStorage.setItem('playerCoordinates', JSON.stringify({x: x, y: y}));
    return getPlayerCoordinates();
}

module.exports = {
    getPlayerCoordinates: getPlayerCoordinates,
    setPlayerCoordinates: setPlayerCoordinates
}
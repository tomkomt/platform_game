var Consts = require('../data/consts');

var getTilesData = function() {
    return JSON.parse(sessionStorage.getItem('pathArray'));
}

var setTilesData = function(tilesData) {
    sessionStorage.setItem('pathArray', JSON.stringify(tilesData));
    return getTilesData();
}

var getStartingTile = function() {
    return getTilesData()[1];
}

var getTilesAround = function(offsetX, currentX) {
    return getTilesData().map((tile) => {
        tile.actualX += offsetX;
        return tile;
    }).filter((tile) => {
        return (tile.actualX >= currentX && tile.actualX < currentX + Consts.PLAYER_DIMENSIONS.width) || (currentX >= tile.actualX && currentX < tile.actualX + Consts.TILE_DIMENSIONS.width); 
    });
}

var getTilesDataLock = function() {
    return JSON.parse(sessionStorage.getItem('vectorLock'));
} 

var setTilesDataLock = function(vectorLock) {
    sessionStorage.setItem('vectorLock', JSON.stringify(vectorLock));
    return JSON.parse(sessionStorage.getItem('vectorLock'));
}

module.exports = {
    getTilesData: getTilesData,
    setTilesData: setTilesData,
    getStartingTile: getStartingTile,
    getTilesAround: getTilesAround,
    getTilesDataLock: getTilesDataLock,
    setTilesDataLock: setTilesDataLock    
}
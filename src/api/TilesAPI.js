var getTilesData = function() {
    return JSON.parse(sessionStorage.getItem('pathArray'));
}

var setTilesData = function(tilesData) {
    sessionStorage.setItem('pathArray', JSON.stringify(tilesData));
    return JSON.parse(sessionStorage.getItem('pathArray'));
}

var getStartingTile = function() {
    return JSON.parse(sessionStorage.getItem('pathArray'))[1];
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
    getTilesDataLock: getTilesDataLock,
    setTilesDataLock: setTilesDataLock    
}
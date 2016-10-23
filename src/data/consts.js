const CONSTS = {
    DIRECTIONS: {
        none: 'none',
        right: 'right',
        left: 'left',
        up: 'up',
        down: 'down'
    },
    STAGE_DIMENSIONS: {
    	height: 800,
	    width: 800
    },

    CLOUD_DIMENSIONS: {
        height: 40,
        width: 90
    },
    CLOUD_PARALAX: {
	    leftRight: 0.25
    },

    TILE_DIMENSIONS: {
        height: 50,
        width: 50
    },
    TILE_PARALAX: {
        leftRight: 2.5
    },
    TILE_CONSTS: {
        defaultY: 550,
        vectorTTL: 1,
        maxY: 750,
        minY: 400,
        tilesCount: 30
    },

    PLAYER_DIMENSIONS: {
        height: 60,
        width: 45
    },
    PLAYER_PARALAX: {
        leftRight: 2.5
    },
    PLAYER_CONSTS: {
        defaultX: 55
    } 
};

module.exports = CONSTS;

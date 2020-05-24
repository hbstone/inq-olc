exports.toDirections = {
  'north': 'the north',
  'south': 'the south',
  'east': 'the east',
  'west': 'the west',
  'up': 'above',
  'down': 'below',

  'northeast': 'the northeast',
  'southeast': 'the southeast',
  'northwest': 'the northwest',
  'southwest': 'the southwest',
};


/**
 * @params {Object} 
 */
exports.RoomExits = (config = {}) => {
  return {
    roomId: config.roomId || config.exit && config.exit.roomId || null,
    direction: config.direction || config.exit && config.exit.direction || null,
    leaveMessage: config.exit && config.exit.leaveMessage || config.leaveMessage || '',
  };
};

exports.RoomDoors = (config = {}) => {
  return {
    lockedBy: config.door && config.door.lockedBy || config.lockedBy || '',
    closed: config.door && config.door.closed || config.closed || false,
    locked: config.door && config.door.locked || config.locked || false,
  };
};

exports.itemSlots = [
  'finger',
  'neck',
  'chest',
  'head',
  'legs',
  'feet',
  'hands',
  'arms',
  'waist',
  'wrist',
  'wield',
  'shield',
];

exports.itemQuality = [
  'poor',
  'common',
  'epic',
  'rare',
];

// TODO: if installing this bundle in your own version of RanvierMUD, update to your attributes path
exports.defaultAttributes = require('../../inq-attributes/attributes.js').map(({ name }) => name);

exports.currencyType = [
  'gold'
];

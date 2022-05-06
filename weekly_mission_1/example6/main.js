// Calling patcher module will modify the object instance.
require('./patcher')

// Calling logger will give you the object instance modified by patcher.
const logger = require('./logger')

logger.customMessage()
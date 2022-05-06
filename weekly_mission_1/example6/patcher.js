/*
 * Consider the following:
 *    - require('./logger') will give you the created object
 *    - require('./logger').Logger will return the class
 *
 * In this case we are adding function to the object instance (not the class)
 * */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}
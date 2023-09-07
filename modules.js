'use strict';

const {john, peter} = require('./first-module')
const sayHi = require('./second-module')
const data = require('./alternative-flavor')
require('./mind-grenade')


sayHi('susan')
sayHi(john)
sayHi(peter)

const route = require('express').Router();
const controller = require('../server/controller');


route.post('/', controller.submitPost);
route.get('/', controller.getPost);

module.exports = route;
/**
 * Toolkit JavaScript
 */
'use strict';

global.jQuery = global.$ = require('jquery');
var bootstrap = require('bootstrap');

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
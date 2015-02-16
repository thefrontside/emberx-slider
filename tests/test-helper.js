import Ember from 'ember';
import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';

setResolver(resolver);

export function beforeEach(fn) {
  window.beforeEach(function() {
    var test = this;
    Ember.run(function() {
      fn.call(test);
    });
  });
}

export var describe = window.describe;

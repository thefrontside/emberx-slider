/*global expect */
/* jshint expr:true */

import Ember from 'ember';
import {
  describeComponent,
  it
} from 'ember-mocha';
import { describe, beforeEach } from '../../test-helper';

describeComponent('x-slider', 'XSliderComponent', function() {
  var slider = null;
  beforeEach(function() {
    slider = this.subject({
      value: 5
    });
    this.render();
  });

  it("renders", function() {
    expect(slider).to.be.ok();
  });
  it("sets the slider to its initial value", function() {
    expect(slider.get('element.value')).to.equal('5');
  });

  describe("setting the dom value on an input event", function() {
    beforeEach(function() {
      slider.set('element.value', 50);
      Ember.$(slider.get('element')).trigger('input');
    });
    it("updates the component value", function() {
      expect(slider.get("value")).to.equal(50);
    });
  });

  describe("setting the component value directly", function() {
    beforeEach(function() {
      slider.set('value', 75);
    });
    it("updates the value of the DOM element", function() {
      expect(slider.get('element.value')).to.equal('75');
    });
  });
});

import Ember from 'ember';
import PropertyBindings from 'ember-binding-macros/mixins/property-bindings';

/**
 * A component to represent a number that must fall between two
 * (inclusive) bounds and can be updated by a discrete step size.
 * See: http://www.w3.org/wiki/HTML/Elements/input/range

 * For example:
 *
 *
 *   {{x-slider min=0 max=100 step=1 value=someNumber}}
 *
 * @class XSliderComponent
 */
export default Ember.Component.extend(PropertyBindings, {
  type: "range",
  tagName: ['input'],
  classNames: ['x-slider'],
  propertyBindings: ['value > element.value'],
  attributeBindings: ['min', 'max', 'step', 'type', 'name', 'list'],

  /**
   * The minimum value that this component's `value` property may
   * have.
   *
   * @property min
   * @type {Number}
   * @default 0
   */
  min: 0,

  /**
   * The maximum value (inclusive) that this component's `value` may
   * have.
   *
   * @property max
   * @type {Number}
   * @default 100
   */
  max: 100,

  /**
   * The "granularity". The value of the input will be a multiple of
   * this number.
   *
   * @property step
   * @type {Number}
   * @default 0
   */
  step: 1,

  /**
   * The current value of the input. It will lie on or between `min`
   * and `max` and will be a multiple of `step`.
   *
   * @property value
   * @type {Number}
   * @default 0
   */
  value: 0,

  /**
   * On any `input` event, copy the numeric value of the DOM element
   * onto the `value` property of the component so that it can be
   * bound to and from.
   *
   * @private
   */
  input: function() {
    this.set('value', Number(this.get('element.value')).valueOf());
  },

  /**
   * Make sure that the element.value is set as soon as the element
   * becomes available.
   *
   * @override
   */
  didInsertElement: function() {
    this.set('element.value', this.get('value'));
  }
});

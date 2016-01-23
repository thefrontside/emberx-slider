/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('x-range-input', 'Integration: XRangeInputComponent', { integration: true }, function() {
  it('renders', function() {
    this.render(hbs`{{x-range-input min=0 max=100 step=1 value=number}}`);
    expect(this.$()).to.have.length(1);
  });

  describe("setting an intial vaule", function () {
    beforeEach(function() {
      this.set('number', 5);
      this.render(hbs`{{x-range-input min=0 max=100 step=1 value=number}}`);
    });

    it("sets the intial value", function() {
      expect(this.$('.x-range-input').val()).to.equal('5');
    });

    describe("setting the dom value", function () {
      beforeEach(function() {
        this.set('number', 10);
        this.render(hbs`{{x-range-input min=0 max=100 step=1 value=number}}`);
      });

      it("updates the value", function() {
        expect(this.$('.x-range-input').val()).to.equal('10');
      });
    });
  });

  describe("setting bound attributes", function () {
    beforeEach(function() {
      this.setProperties({
        min: "5",
        max: "20",
        step: "5",
        value: "10",
        name: "my-slider",
        list: "my-list"
      });
      this.render(hbs`{{x-range-input min=min max=max step=step name=name value=value list=list}}`);
    });

    it("binds the min attribute properly", function() {
      expect(this.$('.x-range-input').prop('min')).to.equal('5');
    });

    it("binds the max attribute properly", function() {
      expect(this.$('.x-range-input').prop('max')).to.equal('20');
    });

    it("binds the value attribute properly", function() {
      expect(this.$('.x-range-input').prop('value')).to.equal('10');
    });

    it("binds the name attribute properly", function() {
      expect(this.$('.x-range-input').prop('name')).to.equal('my-slider');
    });

    it("binds the list attribute properly", function() {
      expect(this.$('.x-range-input').attr('list')).to.equal('my-list');
    });

  });
});

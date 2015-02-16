# emberx-slider

A Slider component based on the native html5 range input.

The component itself takes on a number value between two bounds, that
proceeds in discrete step values. So, for example, to indicate a
percentage of saturation in an image, where the smallest change in
saturation is 1%, you might specify your slider control like:

{{x-slider min=0 max=100 step=1 value=saturationPercentage}}

The `value` property is fully reactive, and is ideal for real-time
visualizations.

### Default Values

While `min`, `max`, and `step` can take on any numeric values, the
default use-case is optimized for representing percentages stepped by
1%. There fore the proceeding example could have been written simply
as:

{{x-slider value=saturationPercenage}}

## EmberX

emberx-slider is part of the "missing components of ember" "collectively
known as "emberx". See also:

* [emberx-select](http://chillestmonkey.com)

## Installation

ember install:addon emberx-slider

## Running Tests

* `ember test`
* `ember test --server`

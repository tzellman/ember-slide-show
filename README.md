[![Dependency Status][dependency-image]][dependency-url]
[![NPM version][npm-image]][npm-url]
[![Ember Observer Score][observer-image]][observer-url]

# ember-slide-show

ember-slide-show is a simple Ember CLI addon that can be used to add a slideshow to your ember app.

#### [View demo](http://tzellman.github.io/ember-slide-show/)

## Installing

```
ember install:addon ember-slide-show
```

## Using in your app

Use the slide-show component in your template:

```hbs
{{slide-show slideIndex=slideIndex slides=slides}}

// slideIndex should be bound to a query_param variable so you can keep state
// slides is an array of strings - each the name of a template in the slide-show/ directory
```

Your controller would look something like this:
```js
import Ember from "ember";
import SlideShowController from "ember-slide-show/mixins/slide-show-controller";

export default Ember.Controller.extend(SlideShowController, {

    // the slides are the content in this simple app
    slides: function () {
        return this.get("content");
    }.property("content")
});
```

The slides (each one a separate handlebars template) can be provided any way you like; this example provides them via the route:
```js
import Ember from 'ember';

var SLIDES = [
    "welcome",
    "outline",
    "why-ember",
    "chuck-norris",
    "end"
];

export default Ember.Route.extend({

    model: function () {
        return SLIDES;
    }
});
```

The convention for ember-slide-show is to look for slides in the templates/slide-show directory.

```
templates
    slide-show
        -chuck-norris.hbs
        -end.hbs
        -outline.hbs
        -welcome.hbs
        -why-ember.hbs
```

You can create a new slide by invoking the slide generator:

```
ember generate slide slideName
```

## License

ember-slide-show is released under the MIT license.

[npm-image]: https://img.shields.io/npm/v/ember-slide-show.svg
[npm-url]: https://www.npmjs.com/package/ember-slide-show
[dependency-image]: https://david-dm.org/tzellman/ember-slide-show.svg
[dependency-url]: https://david-dm.org/tzellman/ember-slide-show
[observer-image]: http://emberobserver.com/badges/ember-slide-show.svg
[observer-url]: http://emberobserver.com/addons/ember-slide-show

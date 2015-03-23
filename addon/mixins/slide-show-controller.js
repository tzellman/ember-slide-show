import Ember from "ember";

/**
 * Simple mixin that adds a `slide` query parameter, which is bound to the slideIndex property.
 *
 * Use the slideIndex property in your templates to bind to a slide-show component.
 */
export default Ember.Mixin.create({

    queryParams: {
        slideIndex: "slide"
    },

    slideIndex: "0"
});

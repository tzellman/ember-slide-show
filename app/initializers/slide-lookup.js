var EMPTY_TEMPLATE = {
    isHTMLBars: true,
    render: function () {
        return '';
    }
};

/**
 * The idea here is to override the container lookup method and return an
 * empty template if one of the slide templates is not found, rather than
 * deal with a possible uncaught exception due to an Ember.assert.
 * @param container
 * @param application
 */
export function initialize(container, application) {

    var current = container.lookup;
    container.lookup = function (fullName, options) {
        var obj = current.call(this, fullName, options);

        var regex = /template[:]slide-show\/([a-zA-Z]+\w*)/,
            match = regex.exec(fullName);
        if (!obj && match) {
            // warn that the slide template doesn't exist
            console.log("Could not find template: " + match[1] + "; skipping");
            return EMPTY_TEMPLATE;
        }
        return obj;
    };
}

export default {
    name: 'error-handler',
    initialize: initialize
};

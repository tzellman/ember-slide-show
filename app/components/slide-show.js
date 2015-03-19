import Ember from "ember";

var ARROWS = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

export default Ember.Component.extend({

    slideIndex: 0,

    classNames : ["slide-show"],

    slideTemplateDir: "slide-show",

    onInsertion: function () {
        this._keyHandler = this.onKeyUp.bind(this);
        this.$(document).on('keyup', this._keyHandler);
    }.on("didInsertElement"),

    onClearing: function () {
        this.$(document).off("keyup", this._keyHandler);
    }.on('willClearRender'),

    onKeyUp: function (e) {
        if (e.which === ARROWS.right || e.which === ARROWS.down) {
            this.send("next");
        } else if (e.which === ARROWS.left || e.which === ARROWS.up) {
            this.send("previous");
        }
    },

    actions: {
        next: function () {
            var slides = this.get("slides"),
                num = slides.get("length"),
                slideIndex = parseInt(this.get("slideIndex"));

            if (slideIndex < num - 1) {
                this.set("slideIndex", (slideIndex + 1));
            }
        },
        previous: function () {
            var slideIndex = parseInt(this.get("slideIndex"));

            if (slideIndex > 0) {
                this.set("slideIndex", (slideIndex - 1));
            }
        }
    },

    slideTemplate: function () {
        return this.get("slideTemplateDir") + "/" + this.get("slides").objectAt(parseInt(this.get("slideIndex")));
    }.property("slides", "slideIndex")

});

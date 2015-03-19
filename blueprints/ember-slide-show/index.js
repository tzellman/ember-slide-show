module.exports = {
    description: 'Default blueprint for ember-slide-show',

    normalizeEntityName: function () {
    },

    afterInstall: function () {
        return this.addBowerPackageToProject('bourbon');
    }
};

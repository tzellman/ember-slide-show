module.exports = {
    description: 'Default blueprint for ember-slide-show',

    normalizeEntityName: function () {
    },

    afterInstall: function () {
        this.addBowerPackageToProject('bourbon');
        return this.addPackageToProject('broccoli-sass');
    }
};

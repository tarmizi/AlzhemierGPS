Ext.define("MyGPS.controller.MyController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            homePage: "homepage",
            otherView: "otherview"
        },

        control: {
            homePage: {
                showOtherViewCommand: "onShowOtherView"
            }
        },

        routes: {
            'home': 'activateHomePage'
        }
    },

    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    activateHomePage: function () {
        var homeView = this.getHomePage();
        if (homeView) {
            Ext.Viewport.animateActiveItem(
                    homeView,
                    this.slideRightTransition);
        }
    },

    activateOtherView: function () {
        var otherView = this.getOtherView();
        if (otherView) {
            Ext.Viewport.animateActiveItem(otherView, this.slideLeftTransition);
        }
    },

    onShowOtherView: function () {

        console.log("onShowOtherView");

        this.redirectTo('home/other');

        this.activateOtherView();
    },

});
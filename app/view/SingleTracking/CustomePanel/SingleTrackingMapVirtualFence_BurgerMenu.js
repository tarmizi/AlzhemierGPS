
var _singleTrackingMapVirtualFence_BurgerMenu;

var _singleTrackingMapVirtualFence_BurgerMenuIsInitialized = 'no';
Ext.define('MyGPS.view.SingleTracking.CustomePanel.SingleTrackingMapVirtualFence_BurgerMenu', {

});






function SingleTrackingMapVirtualFence_BurgerMenu() {
    _singleTrackingMapVirtualFence_BurgerMenu =
   Ext.create('Ext.Panel', {

       xtype: 'panel',
       height: 1,
       width: 1,
       id: 'SingleTrackingMapVirtualFence_BurgerMenuID',
       draggable: false,
       right: -5,
       // bottom: 260,
       bottom: 64,

       showAnimation: {
           type: 'popIn',
           duration: 250,
           easing: 'ease-out'
       },
       hideAnimation: {
           type: null,
           duration: null,
           easing: null
       },
       style: 'background-color: transparent;',
       items: {

           xtype: 'container',
           style: 'background-color: transparent;',
           layout: {
               type: 'vbox',
               pack: 'left',
               align: 'end'
           },

           items: [

                   {
                       xtype: 'button',
                       id: 'btnSingleTrackingMapVirtualFence_BurgerMenu',
                       height: 75,
                       width: 75,
                       html: '<div ><img src="resources/icons/BurgerMenu1.png" width="65" height="65" alt="Company Name"></div>',
                       //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                       ui: 'plain',
                       handler: function () {


                           SingleTrackingMapVirtualFence_BurgerMenuHide();
                           _singleTrackingMapVirtualFence_BurgerMenuIsInitialized = 'yes';
                        
                           setTimeout(function () {
                               SingleTrackingMapVirtualFenceMenuShow();

                           }, 100);


                       }
                   },


           ]

       },


   });
    return _singleTrackingMapVirtualFence_BurgerMenu;
}



function SingleTrackingMapVirtualFence_BurgerMenuHide() {
    _singleTrackingMapVirtualFence_BurgerMenu.hide();
}



function SingleTrackingMapVirtualFence_BurgerMenuShow() {

    
    setTimeout(function () {
        Ext.Viewport.remove(_singleTrackingMapVirtualFence_BurgerMenu);
        this.overlay = Ext.Viewport.add(SingleTrackingMapVirtualFence_BurgerMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
        // }
        this.overlay.show();



    }, 500);
}




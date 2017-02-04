﻿
var _singleTrackingWPSListButton;
Ext.define('MyGPS.view.SingleTracking.CustomePanel.SingleTrackingWPSListButton', {
});

function SingleTrackingWPSListButton() {
    _singleTrackingWPSListButton =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: 'SingleTrackingWPSListButtonID',
      draggable: false,
      left: -12,
      bottom: 200,
      zIndex:10,
     // bottom: 71,

      //showAnimation: {
      //    type: 'slide',
      //    direction: 'up',
      //    duration: 450,
      //    easing: 'ease-out'
      //},
      //hideAnimation: {
      //    type: null,
      //    direction: null,
      //    duration: null,
      //    //  easing: 'ease-in'
      //},



      showAnimation: {
          type: 'popIn',
          duration: 250,
          easing: 'ease-out'
      },
      hideAnimation: {
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
      },
      //hideAnimation: {
      //    type: 'popOut',
      //    duration: 250,
      //    easing: 'ease-out'
      //},
      style: 'background-color: transparent;',
      items: {

          xtype: 'container',
          style: 'background-color: transparent;',
          layout: {
              type: 'vbox',
              //pack: 'left',
              //align: 'end'
          },

          items: [

                 
               
                     {
                         xtype: 'button',
                         id: 'btnSingleTrackingWPSListButtonIcon',
                         height: 40,
                         width: 180,
                         html: '<div ><img src="resources/icons/wps-button1.png" width="170" height="30" alt="Company Name"></div>',
                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                         }
                     },
              

          ]

      },


  });

    return _singleTrackingWPSListButton
}


function SingleTrackingWPSListHide()
{
    _singleTrackingWPSListButton.hide();
}



function SingleTrackingWPSListShow() {
    Ext.Viewport.remove(_singleTrackingWPSListButton);
    this.overlay = Ext.Viewport.add(SingleTrackingWPSListButton()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                   
    this.overlay.show();
}
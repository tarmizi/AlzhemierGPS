
var _singleTrackingWPSList;
Ext.define('MyGPS.view.SingleTracking.CustomePanel.SingleTrackingWPSList', {
});

function SingleTrackingWPSList() {
    _singleTrackingWPSList =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: 'SingleTrackingWPSListID',
      draggable: false,
      left: -12,
      bottom: 200,
      zIndex:10,
     // bottom: 71,

      showAnimation: {
          type: 'slide',
          direction: 'up',
          duration: 450,
          easing: 'ease-out'
      },
      //hideAnimation: {
      //    type: null,
      //    direction: null,
      //    duration: null,
      //    //  easing: 'ease-in'
      //},



      //showAnimation: {
      //    type: 'popIn',
      //    duration: 250,
      //    easing: 'ease-out'
      //},
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
                         id: 'btnSingleTrackingWPSList',
                         height: 210,
                         width: 180,
                         html: '<div ><img src="resources/icons/wps-list1.png" width="170" height="200" alt="Company Name"></div>',
                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                             SingleTrackingWPSListHide();
                             SingleTrackingWPSListButtonShow();
                         }
                     },
                     //{
                     //    xtype: 'button',
                     //    id: 'btnsingleTrackingMapSpeedometerCurrentSpeed',
                     //    height: 40,
                     //    width: 50,
                     //    margin:'45 0 0 -115',
                     //    html: '<font size="5" color="black"><b>80</b></font>',
                     //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                     //    ui: 'plain',
                     //    handler: function () {
                     //    }
                     //},


                       {
                           xtype: 'button',
                           id: 'btnSingleTrackingWPSListAPNdetected',
                           height: 180,
                           width: 210,
                           margin: '-190 0 0 -15',
                           html: '<font size="1.5" color="red"><b>BitGuestWifi<br>FeldaWifi<br>PufyBuffyRestorent<br>Che Mat Restorent Wifi</b></font>',
                           //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {
                               SingleTrackingWPSListHide();
                               SingleTrackingWPSListButtonShow();
                           }
                       },

          ]

      },


  });

    return _singleTrackingWPSList
}


function SingleTrackingWPSListHide()
{
    _singleTrackingWPSList.hide();
}



function SingleTrackingWPSListShow() {
    Ext.Viewport.remove(_singleTrackingWPSList);
    this.overlay = Ext.Viewport.add(SingleTrackingWPSList()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                   
    this.overlay.show();
}
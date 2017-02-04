
var _singleTrackingMapVirtualFence_Menu;
var _isSingleTrackingMapVirtualFence_MenuInitialized = 'no';
Ext.define('MyGPS.view.SingleTracking.CustomPanel.SingleTrackingMapVirtualFence_Menu', {

});



function SingleTrackingMapVirtualFence_Menu() {
    _singleTrackingMapVirtualFence_Menu =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_SingleTrackingMapVirtualFence_MenuID',
      draggable: false,
      right: -5,
      bottom: 301,
      zIndex:10,
      // bottom: 165,

      showAnimation: {
          type: 'slide',
          direction: 'left',
          duration: 250,
          easing: 'ease-out'
      },
      hideAnimation: {
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
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
                      id: 'btnSingleTrackingMapVirtualFence_MenuChangeMaps',
                      height: 62,
                      width: 65,
                      // hidden:true,
                      // html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',
                      html: '<div ><img src="resources/icons/ChangeMapRound.png" width="55" height="55" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {

                          SingleTrackingMap_MenuHide();
                          _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                          ////  Ext.Viewport.remove(_SingleTrackingMap_Menu);

                          countMapChange = countMapChange + 1;
                          //   btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                          if (countMapChange == 1) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              changeMsg = "Please wait,Change Map SATELLITE";

                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');

                          } else if (countMapChange == 2) {
                              //  Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              changeMsg = "Please wait,Change Map HYBRID";

                          } else if (countMapChange == 3) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              changeMsg = "Please wait,Change Map ROADMAP";

                          } else if (countMapChange == 4) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              changeMsg = "Please wait,Change Map TERRAIN";

                              countMapChange = 0;
                          }
                          SingleTrackingMapVirtualFence_BurgerMenuShow();
                     
                          Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                          var task = Ext.create('Ext.util.DelayedTask', function () {

                              Ext.Viewport.unmask();
                              // btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                          });
                          task.delay(800);
                      }
                  },

                {
                    xtype: 'button',
                    id: 'btnSingleTrackingMapVirtualFence_MenuStreetView',
                    height: 62,
                    width: 65,
                    //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                    html: '<div ><img src="resources/icons/StreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                     
                        SingleTrackingMapVirtualFenceMenuHide();
                  
                        stopClocksingleTrackingMaps();
                        Ext.getCmp('mainView').setActiveItem(9);

                        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                            TrackID: singleTrackingMap_DeviceID,
                            AccountNo: AAccountNo
                        });
                        Ext.StoreMgr.get('singlesignalTrackingstore').load();
                        loadSingleTrackingStreetViewMap();
                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Searching Point..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            Ext.Viewport.remove(_singleTrackingMapStreetView_Menu);
                            this.overlay = Ext.Viewport.add(SingleTrackingMapStreetView_Menu());
                            this.overlay.show();
                            Ext.Viewport.unmask();
                        });
                        task.delay(800);


                    }
                },
               {
                   xtype: 'button',
                   id: 'btnSingleTrackingMapVirtualFence_MenuZoomPoints',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SingleTrackingMapVirtualFenceMenuHide();
                       SingleTrackingMapVirtualFence_BurgerMenuShow();
                       _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                       // Ext.Viewport.remove(_SingleTrackingMap_Menu);

                       if (boundstatus == 'yes') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {
                               singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                               singleTrackingMap.setZoom(8);
                               boundstatus = 'no';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;

                       }
                       if (boundstatus == 'no') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Bounds Map to Point..' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {

                               var bounds = new google.maps.LatLngBounds();
                               bounds.extend(boundreboundlatlongsingleTrackingMap);
                               singleTrackingMap.fitBounds(bounds);
                               boundstatus = 'yes';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;
                       }


                   }
               },

               {
                   xtype: 'button',
                   id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerPolygon',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolygon.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SingleTrackingMapVirtualFenceMenuHide();
                       SingleTrackingMapVirtualFence_BurgerMenuShow();
                       _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';
                    

                   }
               },


                    {
                        xtype: 'button',
                        id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerCircle',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerCircle.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            SingleTrackingMapVirtualFenceMenuHide();
                            SingleTrackingMapVirtualFence_BurgerMenuShow();
                            _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';


                        }
                    },

                    {
                        xtype: 'button',
                        id: 'btnSingleTrackingMapVirtualFence_MenuCreateLayerDelete',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerDelete.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            SingleTrackingMapVirtualFenceMenuHide();
                            SingleTrackingMapVirtualFence_BurgerMenuShow();
                            _isSingleTrackingMapVirtualFence_MenuInitialized = 'yes';


                        }
                    },


           
              {
                  // [top, right, bottom, and left]
                  xtype: 'button',

                  id: 'btnSingleTrackingMapVirtualFence_MenuBack',
                  height: 62,
                  width: 65,
                  margin: '-61 63 0 0',
                  //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                //  html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',

                  html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                  
                  ui: 'plain',
                  handler: function (btn) {
                      SingleTrackingMapVirtualFence_BurgerMenuHide();
                      //SingleTrackingMap_MillageCountHide();
                      //SingleTrackingMap_SpeedMeterHide();                      
                      trackingid.length = 0;
                      DeselectMultipleTrackingList();
                      stopClocksingleTrackingMaps();
                      markersingleTrackingMap.setMap(null);
                 
                      Ext.getCmp('mainView').setActiveItem(7);


                    //  SingleTrackingWPSListShow();




                  }
              },




          ]

      },

      initialize: function () {

          //   _singleTrackingMap_BurgeMenu.hide();
      }

  });





    return _singleTrackingMapVirtualFence_Menu;
}


function SingleTrackingMapVirtualFenceMenuShow() {
    Ext.Viewport.remove(_singleTrackingMapVirtualFence_Menu);
    this.overlay = Ext.Viewport.add(SingleTrackingMapVirtualFence_Menu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                   
    this.overlay.show();
}


function SingleTrackingMapVirtualFenceMenuHide()
{
    _singleTrackingMapVirtualFence_Menu.hide();

}



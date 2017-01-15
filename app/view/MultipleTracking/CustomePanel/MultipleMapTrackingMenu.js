
var _settingMultipleMapTracking;
var _settingMultipleMapTrackingcountMapChange = 0;
var _settingMultipleMapTrackingchangeMsg;










Ext.define('MyGPS.view.MultiPleTracking.CustomePanel.MultipleMapTrackingMenu', {

});



function SettingMultipleMapTracking() {
    _settingMultipleMapTracking =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_settingMultipleMapTrackingID',
      draggable: false,
      right: -5,
      bottom: 301,
      zIndex: 10,
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
                      id: 'btnsettingMultipleMapTrackingChangeMaps',
                      height: 62,
                      width: 65,
                      html: '<div ><img src="resources/icons/ChangeMapRound.png" width="55" height="55" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          _settingMultipleMapTrackingcountMapChange = _settingMultipleMapTrackingcountMapChange + 1;
                          if (_settingMultipleMapTrackingcountMapChange == 1) {
                              multiTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              _settingMultipleMapTrackingchangeMsg = "Please wait,Change Map SATELLITE";

                          } else if (_settingMultipleMapTrackingcountMapChange == 2) {
                          
                              multiTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              _settingMultipleMapTrackingchangeMsg = "Please wait,Change Map HYBRID";

                          } else if (_settingMultipleMapTrackingcountMapChange == 3) {
                           
                              multiTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              _settingMultipleMapTrackingchangeMsg = "Please wait,Change Map ROADMAP";

                          } else if (_settingMultipleMapTrackingcountMapChange == 4) {
                       
                              multiTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              _settingMultipleMapTrackingchangeMsg = "Please wait,Change Map TERRAIN";

                              _settingMultipleMapTrackingcountMapChange = 0;
                          }
                         
                          Ext.Viewport.mask({ xtype: 'loadmask', message: _settingMultipleMapTrackingchangeMsg });
                          var task = Ext.create('Ext.util.DelayedTask', function () {
                              Ext.Viewport.unmask();
                          });
                          task.delay(800);
                      }
                  },

                {
                    xtype: 'button',
                    id: 'btnsettingMultipleMapTrackingDeleteLayer',
                    height: 62,
                    width: 65,
                    html: '<div ><img src="resources/icons/StreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                    

                    }
                },
               {
                   xtype: 'button',
                   id: 'btnsettingMultipleMapTrackingCreateLayer',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                     

                   }
               },
                     {
                         xtype: 'button',
                         id: 'btnsettingMultipleMapTrackingSearchPatientList',
                         height: 62,
                         width: 65,
                         html: '<div ><img src="resources/icons/LocateRound.png" width="55" height="55" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                            
                           
                         }
                     },
              {
                  xtype: 'button',
                  id: 'btnsettingMultipleMapTrackingShowLayer',
                  height: 62,
                  width: 65,
                  html: '<div ><img src="resources/icons/SearchRound.png" width="55" height="55" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {



                  }
              },
              {
                  // [top, right, bottom, and left]
                  xtype: 'button',

                  id: 'btnsettingMultipleMapTrackingBack',
                  height: 62,
                  width: 65,
                  margin: '-61 63 0 0',
                  html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',

                  ui: 'plain',
                  handler: function (btn) {
                      //SettingMultipleMapTrackingHide();
                      //MultipleMapTrackingSettingLayerHide();
                      MultipleGeocodeAdd.length = 0;
                      stopClockmultiTrackingMaps();
                      DeselectMultipleTrackingList();
                      Ext.getCmp('mainView').setActiveItem(7);
                  }
              },




          ]

      },

      initialize: function () {

       
      }

  });





    return _settingMultipleMapTracking;
}





function SettingMultipleMapTrackingShow() {
   
    Ext.Viewport.remove(_settingMultipleMapTracking);
    this.overlay = Ext.Viewport.add(SettingMultipleMapTracking());
    this.overlay.show();

}

function SettingMultipleMapTrackingHide() {
    _settingMultipleMapTracking.hide();

}




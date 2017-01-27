
Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFenceDrawFenceMenu', {

});



var _settingFenceDrawFenceMenu;

function SettingFenceDrawFenceMenu() {
    _settingFenceDrawFenceMenu =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_settingFenceDrawFenceMenuID',
      draggable: false,
      right: -5,
      top: 45,
      //right: 35,
      //bottom: 570,
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

          items: [{
              xtype: 'button',
              id: 'btnsettingFenceDrawFenceMenuCreateLayerRectangle',
              height: 62,
              width: 65,
              html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerRectangle.png" width="55" height="55" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {

                  if (_saveLayerTag == 'No') {
                      Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                  } else {
                      drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.RECTANGLE);
                  }
              }
          },

                  {
                      xtype: 'button',
                      id: 'btnsettingFenceDrawFenceMenuCreateLayerPolygon',
                      height: 62,
                      width: 65,
                      html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolygon.png" width="55" height="55" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {


                          if (_saveLayerTag == 'No') {
                              Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                          } else {
                              drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
                          }


                      }
                  },
                    {
                        xtype: 'button',
                        id: 'btnsettingFenceDrawFenceMenuCreateLayerPolyLine',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolyline.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {

                            if (_saveLayerTag == 'No') {
                                Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                            } else {
                                drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.POLYLINE);
                            }
                        }
                    },
                      {
                          xtype: 'button',
                          id: 'btnsettingFenceDrawFenceMenuCreateLayerCircle',
                          height: 62,
                          width: 65,
                          html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerCircle.png" width="55" height="55" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
                              if (_saveLayerTag == 'No') {
                                  Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                              } else {
                                  drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);
                              }


                          }
                      },

                {
                    xtype: 'button',
                    id: 'btnsettingFenceDrawFenceMenuDeleteLayer',
                    height: 62,
                    width: 65,
                    html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerDelete.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {

                    }
                },
               {
                   xtype: 'button',
                   id: 'btnsettingFenceDrawFenceMenuSearchLocation',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerSearchLocation.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SettingFenceSearchLocationShow();

                   }
               },






          ]

      },

      initialize: function () {


      }

  });





    return _settingFenceDrawFenceMenu;
}





function SettingFenceDrawFenceMenuShow() {

    Ext.Viewport.remove(_settingFenceDrawFenceMenu);
    this.overlay = Ext.Viewport.add(SettingFenceDrawFenceMenu());
    this.overlay.show();

}

function SettingFenceDrawFenceMenuHide() {
    _settingFenceDrawFenceMenu.hide();

}





Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFenceDrawFenceMenu', {

});

var countMapChangeSettingDrawFence = 0;
var changeMsgSettingDrawFence;
var drawCircleCountSettingDrawFence = 0;
var drawPolygonCountSettingDrawFence = 0;
var btnGeofenceDrawCircleEventSettingDrawFence;
var btnGeofenceDrawPolygonEventSettingDrawFence;
var checkClik = 'yes';

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

          items: [
              {
              xtype: 'button',
              id: 'btnsettingFenceDrawFenceMenuChangeBaseMap',
              height: 62,
              width: 65,
                  hidden:true,
              html: '<div ><img src="resources/icons/ChangeMapRound.png" width="55" height="55" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {

                  countMapChangeSettingDrawFence = countMapChangeSettingDrawFence + 1;
                
                  if (countMapChangeSettingDrawFence == 1) {
                      mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                      changeMsg = "Please wait,Change Map SATELLITE";
                  } else if (countMapChangeSettingDrawFence == 2) {
                      mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.HYBRID);
                      changeMsg = "Please wait,Change Map HYBRID";

                  } else if (countMapChangeSettingDrawFence == 3) {
                      mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                      changeMsg = "Please wait,Change Map ROADMAP";

                  } else if (countMapChangeSettingDrawFence == 4) {
                      mapgeofenceSettinggeofence.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                      changeMsg = "Please wait,Change Map TERRAIN";

                      countMapChangeSettingDrawFence = 0;
                  }
                  Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                  var task = Ext.create('Ext.util.DelayedTask', function () {

                      Ext.Viewport.unmask();
                    
                  });
                  task.delay(1500);
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

                          drawPolygonCountSettingDrawFence = drawPolygonCountSettingDrawFence + 1;
                          if (drawPolygonCountSettingDrawFence == 1) {
                              drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);

                          } else if (drawPolygonCountSettingDrawFence == 2) {
                              drawingManagerSettinggeofence.setDrawingMode(null);
                              drawPolygonCountSettingDrawFence = 0;

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

                              drawCircleCountSettingDrawFence = drawCircleCountSettingDrawFence + 1;
                              // loadGeofenceResponderAlert();
                              if (drawCircleCountSettingDrawFence == 1) {
                                  // btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle2.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManagerSettinggeofence.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);

                              } else if (drawCircleCountSettingDrawFence == 2) {
                                  //   btnGeofenceDrawCircleEvent.setHtml('<div ><img src="resources/icons/drawcircle.png" width="45" height="45" alt="Company Name"></div>');
                                  drawingManagerSettinggeofence.setDrawingMode(null);
                                  drawCircleCountSettingDrawFence = 0;

                              }


                           


                          }
                      },


                       {
                           xtype: 'button',
                           id: 'btnsettingFenceDrawFenceMenuAlertOutOfFence',
                           height: 62,
                           width: 65,
                           html: '<div ><img src="resources/icons/GeofenceAlertOutOfFence.png" width="55" height="55" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {

                               SettingFencePanelSettingInfoSaveShow();
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

                        Ext.Msg.show({
                            title: 'DELETE V.BOUNDARY',
                            message: 'Delete v.boundary for this item?',
                            width: 500,
                            buttons: Ext.MessageBox.YESNO,
                            iconCls: Ext.MessageBox.INFO,
                            fn: function (buttonId) {
                                if (buttonId == "yes") {
                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Deleting v.boundary...' });
                                    var task = Ext.create('Ext.util.DelayedTask', function () {

                                        alertisplaySettinggeofence = "no";


                                        // DeleteGeoFences(AAccountNo, SingleTrackID);
                                        shapetypeSettinggeofence = "none";
                                        deleteAllSelectedShapeSettinggeofence();
                                        coorshapeSettinggeofence = '';
                                     
                                        AutoFenceTimerDelete(Ext.getCmp('SettingDrawFence_ID').getValue(), GetCurrentUserAccountNo());

                                        Ext.Viewport.unmask();
                                        Ext.getStore('AutoFenceTimerGetByAcc').getProxy().setExtraParams({
                                            AccNo: GetCurrentUserAccountNo(),
                                        });
                                        Ext.StoreMgr.get('AutoFenceTimerGetByAcc').load();
                                    });
                                    task.delay(1000);

                                }


                            }
                        });
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
    CheckHeigtWidth();
}

function SettingFenceDrawFenceMenuHide() {
    _settingFenceDrawFenceMenu.hide();

}


function CheckHeigtWidth()
{
    
    var x = parseInt(screen.width);
    var y = parseInt(screen.height);
    if (x <= 320 && y <=534)
    {
        Ext.getCmp('btnsettingFenceDrawFenceMenuAlertOutOfFence').setHidden(true);
    }
}

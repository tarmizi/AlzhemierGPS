


Ext.define('MyGPS.view.MultiPleTracking.CustomePanel.MultipleMapTrackingSettingLayer', {

});
var ipLayer = document.location.protocol + '//' + document.location.host + '/resources/layer/LatestFloorPlan.kml';
var countMapChangeSettingDrawFence = 0;
var changeMsgSettingDrawFence;
var drawCircleCountSettingDrawFence = 0;
var drawPolygonCountSettingDrawFence = 0;
var btnGeofenceDrawCircleEventSettingDrawFence;
var btnGeofenceDrawPolygonEventSettingDrawFence;
var checkClik = 'yes';

var _multipleMapTrackingSettingLayer;
var historicalOverlay;

function MultipleMapTrackingSettingLayer() {
    _multipleMapTrackingSettingLayer =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_multipleMapTrackingSettingLayerID',
      draggable: false,
      left: 55,
      bottom: 370,
      zIndex: 10,
      // bottom: 165,

      showAnimation: {
          type: 'slide',
          direction: 'right',
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
              id: 'btnmultipleMapTrackingSettingLayerCreateLayerRectangle',
              height: 62,
              width: 65,
              html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerRectangle.png" width="55" height="55" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {
                
                  if (_saveLayerTag == 'No') {
                      Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                  } else {
                      _drawingManagerSettingLayer.setDrawingMode(google.maps.drawing.OverlayType.RECTANGLE);
                  }
              }
          },

                  {
                      xtype: 'button',
                      id: 'btnmultipleMapTrackingSettingLayerCreateLayerPolygon',
                      height: 62,
                      width: 65,
                      html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolygon.png" width="55" height="55" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {


                          if (_saveLayerTag == 'No')
                          {
                              Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                          } else {
                              _drawingManagerSettingLayer.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
                          }
                              
                       
                      }
                  },
                    {
                        xtype: 'button',
                        id: 'btnmultipleMapTrackingSettingLayerCreateLayerPolyLine',
                        height: 62,
                        width: 65,
                        html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerPolyline.png" width="55" height="55" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                           
                            if (_saveLayerTag == 'No') {
                                Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                            } else {
                                _drawingManagerSettingLayer.setDrawingMode(google.maps.drawing.OverlayType.POLYLINE);
                            }
                        }
                    },
                      {
                          xtype: 'button',
                          id: 'btnmultipleMapTrackingSettingLayerCreateLayerCircle',
                          height: 62,
                          width: 65,
                          html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerCircle.png" width="55" height="55" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
                              if (_saveLayerTag == 'No') {
                                  Ext.Msg.alert('Please Saved Previous Layer to be able <br> create next layer.!!!');
                              } else {
                                  _drawingManagerSettingLayer.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE);
                              }
                             
                              
                          }
                      },

                {
                    xtype: 'button',
                    id: 'btnmultipleMapTrackingSettingLayerDeleteLayer',
                    height: 62,
                    width: 65,
                    html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerDelete.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {


                        //var imageBounds = {
                        //    north: 40.773941,
                        //    south: 40.712216,
                        //    east: -74.12544,
                        //    west: -74.22655
                        //};

                        //historicalOverlay = new google.maps.GroundOverlay(
                        //    'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
                        //    imageBounds);
                        //historicalOverlay.setMap(multiTrackingMap);

                        alert(ipLayer+'xxxdQQQQQxdxxxxxxq');
                        //  var kmzLayer = new google.maps.KmlLayer(ipLayer);


                        var kmzLayer1 = new google.maps.KmlLayer('http://192.168.0.107/FloorPla3A.kmz'
                          );
                        kmzLayer1.setMap(multiTrackingMap);
                      


                        //var kmzLayer2 = new google.maps.KmlLayer('http://angkasarnd.my:8100/Image.kmz'
                        //   , { preserveViewport: true });
                    






                        //var listener1 = google.maps.event.addListener(kmzLayer1, 'metadata_changed', function () {
                        //    // When it's drawn (metadata changed), clear listener, draw warningsLayer ...
                        //    google.maps.event.clearListeners(kmzLayer1, 'metadata_changed');
                        //    kmzLayer2.setMap(multiTrackingMap);

                         

                        //});
                       
                    }
                },
               {
                   xtype: 'button',
                   id: 'btnmultipleMapTrackingSettingLayerSearchLocation',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/multipleMapTrackingSettingLayerCreateLayerSearchLocation.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       MultipleMapTrackingSearchLocationShow();

                   }
               },
                   
          




          ]

      },

      initialize: function () {


      }

  });





    return _multipleMapTrackingSettingLayer;
}





function MultipleMapTrackingSettingLayerShow() {

    Ext.Viewport.remove(_multipleMapTrackingSettingLayer);
    this.overlay = Ext.Viewport.add(MultipleMapTrackingSettingLayer());
    this.overlay.show();

}

function MultipleMapTrackingSettingHide() {
    _multipleMapTrackingSettingLayer.hide();

}


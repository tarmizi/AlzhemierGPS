
var dialogboxHistoryTimeset;
var _traceAlertFenceMap;
var flightPlanCoordinatess = new Array();
var ttpoint;
var traceAlertMapGeocode_Lat;
var traceAlertMapGeocode_Long;
var geocoderTraceAlertFenceMap;
Ext.define('MyGPS.view.TraceAlertFence.TraceAlertFenceMap', {
    extend: 'Ext.Panel',
    xtype: 'TraceAlertFenceMap',
    requires: [
    'Ext.dataview.List',
        'Ext.data.Store', 'Ext.Map'

    ],
  
    config: {
       
        id: 'TraceAlertFenceMapID',
        layout: 'fit',
        styleHtmlContent: true,
        //layout: { type: 'card', animation: { type: 'slide', direction: 'right' } },
        ////layout: 'card',
        items: [

 {
     xtype: 'map',
     id: 'TraceAlertFenceMapMapID',
     mapOptions: {

         // center: new google.maps.LatLng(5.4445234, 101.91246603),
         zoom: 6,
         //mapTypeId: google.maps.MapTypeId.HYBRID,
         fullscreenControl:false,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         streetViewControl: false,
         streetViewControlOptions: {
             position: google.maps.ControlPosition.TOP_RIGHT,
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             position: google.maps.ControlPosition.TOP_LEFT
         },
       
     },

     listeners: {
         maprender: function (comp, map) {

             _traceAlertFenceMap = map;
             geocoderTraceAlertFenceMap = new google.maps.Geocoder();

         }
     },

     items: [

         {

             xtype: 'toolbar',
             title: '<font size="4" color="white">V.Boundary Trace Alert</font>',
             docked: 'top',
             id: 'toolbarTraceAlertFenceMapTop',
             //  hidden:true,
             items:
                    [


                        {
                            xtype: 'button',

                            id: 'btnTraceAlertFenceMapHome',
                            //  text: 'Show',
                            iconCls: 'home',
                            // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {
                                Ext.getCmp('mainView').setActiveItem(1);
                                
                            }



                        },

                          {
                              xtype: 'spacer'
                          },
                                    {
                                        xtype: 'button',
                                        //right: -7,
                                        //top: 1,
                                        id: 'btnTraceAlertFenceMapAccInfo',
                                        html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                        //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {



                                        }
                                    },


                    ]

         },






         {


             xtype: 'toolbar',
             // xtype: 'titlebar',
             docked: 'bottom',

             items: [

                   {
                       xtype: 'spacer'
                   },
                  {
                      
                   
                      xtype: 'button',
                      id: 'btnTraceAlertMapBack',
                      height: 40,
                      width: 40,
                      margin:'0 -15 0 0',
                      html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="30" height="30" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                         
                          resetMapTraceAlertFenceMap();
                          Ext.getCmp('mainView').setActiveItem(12);

                      }
                  },
                

                  {
                   
                     // ui: 'action',
                      xtype: 'button',
                      height: 43,
                      width: 43,
                      id: 'btnTraceAlertMapShowInfo',
                      html: '<div ><img src="resources/icons/WhiteExpendIcon.png" width="33" height="33" alt="Company Name"></div>',
                      ui: 'plain',
                      //id: 'testButtonhistoryploting',
                      //text: 'Show Info',
                      handler: function () {

                          TraceAlertFenceHistoryInfoShow();
                          TraceAlertFenceHistoryInfoSetDetails();
                        //  Ext.getCmp('TraceAlertFenceHistoryInfoSummaryID').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:' + TrackItemAlert + '</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.B Area</td> <td class="tdgpslabel">' + FenceAreaName + '</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">' + TimeAlert + '</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + '(KM) | Point: ' + traceAlertCountPoint + '</td></tr></table>');


                      }
                  },
             ]


         }











     ]





 },








        ]
    }
});
var pathXY = "";
var LatitudeHH;
var LongitudeHH;
var SpeedHH;
var DateDTHH;
var _DataStore_getTrackID;
var dateFrom;
var dateFromFormated;
var dateTo;
var dateToFormated;
var timeFrom = '00:00';
var timeTo = '00:00';
var trackID;
var TrackItem;
var lineXYpath = [];
var Xarr = [];
var Yarr = [];
var Spdarr = [];
var DTarr = [];
var xyHistory = [];
var markersArray = [];
var flightPath;
var draw_polygonTraceAlertDrawFence;
var draw_circleTraceAlertDrawFence;
var polyLengthInMeters;
var isrecenter;
var travellengthkm;
var traceAlertCountPoint;


function removeLine() {
    //for (i = 0; i < line.length; i++) {
    //    line[i].setMap(null); //or line[i].setVisible(false);
    //}
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }




}




function resetMapTraceAlertFenceMap() {

    var bound;

    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }
    if (draw_polygonTraceAlertDrawFence)
    {
        draw_polygonTraceAlertDrawFence.setMap(null);
    }

    if (draw_circleTraceAlertDrawFence) {
        draw_circleTraceAlertDrawFence.setMap(null);
    }
  

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center Map...' });
    var task = Ext.create('Ext.util.DelayedTask', function () {


        _traceAlertFenceMap.setZoom(5);      // This will trigger a zoom_changed on the map
        _traceAlertFenceMap.setCenter(new google.maps.LatLng(4.65307992, 102.11242676));

        Ext.Viewport.unmask();

    });
    task.delay(1000);

}

function TraceAlertFencePlotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert, GeofenceID) {

    //Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
    //    TrackID: TrackIDAlert,
    //    DateFrom: DateAlert,
    //    DateTo: DateAlert,
    //    geofenceID: GeofenceID,
    //});
    //Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
            TrackID: TrackIDAlert,
            DateFrom: DateAlert,
            DateTo: DateAlert,
            geofenceID: GeofenceID,
        });
        Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();
        var myStoreHH = Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID');
        var co = myStoreHH.getCount();

        var ii = 0;
        Xarr.length = 0;
        Yarr.length = 0;
        Spdarr.length = 0;
        DTarr.length = 0;
        pathXY = "";
        if (co >= 1) {
            pointCount = co;
            console.log("first:" + pointCount);
            for (ii = 0; ii < co; ii++) {
                var modelRecordHH = myStoreHH.getAt(ii);
                Xarr[ii] = modelRecordHH.get('Longituded');
                Yarr[ii] = modelRecordHH.get('Latituded');
                DTarr[ii] = modelRecordHH.get('AlertDate');
               
                //  console.log("Count:" + ii + '' + modelRecordHH.get('AlertDate'));

            }
            isrecenter = '1';
            var modelRecordTraceAlert = myStoreHH.getAt(0);
            var typeshape = modelRecordTraceAlert.get('ShapeType');
            var pathxy = modelRecordTraceAlert.get('FencePath');
            var pathlenght = modelRecordTraceAlert.get('Fencelength');
            TraceAlertDrawFence(typeshape, pathxy, pathlenght);
            TraceAlertFenceDrawlinexypathhistory(pathXY, TrackIDAlert, DateAlert, DateAlert, TrackItemAlert);
         
        } else {
            isrecenter = '0';
            Ext.Msg.alert("No Signal Point Detected.!!");

        }

        Ext.Viewport.unmask();
     
    });
    task.delay(1000);

}



//var infoBubble;
var map;
var bounds;
var imagie;
var flightPath;
var travellength;
var travellengthkm;
var marker, i;
var pointCount;
var ipImage = document.location.protocol + '//' + document.location.host + '/resources/icons/';
var TraceAlertMarkerImage;
//var flightPlanCoordinates = new Array();
function TraceAlertFenceDrawlinexypathhistory(XYhistoryPath, TrackIDAlert, DateAlert, DateAlert, TrackItemAlert) {
    // flightPlanCoordinates.length = 0;


    var flightPlanCoordinates = new Array();

    var locations = [];


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Draw Line..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        setTimeout(function () {



            bounds = new google.maps.LatLngBounds();

            for (i = 0; i < Xarr.length; i++) {
                //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
                // bounds.extend(point);
                var point = new google.maps.LatLng(Yarr[i], Xarr[i]);
                bounds.extend(point);

                TraceAlertMarkerImage = {
                    url: ipImage + 'geofencemarker.png', // url
                    scaledSize: new google.maps.Size(80, 80), // scaled size
                    //  origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(40, 40) // anchor
                };





                marker = new google.maps.Marker({
                    //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                    position: new google.maps.LatLng(Yarr[i], Xarr[i]),
                    //optimized: false,
                    //flat: true,
                  //  icon: TraceAlertMarkerImage,
                    map: _traceAlertFenceMap
                });

                markersArray.push(marker);








                flightPlanCoordinates.push(point);
                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });

                lineXYpath.push(flightPath);

                flightPath.setMap(_traceAlertFenceMap);
                polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPath.getPath().getArray());
                var travellength = parseInt(polyLengthInMeters);
                travellength = +Math.floor(polyLengthInMeters);
                travellengthkm = travellength / 1000;
                traceAlertCountPoint = i;
                TraceAlertFenceHistoryInfoSetDetails();
            //    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + TrackIDAlert + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellength.toFixed(1) + " M" + "| Point:" + pointCount + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItemAlert + '</td></tr></table>');
             
                //Ext.getCmp('TraceAlertFenceHistoryInfoSummaryID').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:' + TrackItemAlert + '</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.B Area</td> <td class="tdgpslabel">' + FenceAreaName + '</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">' + TimeAlert + '</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + '(KM) | Point: ' + traceAlertCountPoint + '</td></tr></table>');


                google.maps.event.addListener(marker, 'mousedown', (function (marker, i) {


                    return function () {
                        var infowindow = new google.maps.InfoWindow();
                        var dt = DTarr[i].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');

                        infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br>Signal Date:<b>" + dt + "</b></font>");
                        //infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b></font>");

                        // infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
                        infowindow.open(_traceAlertFenceMap, marker);
                    }
                })
        (marker, i));


            }

            _traceAlertFenceMap.fitBounds(bounds);
            //  travellengthkm = travellength / 1000;
         
        }, 200);

        Ext.Viewport.unmask();

    });
    task.delay(1000);

  


}


var isfirst = '1';





var ixy = 1;                     //  set your counter to 1

function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(1);
}


var arrTraceAlertDrawFence = [];
function TraceAlertDrawFence(typeshape, pathxy, pathlenght) {
    //alert(typeshape + pathxy + pathlenght);

    console.log(typeshape);
    arrTraceAlertDrawFence.length = 0;
    if (typeshape == 'circle') {
        var globalFileTypeId = pathxy.split(',');
        var b = parseInt(pathlenght);
        var ctr = new google.maps.LatLng(globalFileTypeId[0], globalFileTypeId[1]);
        traceAlertMapGeocode_Lat = globalFileTypeId[0];
        traceAlertMapGeocode_Long = globalFileTypeId[1];
         draw_circleTraceAlertDrawFence = new google.maps.Circle({
            center: ctr,
            radius: b,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: _traceAlertFenceMap
        });
         //var bounds = new google.maps.LatLngBounds();
         //bounds.extend(ctr);
        _traceAlertFenceMap.panTo(ctr);
        // _traceAlertFenceMap.fitBounds(bounds);
         _traceAlertFenceMap.setZoom(13);
       
         //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Generate Virtual fence...' });
         //var task = Ext.create('Ext.util.DelayedTask', function () {
            
         //    Ext.Viewport.unmask();
         //});
         //task.delay(1500);
     

    }
    if (typeshape == 'polygon') {

        var polysplit = pathxy.split('),');




        var index, len;
        var a = polysplit;
        var polyX;
        var polyY;
        for (index = 0, len = a.length; index < len; ++index) {
            //alert(a[index] + ')');

            var splitresult = a[index] + ')'.split(',');
            var text = splitresult.replace(/[\])}[{(]/g, '');
            var pathpoly = text.split(',');

            arrTraceAlertDrawFence.push(new google.maps.LatLng(pathpoly[0], pathpoly[1]));
            polyY = pathpoly[0];
            polyX = pathpoly[1];
        }
        traceAlertMapGeocode_Lat = polyY;
        traceAlertMapGeocode_Long = polyX;
         draw_polygonTraceAlertDrawFence = new google.maps.Polygon({
            paths: arrTraceAlertDrawFence,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            // strokeColor: "#FF8800",            
            //strokeOpacity: 0.8,
            //strokeWeight: 3,
            //fillColor: "#FF8800",
            //fillOpacity: 0.35
        });
        draw_polygonTraceAlertDrawFence.setMap(_traceAlertFenceMap);

        var ctr = new google.maps.LatLng(polyY, polyX);
        _traceAlertFenceMap.panTo(ctr);
        var shapeLength = parseInt(pathlenght);
        console.log(shapeLength);
        if (shapeLength <= 1)
        {
            _traceAlertFenceMap.setZoom(18);
        } if (shapeLength > 1 && shapeLength <= 10)
        {
            _traceAlertFenceMap.setZoom(16);
        } if (shapeLength > 10 && shapeLength <= 100) {
            _traceAlertFenceMap.setZoom(14);
        } if (shapeLength > 100 && shapeLength <= 500) {
            _traceAlertFenceMap.setZoom(11);
        } if (shapeLength > 500) {
            _traceAlertFenceMap.setZoom(8);
        }
       



    }

    

}

var dialogboxHistoryTimeset;
var _traceAlertFenceMap;
var flightPlanCoordinatess = new Array();
var ttpoint;

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
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         streetViewControl: true,
         streetViewControlOptions: {
             position: google.maps.ControlPosition.TOP_RIGHT,
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             position: google.maps.ControlPosition.TOP_RIGHT
         },
       
     },

     listeners: {
         maprender: function (comp, map) {

             _traceAlertFenceMap = map;

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
                      id: 'backButtonhistoryploting',
                      height: 40,
                      width: 40,
                      html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="30" height="30" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          TraceAlertFenceHistoryInfoHide();
                          resetMapTraceAlertFenceMap();
                          Ext.getCmp('mainView').setActiveItem(12);

                      }
                  },
                

                  {
                   
                      ui: 'action',
                      xtype: 'button',
                      id: 'testButtonhistoryploting',
                      text: 'Show Info',
                      handler: function () {

                          TraceAlertFenceHistoryInfoShow();
                         
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

var polyLengthInMeters;
var isrecenter;




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



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center Map...' });
    var task = Ext.create('Ext.util.DelayedTask', function () {


        _traceAlertFenceMap.setZoom(5);      // This will trigger a zoom_changed on the map
        _traceAlertFenceMap.setCenter(new google.maps.LatLng(4.65307992, 102.11242676));

        Ext.Viewport.unmask();

    });
    task.delay(1000);

}

function TraceAlertFencePlotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert, GeofenceID) {

    Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
        TrackID: TrackIDAlert,
        DateFrom: DateAlert,
        DateTo: DateAlert,
        geofenceID: GeofenceID,
    });
    Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
            TrackID: TrackIDAlert,
            DateFrom: DateAlert,
            DateTo: DateAlert,
            geofenceID: GeofenceID,
        });
        Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();
        var myStoreHH = Ext.getStore('GeofenceAlertHistoryStore');
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
//var flightPlanCoordinates = new Array();
function TraceAlertFenceDrawlinexypathhistory(XYhistoryPath, TrackIDAlert, DateAlert, DateAlert, TrackItemAlert) {
    // flightPlanCoordinates.length = 0;


    var flightPlanCoordinates = new Array();

    var locations = [];

    console.log(Xarr.length);

    setTimeout(function () {



        bounds = new google.maps.LatLngBounds();

        for (i = 0; i < Xarr.length; i++) {
            //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
            // bounds.extend(point);
            var point = new google.maps.LatLng(Yarr[i], Xarr[i]);
            bounds.extend(point);
            //  console.log(locations[i][0], locations[i][1]);
            marker = new google.maps.Marker({
                //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                position: new google.maps.LatLng(Yarr[i], Xarr[i]),
                animation: google.maps.Animation.DROP,
                //icon: imagie,
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

            Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + TrackIDAlert + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellength.toFixed(1) + " M" + "| Point:" + pointCount + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItemAlert + '</td></tr></table>');
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

    }, 1000);


}


var isfirst = '1';





var ixy = 1;                     //  set your counter to 1

function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(1);
}




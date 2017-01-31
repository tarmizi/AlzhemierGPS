Ext.define('MyGPS.view.TraceAlertFence.CustomePanel.TraceAlertFenceHistoryInfo', {

});





var _traceAlertFenceHistoryInfo;

function TraceAlertFenceHistoryInfo()
{

    _traceAlertFenceHistoryInfo =
        Ext.create('Ext.Panel', {

            xtype: 'panel',
            // style: 'background-color:#57A0DC',
            height: 180,
            //width: 320,
            //  centered: true,
            // height: '10%',
            width: '100%',
            // centered: false,
            id: 'TraceAlertFenceHistoryInfoID',
            draggable: false,

            right: 0,
            bottom: 0,

            style: 'background-color: #57A0DC;',


            items: {
                id: 'TraceAlertFenceHistoryInfoSummaryID',

               
                    html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:Fetching Data...</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.Boundary Area Name</td> <td class="tdgpslabel">Fetching Data...</td></tr><tr> <td class="tdgpslabel">V.Boundary Address</td> <td class="tdgpslabel">Geocode in Progress..<br>Geocode Service on basic mode version..<br>Subscribe advanced mode..<br>Please wait..</td></tr><tr> <td class="tdgpslabel">Active V.Boundary Time</td> <td class="tdgpslabel">Fetching Data...</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">Fetching Data...</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">Fetching Data...</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">Calculating...(KM) | Point:Counting Point...</td></tr></table>',
                style: 'background-color: #57A0DC;',
                items: {

                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'right',
                        // align: 'end'
                    },
                    style: 'background-color: #57A0DC;',
                    items: [


                        {
                            xtype: 'button',
                            hidden: true,
                            Id: 'stopTraceAlertFenceHistoryInfo',
                            // margin: 'top left bottom right',
                            margin: '-40 0 0 0',
                            //style: 'margin-top: 350px;margin-left: 500px;',
                            // text: 'Start',
                            height: 45,
                            width: 50,
                            html: '<div ><img src="resources/icons/stophistory.png" width="40" height="40" alt="Company Name"></div>',

                            //ui:'round'
                            ui: 'plain',
                            handler: function () {

                                firstime = '1';
                                resumeCounter = 0;
                                counter = 0;
                                btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                                clearTimeout(myVar);
                            }
                        },


                    {
                        xtype: 'button',
                        hidden: true,
                        Id: 'playTraceAlertFenceHistoryInfo',
                        //   hidden:true,
                        // margin: 'top left bottom right',
                        margin: '-40 0 0 0',
                        //style: 'margin-top: 350px;margin-left: 500px;',
                        // text: '',
                        height: 45,
                        width: 50,
                        html: '<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>',
                        //ui:'round'
                        ui: 'plain',
                        handler: function (btn) {
                            if (!this.overlay) {
                                this.overlay = Ext.Viewport.add(_valuepanelhistoryPlay
                            );

                            }
                            this.overlay.show();

                            btnplay = btn;
                            //  btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');

                            console.log(firstime);
                            if (firstime == '1') {

                                console.log("cccccc:" + firstime);
                                btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                                firstime = '0';
                                plystatus = 'play';
                                resumeWatchclockPlay();
                                return;
                            }
                            if ((firstime == '0' && plystatus == 'play') || (firstime == '0' && plystatus == 'resume')) {
                                btn.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                                plystatus = 'pause';
                                return;
                            }

                            if (firstime == '0' && plystatus == 'pause') {
                                plystatus = 'resume';
                                counter = resumeCounter;
                                btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                                resumeWatchclockPlay();
                            }


                        }
                    },

                    {
                        xtype: 'button',

                        Id: 'hideTraceAlertFenceHistoryInfo',
                        //   hidden:true,
                        // margin: 'top left bottom right',
                        margin: '-40 0 0 -5',
                        //style: 'margin-top: 350px;margin-left: 500px;',
                        // text: '',
                        height: 45,
                        width: 55,
                        html: '<div ><img src="resources/icons/TraceAlertShrinkInfo.png" width="45" height="43" alt="Company Name"></div>',
                        //ui:'round'
                        ui: 'plain',
                        handler: function () {

                            TraceAlertFenceHistoryInfoHide();
                        }
                    },

                    ]


                }

            }


        });
    return _traceAlertFenceHistoryInfo;

}





function TraceAlertFenceHistoryInfoShow() {
    Ext.Viewport.remove(_traceAlertFenceHistoryInfo);
    this.overlay = Ext.Viewport.add(TraceAlertFenceHistoryInfo());
    this.overlay.show();
}

function TraceAlertFenceHistoryInfoHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');
    _traceAlertFenceHistoryInfo.hide();
}


function TraceAlertFenceHistoryInfoSetDetails()
{
   

    var lat = parseFloat(traceAlertMapGeocode_Lat);
    var lng = parseFloat(traceAlertMapGeocode_Long);
    var latlng = new google.maps.LatLng(lat, lng);
    geocoderTraceAlertFenceMap.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

                Ext.getCmp('TraceAlertFenceHistoryInfoSummaryID').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:' + TrackItemAlert + '</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.Boundary Area Name</td> <td class="tdgpslabel">' + FenceAreaName + '</td></tr><tr> <td class="tdgpslabel">V.Boundary Address</td> <td class="tdgpslabel">' + results[1].formatted_address + '</td></tr><tr> <td class="tdgpslabel">Active V.Boundary Time</td> <td class="tdgpslabel">' + ActiveVBoundaryTime + '</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">' + TimeAlert + '</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + '(KM) | Point: ' + traceAlertCountPoint + '</td></tr></table>');

              
            } else {
                Ext.getCmp('TraceAlertFenceHistoryInfoSummaryID').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:' + TrackItemAlert + '</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.Boundary Area Name</td> <td class="tdgpslabel">' + FenceAreaName + '</td></tr><tr> <td class="tdgpslabel">V.Boundary Address</td> <td class="tdgpslabel">No Address Found !</td></tr><tr> <td class="tdgpslabel">Active V.Boundary Time</td> <td class="tdgpslabel">' + ActiveVBoundaryTime + '</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">' + TimeAlert + '</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + '(KM) | Point: ' + traceAlertCountPoint + '</td></tr></table>');

            }
        } else {
            Ext.getCmp('TraceAlertFenceHistoryInfoSummaryID').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">Kid Name:' + TrackItemAlert + '</td> <td class="tdgpsdata">-</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">V.Boundary Area Name</td> <td class="tdgpslabel">' + FenceAreaName + '</td></tr><tr> <td class="tdgpslabel">V.Boundary Address</td> <td class="tdgpslabel">Geocoder failed due to:' + status + '</td></tr><tr> <td class="tdgpslabel">Active V.Boundary Time</td> <td class="tdgpslabel">' + ActiveVBoundaryTime + '</td></tr><tr> <td class="tdgpslabel">Date</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Time Alert Started</td> <td class="tdgpslabel">' + TimeAlert + '</td></tr><tr> <td class="tdgpslabel">Length</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + '(KM) | Point: ' + traceAlertCountPoint + '</td></tr></table>');

           
        }
    });
}
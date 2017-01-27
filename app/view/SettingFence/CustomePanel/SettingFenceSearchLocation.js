Ext.define('MyGPS.view.SettingFence.CustomePanel.SettingFenceSearchLocation', {

});


var _settingFenceSearchLocation;
var _linkedMap = "location.html";
function SettingFenceSearchLocation() {



    _settingFenceSearchLocation = Ext.create('Ext.Panel', {

        height: 250,
        width: 270,

        id: 'settingFenceSearchLocationID',
        centered: true,
        // draggable: true,
        //hideOnMaskTap: true,//
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null
        },
        style: "background-color:black; color:black;",
        //style: 'background-color: transparent;',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                id: 'toolbarsettingFenceSearchLocationTopID',
                title: 'Enter Address',


            },

               {
                   xtype: 'container',
                   height: '100%',
                   width: '100%',
                   // margin: 10,

                   items: [

                        {

                            html: '<iframe id="settingFenceSearchLocationMyIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + _linkedMap + '"  width="100%" height="100%" scrolling="no" ></iframe>',
                        },
                   ]
               },

             {
                 docked: 'bottom',
                 xtype: 'toolbar',
                 id: 'toolbarsettingFenceSearchLocationBottomID',
                 items: [


                         {
                             xtype: 'button',
                             //height: 40,
                             //width: 125,
                             // top: 154,
                             id: 'btnsettingFenceSearchLocationnHide',
                             ui: 'action',
                             text: 'Cancel',
                             handler: function () {
                                 SettingFenceSearchLocationHide();
                             }

                         },
                          {
                              xtype: 'spacer'
                          },
                         {
                             xtype: 'button',
                             //height: 40,
                             //width: 125,
                             //   top: 154,
                             id: 'btnsettingFenceSearchLocation',
                             ui: 'action',
                             text: 'Search',
                             handler: function () {
                                 var xc = localStorage.getItem("coorX");
                                 if (xc == null || xc == undefined) {
                                     Ext.Msg.alert("Address is empty!!");
                                     return;
                                 }
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Locating Address....please wait' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     LocateMap_SettingFenceSearchLocation();
                                     Ext.Viewport.unmask();

                                 });
                                 task.delay(1500);


                                 // var x = localStorage.getItem("latitudeY");
                                 // alert(longitudeXX);
                             }

                         },
                 ]

             },



















        ],



    });

    return _settingFenceSearchLocation;
}




function SettingFenceSearchLocationShow() {
    Ext.Viewport.remove(_settingFenceSearchLocation);
    this.overlay = Ext.Viewport.add(SettingFenceSearchLocation());
    this.overlay.show();
}



function SettingFenceSearchLocationHide() {
    _settingFenceSearchLocation.hide();
}






function LocateMap_SettingFenceSearchLocation() {

    var xc = localStorage.getItem("coorX");
    var yc = localStorage.getItem("coorY");

    mapgeofenceSettinggeofence.setZoom(14);      // This will trigger a zoom_changed on the map
    mapgeofenceSettinggeofence.setCenter(new google.maps.LatLng(yc, xc));
    localStorage.removeItem("coorX");
    localStorage.removeItem("coorY");
    SettingFenceSearchLocationHide();
}
Ext.define('MyGPS.view.MultiPleTracking.CustomePanel.MultipleMapTrackingSearchLocation', {

});

var _multipleMapTrackingSearchLocation;
var _linkedMap = "location.html";
function MultipleMapTrackingSearchLocation() {


   
    _multipleMapTrackingSearchLocation = Ext.create('Ext.Panel', {

        height: 250,
        width: 270,
      
        id: 'MultipleMapTrackingSearchLocationID',
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
                id: 'toolbarMultipleMapTrackingSearchLocationTopID',
                title: 'Enter Address',
             

            },

               {
                   xtype: 'container',
                   height: '100%',
                   width: '100%',
                   // margin: 10,
                 
                   items: [

                        {

                            html: '<iframe id="MultipleMapTrackingSearchLocationMyIframe2" src="' + document.location.protocol + '//' + document.location.host + '/' + _linkedMap + '"  width="100%" height="100%" scrolling="no" ></iframe>',
                        },
                   ]
               },

             {
                 docked: 'bottom',
                 xtype: 'toolbar',
                 id: 'toolbarMultipleMapTrackingSearchLocationBottomID',
                 items: [

                     
                         {
                             xtype: 'button',
                             //height: 40,
                             //width: 125,
                             // top: 154,
                             id: 'btnMultipleMapTrackingSearchLocationHide',
                             ui: 'action',
                             text: 'Cancel',
                             handler: function () {
                                 MultipleMapTrackingSearchLocationHide();
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
                             id: 'btnMultipleMapTrackingSearchLocation',
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
                                     LocateMap_multipleMapTrackingSearchLocation();
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

    return _multipleMapTrackingSearchLocation;
}





function MultipleMapTrackingSearchLocationShow()
{
    Ext.Viewport.remove(_multipleMapTrackingSearchLocation);
    this.overlay = Ext.Viewport.add(MultipleMapTrackingSearchLocation());
    this.overlay.show();
}



function MultipleMapTrackingSearchLocationHide() {
    _multipleMapTrackingSearchLocation.hide();
}






function LocateMap_multipleMapTrackingSearchLocation() {

    var xc = localStorage.getItem("coorX");
    var yc = localStorage.getItem("coorY");

    multiTrackingMap.setZoom(14);      // This will trigger a zoom_changed on the map
    multiTrackingMap.setCenter(new google.maps.LatLng(yc, xc));
    localStorage.removeItem("coorX");
    localStorage.removeItem("coorY");
    MultipleMapTrackingSearchLocationHide();
}
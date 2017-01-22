Ext.define('MyGPS.view.MultiPleTracking.API.MultipleTrackingAPI', {

});

var _saveLayerTag ;




function Layer_InsertUpdate(LayerID, LayerPath, LayerName, LayerType, LayerLength, CreatedBy, ModifiedBy, LayerStatus, BuildingName, FloorName, SectorName, R1) {

   
    _saveLayerTag = 'No';



    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/Layer/LayerInsertUpdate',

        params: {

            LayerID: LayerID,
            LayerPath: LayerPath,
            LayerName: LayerName,
            LayerType: LayerType,
            LayerLength: LayerLength,
            CreatedBy: CreatedBy,
            ModifiedBy: ModifiedBy,
            LayerOrder: 1,
            LayerStatus: LayerStatus,
            BuildingName: BuildingName,
            FloorName: FloorName,
            SectorName: SectorName,
            R1: R1,
        },
        success: function (result, request) {
            _saveLayerTag = 'Yes';
            Ext.Msg.alert('Success');
            //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Save Success...' });
            //var task = Ext.create('Ext.util.DelayedTask', function () {
             
            //    Ext.Viewport.unmask();
            //});
            //task.delay(500);

            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            _saveLayerTag = 'No';
            Ext.Msg.alert('Error', request);
          
        }
    });
}
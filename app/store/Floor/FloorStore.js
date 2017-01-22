Ext.define('MyGPS.store.Floor.FloorStore', {

});


var _DataStore_FloorStore_GetAll = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.Floor.FloorGetAllModel',
    id: 'FloorStoreID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/Floor/FloorGetAll',
        //url: document.location.protocol + '//' + document.location.host + '/MilageCountAlertHistory/MilageCountAlertHistoryLoadByDeviceIDAccNo',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    listeners: {
        exception: function (proxy, response, orientation) {
            // console.error('Failure Notificssssssation', response.responseText);
            //console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceSelect');
            Ext.Msg.alert('Loading failed', response.statusText);
        }
    },
    autoLoad: true
});
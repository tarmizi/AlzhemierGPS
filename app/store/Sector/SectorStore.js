Ext.define('MyGPS.store.Sector.SectorStore', {

});


var _DataStore_SectorStore_GetAll = Ext.create('Ext.data.Store', {
    model: 'MyGPS.model.Sector.SectorGetAllModel',
    id: 'SectorStoreID',
    proxy: {
        type: 'ajax',
        url: document.location.protocol + '//' + document.location.host + '/Sector/SectorGetAll',
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
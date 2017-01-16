Ext.define('MyGPS.store.Layer.LayerGetAllStore', {
    extend: 'Ext.data.Store',
    alias: 'store.LayerGetAllstore',
    config: {
        model: 'MyGPS.model.Layer.LayerGetAllModel',
        autoLoad: false,

        proxy: {


            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/Layer/LayerGetAll',
            actionMethods: {
                read: 'GET'
            },


            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },

            listeners: {
                exception: function (proxy, response, orientation) {
                    console.error('Failure Notificssssssation', response.responseText);
                    // Ext.Msg.alert('Loading failed', response.statusText);
                }
            }

        }


    }
});
﻿Ext.define('MyGPS.store.singlesignalTrackingstore', {
    extend: 'Ext.data.Store',
    alias: 'store.singlesignalTrackingstore',
    config: {
        model: 'MyGPS.model.singlesignalTrackingmodel',
        autoLoad: false,

        proxy: {

            //type: 'ajax',
            //url: document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/Signals/GetSignalsMultiples?AccNo=C02',


            type: 'ajax',
            url: document.location.protocol + '//' + document.location.host + '/Signals/GetSignalSingleTracking',
            actionMethods: {
                read: 'GET'
            },

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignals?DeviceID=MNP-1933',

            // url: ip + 'TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

            // url: 'http://192.168.0.105:9007/TrackingAppAPI/Signals/GetSignalsMultiple?AccNo=C02',

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
